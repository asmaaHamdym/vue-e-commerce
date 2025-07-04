<script lang="ts" setup>
import FooterInfo from './FooterInfo.vue'
import FooterNavigation from './FooterNavigation.vue'
import FooterNewsletter from './FooterNewsletter.vue'
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <FooterNewsletter />
      <div class="footer__navigation-info">
        <FooterNavigation />
        <FooterInfo />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  &__navigation-info {
    background: var(--bg-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2rem;
  }
}
</style>
