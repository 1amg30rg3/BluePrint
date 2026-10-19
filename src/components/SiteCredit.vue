<script setup>
import { inject, ref, computed, onMounted, onUnmounted } from 'vue'
import { agency, agencyCreditUrl } from '../agency.js'

const t = inject('t')
const href = agencyCreditUrl(window.location.hostname)

// The label carries a :name placeholder so each language can put the brand where its grammar needs it.
const label = computed(() => t.value.footer.credit.label.split(':name'))

const link = ref(null)
const lit = ref(false)
let observer

// Light the border once the banner is fully on screen.
onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return
    lit.value = true
    observer.disconnect()
  }, { threshold: 0.9 })
  observer.observe(link.value)
})

onUnmounted(() => observer?.disconnect())

// Glow that follows the pointer.
function onPointerMove(event) {
  const rect = link.value.getBoundingClientRect()
  link.value.style.setProperty('--wsc-mx', `${event.clientX - rect.left}px`)
  link.value.style.setProperty('--wsc-my', `${event.clientY - rect.top}px`)
}
</script>

<template>
  <a
    ref="link"
    class="wsc"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :data-lit="lit ? '' : null"
    @pointermove="onPointerMove"
  >
    <span class="wsc-frame">
      <span class="wsc-orbit" aria-hidden="true"></span>
      <span class="wsc-ring" aria-hidden="true"></span>

      <span class="wsc-pill">
        <span class="wsc-glow" aria-hidden="true"></span>

        <img class="wsc-logo" :src="agency.badge" alt="" width="28" height="28" loading="lazy" />

        <!-- Keep on one line; {{ ' ' }} holds the space before the dot, which Vue would otherwise strip. -->
        <span class="wsc-text">{{ label[0] }}<span class="wsc-brand">{{ agency.name }}</span>{{ label[1] }}<span class="wsc-pitch">{{ ' ' }}<span class="wsc-dot" aria-hidden="true">·</span> {{ t.footer.credit.pitch }}</span></span>

        <span class="wsc-sep" aria-hidden="true"></span>

        <span class="wsc-cta">
          <span class="wsc-cta-label">{{ t.footer.credit.cta }}</span>
          <span class="wsc-arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17 17 7m0 0H8m9 0v9" />
            </svg>
          </span>
        </span>
      </span>
    </span>

    <span class="wsc-sr">{{ t.common.newTab }}</span>
  </a>
</template>

<style scoped>
/*
 * WebSavvys site credit kit (websavvys-credit.css). Only the three colours
 * on .wsc are Blueprint-specific; everything else is the kit as shipped.
 */

@property --wsc-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.wsc {
  /* Terracotta lightened and navy deepened so the button text (ink on gold) and the
     brand (gold on the pill) both reach 4.5:1; the focus outline is 4.4:1 on the footer. */
  --wsc-gold: color-mix(in oklab, var(--c-primary) 82%, white);
  --wsc-ink: color-mix(in oklab, var(--c-navy) 70%, black);
  --wsc-focus: var(--wsc-gold);
  --wsc-gold-hi: color-mix(in oklab, var(--wsc-gold) 45%, white);

  display: inline-flex;
  max-width: 100%;
  border-radius: 999px;
  color: inherit;
  font: inherit;
  line-height: 1;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}

.wsc *,
.wsc *::before,
.wsc *::after {
  box-sizing: border-box;
}

.wsc:focus-visible {
  outline: 2px solid var(--wsc-focus);
  outline-offset: 3px;
}

.wsc-frame {
  position: relative;
  isolation: isolate;
  display: flex;
  min-width: 0;
  padding: 1px;
  border-radius: inherit;
  background: color-mix(in oklab, var(--wsc-gold) 34%, transparent);
  box-shadow: 0 10px 24px -14px rgb(31 22 8 / 0.55);
  transition:
    transform 400ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 400ms ease;
}

.wsc:hover .wsc-frame {
  transform: translate3d(0, -1px, 0);
  box-shadow: 0 16px 30px -14px rgb(31 22 8 / 0.6);
}

.wsc:active .wsc-frame {
  transform: scale(0.985);
  transition-duration: 120ms;
}

/* Border light: .wsc-orbit plays once on view, .wsc-ring loops on hover/focus. */
.wsc-orbit,
.wsc-ring {
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background: conic-gradient(
    from var(--wsc-angle),
    transparent 0deg,
    var(--wsc-gold-hi) 50deg,
    transparent 110deg,
    transparent 180deg,
    var(--wsc-gold) 235deg,
    transparent 290deg
  );
  opacity: 0;
  pointer-events: none;
}

.wsc[data-lit] .wsc-orbit {
  animation: wsc-orbit 2400ms cubic-bezier(0.45, 0, 0.25, 1) 500ms both;
}

.wsc-ring {
  animation: wsc-spin 3600ms linear infinite paused;
  transition: opacity 400ms ease;
}

