<script lang="ts" setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>
<template>
  <div class="footer-navigation">
    <div class="footer-navigation__grid">
      <div class="footer-navigation__column">
        <h4 class="footer-navigation__title">Navigate</h4>
        <ul class="footer-navigation__list">
          <li class="footer-navigation__item">About Us</li>
          <li class="footer-navigation__item">Blog</li>
          <li class="footer-navigation__item">Contact Us</li>
          <li class="footer-navigation__item">Sitemap</li>
        </ul>
      </div>

      <div class="footer-navigation__column">
        <h4 class="footer-navigation__title">Collection</h4>
        <ul class="footer-navigation__list">
          <li class="footer-navigation__item">New arrivals</li>
          <li class="footer-navigation__item">Featured</li>
          <li class="footer-navigation__item">Catalog</li>
          <li class="footer-navigation__item">Brands</li>
        </ul>
      </div>

      <div class="footer-navigation__column">
        <h4 class="footer-navigation__title">Categories</h4>
        <ul class="footer-navigation__list">
          <li class="footer-navigation__item">Tables</li>
          <li class="footer-navigation__item">Lamps</li>
          <li class="footer-navigation__item">Chairs</li>
          <li class="footer-navigation__item">Sofas</li>
        </ul>
      </div>
    </div>
    <p class="footer-navigation__copyright">Copyright © All Rights Reserved {{ currentYear }}</p>
  </div>
</template>

<style scoped lang="scss">
.footer-navigation {
  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  &__title {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #666;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #333;
    }
  }
  &__copyright {
    font-size: 0.8rem;
    color: #999;
    margin-top: 1rem;
  }
}
</style>
