<script setup>
import { inject } from 'vue'
const t = inject('t')

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="grid"></div>
      <div class="glow-left"></div>
      <div class="glow-right"></div>
    </div>

    <div class="container">
      <div class="hero-left">
        <p class="hero-label">{{ t.hero.label }}</p>

        <h1 class="hero-headline">
          <span v-for="(line, i) in t.hero.headline.split('\n')" :key="i" class="line">
            {{ line }}
          </span>
        </h1>

        <p class="hero-sub">{{ t.hero.subtext }}</p>

        <div class="hero-actions">
          <button class="btn btn-primary" @click="scrollToContact">
            {{ t.hero.cta }}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-val">10+</span>
            <span class="stat-lbl">{{ t.about.stat1.label }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-val">200+</span>
            <span class="stat-lbl">{{ t.about.stat2.label }}</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-val">500+</span>
            <span class="stat-lbl">{{ t.about.stat3.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <img src="/house_lines.svg" alt="" class="house-img" aria-hidden="true" />
      </div>
    </div>

    <div class="scroll-cue" aria-hidden="true">
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0D2541;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(61, 108, 168, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(61, 108, 168, 0.07) 1px, transparent 1px);
  background-size: 64px 64px;
}

.glow-left {
  position: absolute;
  top: 20%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(ellipse, rgba(192, 73, 43, 0.12) 0%, transparent 65%);
}

.glow-right {
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 500px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(61, 108, 168, 0.14) 0%, transparent 65%);
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 120px 28px 80px;
  display: grid;
  grid-template-columns: 45fr 55fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #C0492B;
  margin-bottom: 22px;
}

.hero-headline {
  display: flex;
  flex-direction: column;
  font-size: clamp(2.6rem, 5.5vw, 4.2rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.08;
  letter-spacing: -1.5px;
  margin-bottom: 28px;
}

.line {
  display: block;
}

.hero-sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.75;
  margin-bottom: 44px;
  max-width: 420px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 60px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 15px 34px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}

.btn-primary {
  background: #C0492B;
  color: #fff;
}
.btn-primary:hover {
  background: #A23C22;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(192, 73, 43, 0.4);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 28px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-val {
  font-size: 1.7rem;
  font-weight: 800;
  color: #C0492B;
  line-height: 1;
  letter-spacing: -1px;
}

.stat-lbl {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
  letter-spacing: 0.3px;
  line-height: 1.4;
  max-width: 90px;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
}

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.house-img {
  width: 100%;
  height: auto;
  display: block;
}

.scroll-cue {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-line {
  width: 1px;
  height: 64px;
  background: linear-gradient(to bottom, #C0492B, transparent);
  animation: scroll-pulse 2.2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.7) translateY(0); }
  50% { opacity: 1; transform: scaleY(1) translateY(4px); }
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 48px;
    padding-top: 130px;
    padding-bottom: 80px;
  }

  .hero-right {
    display: none;
  }

  .hero-sub {
    max-width: 100%;
  }

  .hero-stats {
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .hero-headline {
    font-size: clamp(2.2rem, 10vw, 3rem);
    letter-spacing: -0.5px;
  }

  .hero-stats {
    flex-wrap: wrap;
  }

  .stat-divider {
    display: none;
  }
}
</style>
