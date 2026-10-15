<script setup>
import { inject } from 'vue'
const t = inject('t')
</script>

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="about-text">
        <p class="section-label">{{ t.about.label }}</p>
        <div class="divider"></div>
        <h2 class="section-title">{{ t.about.title }}</h2>
        <p class="about-p">{{ t.about.text1 }}</p>
        <p class="about-p mt">{{ t.about.text2 }}</p>

        <div class="accent-bar">
          <div class="accent-line"></div>
          <div class="accent-box"></div>
        </div>
      </div>

      <div class="about-stats">
        <div v-for="(stat, i) in [t.about.stat1, t.about.stat2, t.about.stat3]" :key="i" class="stat-card">
          <div class="stat-num">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-accent"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #FAFBFD;
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: #EEF2F7;
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
  pointer-events: none;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.section {
  padding: 100px 0;
}

.section-label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #C0492B;
  margin-bottom: 0;
}

.divider {
  width: 40px;
  height: 3px;
  background: #C0492B;
  margin: 16px 0 22px;
  border-radius: 2px;
}

.section-title {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #0D2541;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: -0.3px;
}

.about-p {
  font-size: 1rem;
  color: #6B7785;
  line-height: 1.8;
}

.about-p.mt {
  margin-top: 16px;
}

.accent-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 40px;
}

.accent-line {
  height: 2px;
  width: 80px;
  background: #E3E8EF;
}

.accent-box {
  width: 10px;
  height: 10px;
  background: #C0492B;
  transform: rotate(45deg);
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stat-card {
  background: #FFFFFF;
  border: 1px solid #E3E8EF;
  border-left: 4px solid #C0492B;
  padding: 28px 32px;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateX(6px);
  box-shadow: -6px 0 0 #C0492B, 0 8px 32px rgba(13, 37, 65, 0.08);
}

.stat-num {
  font-size: 2.8rem;
  font-weight: 800;
  color: #0D2541;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 6px;
}

.stat-label {
  font-size: 0.875rem;
  color: #6B7785;
  font-weight: 500;
  line-height: 1.4;
}

.stat-accent {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: #EEF2F7;
  clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .about::before {
    display: none;
  }

  .about-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .stat-card {
    border-left-width: 3px;
    padding: 20px 18px;
  }

  .stat-num {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
