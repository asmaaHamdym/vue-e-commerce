<script lang="ts">
import FooterInfo from './FooterInfo.vue'
import FooterNavigation from './FooterNavigation.vue'
import FooterSocials from './FooterSocials.vue'
import FooterNewsletter from './FooterNewsletter.vue'

export default {
  name: 'FooterElement',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    FooterNewsletter,
    FooterNavigation,
    FooterInfo,
    FooterSocials,
  },
}
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <FooterNewsletter />
      <div class="footer__navigation-info">
        <FooterNavigation />
        <FooterInfo />
      </div>
      <FooterSocials />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  &__navigation-info {
    background: var(--bg-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2rem;
  }
}
</style>