.wsc:hover .wsc-ring,
.wsc:focus-visible .wsc-ring {
  opacity: 1;
  animation-play-state: running;
}

.wsc-pill {
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 4px;
  border-radius: inherit;
  overflow: hidden;
  background: linear-gradient(180deg, color-mix(in oklab, var(--wsc-ink) 93%, white), var(--wsc-ink));
}

/* Soft light that follows the pointer (position set in onPointerMove). */
.wsc-glow {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(
    110px circle at var(--wsc-mx, 50%) var(--wsc-my, 50%),
    color-mix(in oklab, var(--wsc-gold) 24%, transparent),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 300ms ease;
}

.wsc:hover .wsc-glow {
  opacity: 1;
}

.wsc-logo {
  display: block;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--wsc-gold) 16%, transparent);
  transition:
    transform 550ms cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 300ms ease;
}

.wsc:hover .wsc-logo {
  transform: translate3d(1px, -1px, 0) rotate(-10deg);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--wsc-gold) 32%, transparent);
}

.wsc-text {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.3;
  color: rgb(255 255 255 / 0.74);
}

.wsc-brand {
  font-weight: 600;
  letter-spacing: -0.01em;
  background: linear-gradient(
    90deg,
    var(--wsc-gold-hi) 0%,
    var(--wsc-gold) 25%,
    var(--wsc-gold-hi) 50%,
    var(--wsc-gold) 75%,
    var(--wsc-gold-hi) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: wsc-shine 2800ms linear infinite paused;
}

.wsc:hover .wsc-brand,
.wsc:focus-visible .wsc-brand {
  animation-play-state: running;
}

.wsc-pitch {
  color: rgb(255 255 255 / 0.58);
}

.wsc-dot {
  margin-inline: 0.3em;
  color: var(--wsc-gold);
}

.wsc-sep {
  flex: none;
  width: 1px;
  height: 14px;
  background: rgb(255 255 255 / 0.14);
}

.wsc-cta {
  position: relative;
  overflow: hidden;
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding-inline: 12px 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, color-mix(in oklab, var(--wsc-gold) 82%, white), var(--wsc-gold));
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.35);
  color: var(--wsc-ink);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  transition: box-shadow 300ms ease;
}

/* An occasional light sweep across the button. */
.wsc-cta::after {
  content: '';
  position: absolute;
  inset-block: -30%;
  inset-inline-start: 0;
  inline-size: 22%;
  background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.28), transparent);
  animation: wsc-sheen 9s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  pointer-events: none;
}

.wsc:hover .wsc-cta {
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.45),
    0 0 0 3px color-mix(in oklab, var(--wsc-gold-hi) 18%, transparent);
}

.wsc-arrow {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--wsc-ink);
  color: var(--wsc-gold-hi);
}

.wsc-arrow svg {
  display: block;
  width: 12px;
  height: 12px;
}

.wsc:hover .wsc-arrow svg {
  animation: wsc-arrow 650ms cubic-bezier(0.22, 1, 0.36, 1);
}

.wsc-sr {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* Phones: drop the pitch. Widen this if the footer row is tight on tablets too. */
@media (width < 40rem) {
  .wsc-pitch,
  .wsc-sep {
    display: none;
  }
}

/* Very narrow phones: the button shrinks to its arrow; the label stays for screen readers.
   Widened from the kit's 22.5rem: with the footer's 28px gutters, ka truncates at 375px
   and ka/ru at 360px. */
@media (width < 24rem) {
  .wsc-cta {
    gap: 0;
    padding-inline: 3px;
  }

  .wsc-cta-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
}

@keyframes wsc-spin {
  to {
    --wsc-angle: 360deg;
  }
}

@keyframes wsc-orbit {
  0% {
    --wsc-angle: 0deg;
    opacity: 0;
  }
  20%,
  75% {
    opacity: 1;
  }
  100% {
    --wsc-angle: 360deg;
    opacity: 0;
  }
}

@keyframes wsc-shine {
  to {
    background-position: 100% 0;
  }
}

@keyframes wsc-sheen {
  0%,
  12% {
    transform: translate3d(-160%, 0, 0) skewX(-14deg);
  }
  60%,
  100% {
    transform: translate3d(560%, 0, 0) skewX(-14deg);
  }
}

@keyframes wsc-arrow {
  0% {
    transform: translate3d(0, 0, 0);
  }
  45% {
    transform: translate3d(150%, -150%, 0);
  }
  46% {
    transform: translate3d(-150%, 150%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wsc-frame,
  .wsc-logo,
  .wsc-glow,
  .wsc-ring {
    transition: none;
  }

  .wsc:hover .wsc-frame,
  .wsc:active .wsc-frame,
  .wsc:hover .wsc-logo {
    transform: none;
  }

  .wsc[data-lit] .wsc-orbit,
  .wsc-ring,
  .wsc-brand,
  .wsc:hover .wsc-arrow svg {
    animation: none;
  }

  .wsc-cta::after {
    animation: none;
    opacity: 0;
  }
}
</style>
