<template>
  <transition name="mobile-nav">
    <ul v-show="mobileNav" class="mobile-nav-ul">
      <li class="mobile-nav-ul__link" v-for="link in links" :key="link.name">
        <router-link
          :to="{ name: link.name }"
          :class="['mobile-nav-ul__link-item', { 'active-link': $route.name === link.name }]"
          >{{ link.label }}</router-link
        >
      </li>
    </ul>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'HamburgerMenu',
  props: {
    mobileNav: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      links: [
        { name: 'home', label: 'Home' },
        { name: 'products', label: 'Products' },
        { name: 'contact', label: 'Contact us' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.mobile-nav-ul {
  list-style: none;
  width: 100%;
  height: auto;
  max-height: 80spx;
  background: var(--bg-color);
  text-align: center;
  transition: transform 0.5s all ease;
  &__link {
    font-weight: 600;
    padding: 0.4rem;
  }
  .active-link {
    color: var(--secondary-color);
    font-weight: bold;
    border-bottom: 1px solid var(--secondary-color);
  }
  &__link-item {
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
