<script setup>
import { inject } from 'vue'
const t = inject('t')
const lang = inject('lang')

const FB_URL = 'https://www.facebook.com/profile.php?id=61590561637800'
const WA_URL = 'https://wa.me/995510004474'
const year = new Date().getFullYear()

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="brand-col">
          <a class="logo" href="#" @click.prevent="scrollTo('hero')">
            <img src="/favicon.svg" alt="" class="logo-icon" />
            <div class="logo-text">
              <span class="logo-en">BLUEPRINT</span>
              <span class="logo-geo">ბლუპრინტი</span>
            </div>
          </a>
          <p class="tagline">{{ t.footer.tagline }}</p>
          <div class="social-row">
            <a :href="FB_URL" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a :href="WA_URL" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.097.543 4.068 1.494 5.787L0 24l6.355-1.467A11.932 11.932 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.932 9.932 0 0 1-5.062-1.381l-.363-.215-3.773.871.9-3.682-.237-.379A9.94 9.94 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="links-col">
          <p class="col-title">{{ t.footer.links }}</p>
          <nav class="footer-nav">
            <a @click.prevent="scrollTo('about')">{{ t.nav.about }}</a>
            <a @click.prevent="scrollTo('services')">{{ t.nav.services }}</a>
            <a @click.prevent="scrollTo('contact')">{{ t.nav.contact }}</a>
          </nav>
        </div>

        <div class="info-col">
          <p class="col-title">{{ t.contact.label }}</p>
          <div class="footer-info">
            <a :href="'tel:' + t.contact.phoneValue.replace(/\s/g, '')" class="info-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.67 3.47 2 2 0 0 1 3.64 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {{ t.contact.phoneValue }}
            </a>
            <a :href="'mailto:' + t.contact.emailValue" class="info-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              {{ t.contact.emailValue }}
            </a>
            <span class="info-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {{ t.contact.addressValue }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-credit">
      <div class="container credit-inner">
        <websavvys-credit :lang="lang"><a href="https://websavvys.com/">WebSavvys</a></websavvys-credit>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container bottom-inner">
        <span>© {{ year }} Blueprint. {{ t.footer.rights }}.</span>
        <div class="accent-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0D2541;
  color: rgba(255, 255, 255, 0.75);
}

.footer-top {
  padding: 72px 0 56px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr;
  gap: 60px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  margin-bottom: 16px;
  width: fit-content;
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

.tagline {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.6;
  margin-bottom: 24px;
}

.social-row {
  display: flex;
  gap: 10px;
}

.social-btn {
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: #C0492B;
  border-color: #C0492B;
  color: #fff;
  transform: translateY(-2px);
}

.col-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 20px;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav a {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s, padding-left 0.2s;
  line-height: 1.5;
}

.footer-nav a:hover {
  color: #fff;
  padding-left: 6px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-line {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.88rem;
  text-decoration: none;
  transition: color 0.2s;
  line-height: 1.5;
}

a.info-line:hover {
  color: #fff;
}

.footer-credit {
  padding-top: 10px;
}

.credit-inner {
  display: flex;
  justify-content: center;
}

websavvys-credit {
  --wsc-gold: color-mix(in oklab, var(--c-primary) 82%, white);
  --wsc-ink: color-mix(in oklab, var(--c-navy) 70%, black);
  --wsc-focus: var(--wsc-gold);
}

websavvys-credit > a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.footer-bottom {
  padding: 20px 0;
}

.bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: unset;
  gap: 16px;
}

.footer-bottom span {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.35);
}

.accent-dots {
  display: flex;
  gap: 5px;
}

.accent-dots span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(192, 73, 43, 0.6);
}

.accent-dots span:nth-child(2) { background: rgba(61, 108, 168, 0.6); }
.accent-dots span:nth-child(3) { background: rgba(255, 255, 255, 0.2); }

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .brand-col {
    grid-column: 1 / -1;
  }
}

@media (max-width: 540px) {
  .container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
