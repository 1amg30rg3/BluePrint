<script setup>
import { inject } from 'vue'
const t = inject('t')

const FB_URL = 'https://www.facebook.com/profile.php?id=61590561637800'
const WA_URL = 'https://wa.me/995510004474'
</script>

<template>
  <section id="contact" class="contact section">
    <div class="container">
      <div class="contact-left">
        <p class="section-label">{{ t.contact.label }}</p>
        <div class="divider"></div>
        <h2 class="section-title">{{ t.contact.title }}</h2>
        <p class="contact-sub">{{ t.contact.subtitle }}</p>

        <div class="cta-group">
          <a :href="FB_URL" target="_blank" rel="noopener noreferrer" class="cta-btn facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            {{ t.contact.facebook }}
          </a>
          <a :href="WA_URL" target="_blank" rel="noopener noreferrer" class="cta-btn whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.097.543 4.068 1.494 5.787L0 24l6.355-1.467A11.932 11.932 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.932 9.932 0 0 1-5.062-1.381l-.363-.215-3.773.871.9-3.682-.237-.379A9.94 9.94 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            {{ t.contact.whatsapp }}
          </a>
        </div>
      </div>

      <div class="contact-right">
        <div class="info-card">
          <div class="info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.47 2 2 0 0 1 3.64 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div class="info-body">
            <span class="info-label">{{ t.contact.phone }}</span>
            <a :href="'tel:' + t.contact.phoneValue.replace(/\s/g, '')" class="info-value link">
              {{ t.contact.phoneValue }}
            </a>
          </div>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div class="info-body">
            <span class="info-label">{{ t.contact.email }}</span>
            <a :href="'mailto:' + t.contact.emailValue" class="info-value link">
              {{ t.contact.emailValue }}
            </a>
          </div>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="info-body">
            <span class="info-label">{{ t.contact.address }}</span>
            <span class="info-value">{{ t.contact.addressValue }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: #FFFFFF;
  position: relative;
}

.section {
  padding: 100px 0;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
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
  margin-bottom: 16px;
}

.contact-sub {
  font-size: 1rem;
  color: #6B7785;
  line-height: 1.75;
  margin-bottom: 40px;
  max-width: 380px;
}

.cta-group {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 15px 28px;
  border-radius: 2px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
  width: fit-content;
}

.cta-btn:hover {
  transform: translateY(-2px);
}

.facebook {
  background: #1877F2;
  color: #fff;
}

.facebook:hover {
  background: #1565D8;
  box-shadow: 0 8px 24px rgba(24, 119, 242, 0.35);
}

.whatsapp {
  background: #25D366;
  color: #fff;
}

.whatsapp:hover {
  background: #1CB955;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
}

.contact-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #FAFBFD;
  border: 1px solid #E3E8EF;
  padding: 22px 24px;
  border-radius: 4px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.info-card:hover {
  border-color: #C0492B;
  box-shadow: 0 4px 20px rgba(192, 73, 43, 0.08);
}

.info-icon {
  width: 44px;
  height: 44px;
  background: #EEF2F7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3D6CA8;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}

.info-card:hover .info-icon {
  background: #C0492B;
  color: #fff;
}

.info-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #6B7785;
}

.info-value {
  font-size: 1rem;
  font-weight: 600;
  color: #0D2541;
  line-height: 1.3;
}

.info-value.link {
  text-decoration: none;
  transition: color 0.2s;
}

.info-value.link:hover {
  color: #C0492B;
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .contact-sub {
    max-width: 100%;
  }

  .cta-group {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .cta-group {
    flex-direction: column;
  }

  .cta-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
