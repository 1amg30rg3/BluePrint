<script setup>
const WA_URL = 'https://wa.me/995510004474'
</script>

<template>
  <a
    :href="WA_URL"
    target="_blank"
    rel="noopener noreferrer"
    class="wa-btn"
    aria-label="Chat on WhatsApp"
  >
    <span class="wa-pulse"></span>
    <svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.097.543 4.068 1.494 5.787L0 24l6.355-1.467A11.932 11.932 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.932 9.932 0 0 1-5.062-1.381l-.363-.215-3.773.871.9-3.682-.237-.379A9.94 9.94 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  </a>
</template>

<style scoped>
.wa-btn {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 500;
  width: 58px;
  height: 58px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
}

.wa-btn:hover {
  background: #1CB955;
  transform: scale(1.1) translateY(-3px);
  box-shadow: 0 12px 36px rgba(37, 211, 102, 0.5);
}

.wa-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.wa-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid #25D366;
  animation: wa-ring 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  pointer-events: none;
}

@keyframes wa-ring {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.6);
    opacity: 0;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@media (max-width: 480px) {
  .wa-btn {
    bottom: 20px;
    right: 20px;
    width: 52px;
    height: 52px;
  }

  .wa-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
