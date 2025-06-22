<template>
  <transition name="mobile-nav">
    <ul v-show="mobileNav" class="mobile-nav-ul">
      <li class="mobile-nav-ul__link">
        <router-link :to="{ name: 'home' }" class="mobile-nav-ul__link-item">Home</router-link>
      </li>
      <li class="mobile-nav-ul__link">
        <router-link :to="{ name: 'products' }" class="mobile-nav-ul__link-item"
          >Products</router-link
        >
      </li>
      <li class="mobile-nav-ul__link">
        <router-link :to="{ name: 'contact' }" class="mobile-nav-ul__link-item"
          >Contact us</router-link
        >
      </li>
    </ul>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'MobileNav',
  props: {
    mobileNav: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-nav-ul {
  list-style: none;
  width: 100%;
  max-width: 250px;
  height: 100vh;
  background: white;
  position: fixed;
  top: 100px;
  left: 0;
  transition: transform 0.5s all ease;
  &__link-item {
    text-decoration: none;
    text-transform: uppercase;
    padding: 16px;
    margin: 16px;
  }
}
</style>
