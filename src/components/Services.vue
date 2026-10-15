<script setup>
import { inject } from 'vue'
const t = inject('t')

const icons = [
  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="22" height="16" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
    <rect x="4" y="6" width="22" height="4" fill="currentColor" opacity="0.15"/>
    <line x1="13" y1="22" x2="13" y2="32" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="10" y1="32" x2="16" y2="32" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="30" y1="8" x2="36" y2="14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="30" y1="14" x2="36" y2="8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,

  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L34 17H6L20 6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    <rect x="10" y="17" width="20" height="16" rx="1" stroke="currentColor" stroke-width="1.8"/>
    <rect x="16" y="24" width="8" height="9" rx="0.5" stroke="currentColor" stroke-width="1.6"/>
    <rect x="10" y="17" width="20" height="3" fill="currentColor" opacity="0.12"/>
  </svg>`,

  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="18" height="22" rx="1" stroke="currentColor" stroke-width="1.8"/>
    <rect x="4" y="12" width="18" height="5" fill="currentColor" opacity="0.15"/>
    <rect x="8" y="18" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/>
    <rect x="14" y="18" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/>
    <rect x="8" y="25" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/>
    <rect x="14" y="25" width="4" height="4" rx="0.5" stroke="currentColor" stroke-width="1.4"/>
    <line x1="26" y1="6" x2="26" y2="34" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="26" y1="6" x2="36" y2="6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="36" y1="6" x2="36" y2="14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="26" y1="6" x2="36" y2="14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="2 2"/>
  </svg>`,
]
</script>

<template>
  <section id="services" class="services section">
    <div class="container">
      <div class="services-head">
        <p class="section-label">{{ t.services.label }}</p>
        <div class="divider"></div>
        <h2 class="section-title">{{ t.services.title }}</h2>
      </div>

      <div class="cards">
        <article
          v-for="(item, i) in t.services.items"
          :key="i"
          class="card"
        >
          <div class="card-icon" v-html="icons[i]"></div>
          <div class="card-num">0{{ i + 1 }}</div>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.desc }}</p>
          <div class="card-bar"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: #EEF2F7;
  position: relative;
  overflow: hidden;
}

.services::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #C0492B, #3D6CA8, #C0492B);
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
}

.section {
  padding: 100px 0;
}

.services-head {
  margin-bottom: 56px;
}

.section-label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #C0492B;
}

.divider {
  width: 40px;
  height: 3px;
  background: #C0492B;
  margin: 16px 0 22px;
  border-radius: 2px;
}

.section-title {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  color: #0D2541;
  letter-spacing: -0.3px;
  line-height: 1.15;
  max-width: 480px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background: #FFFFFF;
  border: 1px solid #E3E8EF;
  padding: 40px 36px 36px;
  position: relative;
  overflow: hidden;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(13, 37, 65, 0.12);
}

.card:hover .card-icon {
  color: #C0492B;
}

.card:hover .card-bar {
  width: 100%;
}

.card-icon {
  color: #3D6CA8;
  margin-bottom: 20px;
  transition: color 0.25s ease;
  display: block;
  line-height: 1;
}

.card-num {
  position: absolute;
  top: 28px;
  right: 28px;
  font-size: 2.6rem;
  font-weight: 800;
  color: #EEF2F7;
  line-height: 1;
  letter-spacing: -2px;
  pointer-events: none;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0D2541;
  margin-bottom: 14px;
  line-height: 1.25;
}

.card-desc {
  font-size: 0.92rem;
  color: #6B7785;
  line-height: 1.75;
}

.card-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0;
  background: #C0492B;
  transition: width 0.4s ease;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 520px;
  }
}

@media (max-width: 640px) {
  .cards {
    max-width: 100%;
  }

  .card {
    padding: 32px 24px;
  }
}
</style>
