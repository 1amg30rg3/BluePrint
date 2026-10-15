<script setup>
import { ref, computed, provide } from 'vue'
import { translations } from './translations.js'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'

const lang = ref('ka')
const t = computed(() => translations[lang.value])

provide('lang', lang)
provide('t', t)
</script>

<template>
  <Header />
  <main>
    <Hero />
    <About />
    <Services />
    <Contact />
  </main>
  <Footer />
  <WhatsAppButton />
</template>
