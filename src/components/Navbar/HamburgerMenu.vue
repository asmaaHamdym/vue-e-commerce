<template>
  <div name="mobile-nav">
    <ul v-show="mobileNav" class="mobile-nav-ul">
      <li class="mobile-nav-ul__link" v-for="link in links" :key="link.name">
        <AppLink
          :to="{ name: link.name }"
          :class-name="['mobile-nav-ul__link-item', { 'active-link': $route.name === link.name }]"
          >{{ link.label }}</AppLink
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import AppLink from '../shared/AppLink.vue'

export default {
  name: 'HamburgerMenu',
  components: {
    AppLink,
  },
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
  background: white;
  text-align: center;
  transition: transform 0.5s all ease;
  &__link {
    font-weight: 600;
    padding: 0.4rem;
  }
  .active-link {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
