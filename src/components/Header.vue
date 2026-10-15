<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'

const lang = inject('lang')
const t = inject('t')

const isScrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 60
}

function setLang(l) {
  lang.value = l
  menuOpen.value = false
}

function scrollTo(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="container">
      <a class="logo" href="#" @click.prevent="scrollTo('hero')">
        <img src="/favicon.svg" alt="" class="logo-icon" />
        <div class="logo-text">
          <span class="logo-en">BLUEPRINT</span>
          <span class="logo-geo">ბლუპრინტი</span>
        </div>
      </a>

      <nav class="nav" aria-label="Main navigation">
        <a @click.prevent="scrollTo('about')">{{ t.nav.about }}</a>
        <a @click.prevent="scrollTo('services')">{{ t.nav.services }}</a>
        <a @click.prevent="scrollTo('contact')">{{ t.nav.contact }}</a>
      </nav>

      <div class="header-right">
        <div class="lang-switcher" role="group" aria-label="Language">
          <button :class="{ active: lang === 'ka' }" @click="setLang('ka')">KA</button>
          <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
          <button :class="{ active: lang === 'ru' }" @click="setLang('ru')">RU</button>
        </div>

        <button
          class="hamburger"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div class="drawer-overlay" :class="{ visible: menuOpen }" @click="menuOpen = false">
        <div class="drawer" :class="{ open: menuOpen }" @click.stop>
          <div class="drawer-logo">
            <img src="/favicon.svg" alt="" class="logo-icon" />
          <div class="logo-text">
            <span class="logo-geo">ბლუპრინტი</span>
            <span class="logo-en">BLUEPRINT</span>
          </div>
          </div>
          <nav class="drawer-nav">
            <a @click.prevent="scrollTo('about')">{{ t.nav.about }}</a>
            <a @click.prevent="scrollTo('services')">{{ t.nav.services }}</a>
            <a @click.prevent="scrollTo('contact')">{{ t.nav.contact }}</a>
          </nav>
          <div class="drawer-lang">
            <button :class="{ active: lang === 'ka' }" @click="setLang('ka')">KA</button>
            <button :class="{ active: lang === 'en' }" @click="setLang('en')">EN</button>
            <button :class="{ active: lang === 'ru' }" @click="setLang('ru')">RU</button>
          </div>
        </div>
      </div>
    </Teleport>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  padding: 22px 0;
  transition: padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.header.scrolled {
  background: #0D2541;
  padding: 14px 0;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  height: 38px;
  width: auto;
  filter: brightness(0) invert(1);
  display: block;
  flex-shrink: 0;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1;
}

.logo-geo {
  font-family: 'Noto Sans Georgian', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.2px;
  line-height: 1.15;
}

.logo-en {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.1;
}

.nav {
  display: flex;
  gap: 36px;
  flex: 1;
  justify-content: center;
}

.nav a {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: color 0.2s;
  position: relative;
  padding-bottom: 2px;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 2px;
  background: #C0492B;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav a:hover {
  color: #fff;
}

.nav a:hover::after {
  transform: scaleX(1);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.lang-switcher {
  display: flex;
  gap: 2px;
}

.lang-switcher button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.65);
  padding: 5px 11px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 2px;
  font-family: inherit;
  line-height: 1;
}

.lang-switcher button:hover {
  border-color: rgba(255, 255, 255, 0.6);
  color: #fff;
}

.lang-switcher button.active {
  background: #C0492B;
  border-color: #C0492B;
  color: #fff;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 4px;
  width: 32px;
  height: 32px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.drawer-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 300;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.drawer-overlay.visible {
  opacity: 1;
  pointer-events: all;
}

.drawer {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #0D2541;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 0;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer.open {
  transform: translateX(0);
}

.drawer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 48px;
}

.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
}

.drawer-nav a {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s, padding-left 0.2s;
  display: block;
}

.drawer-nav a:hover {
  color: #fff;
  padding-left: 8px;
}

.drawer-lang {
  display: flex;
  gap: 6px;
  margin-top: 40px;
}

.drawer-lang button {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.65);
  padding: 8px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: 2px;
  font-family: inherit;
  transition: all 0.2s;
}

.drawer-lang button:hover {
  border-color: rgba(255, 255, 255, 0.6);
  color: #fff;
}

.drawer-lang button.active {
  background: #C0492B;
  border-color: #C0492B;
  color: #fff;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .lang-switcher {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .drawer-overlay {
    display: block;
  }
}
</style>
