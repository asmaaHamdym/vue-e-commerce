<template>
  <ul class="nav">
    <li v-for="link in links" class="nav__link" :key="link.name">
      <router-link :to="{ name: link.name }" class="nav__link-item">{{ link.label }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'NavbarLinks',
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
.nav {
  &__link {
    list-style: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__link-item {
    text-decoration: none;
    text-transform: uppercase;
    padding: 16px;
    margin: 16px;
    &:hover {
      color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
  }
}
</style>
