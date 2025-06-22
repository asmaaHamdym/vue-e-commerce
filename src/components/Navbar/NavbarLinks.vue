<template>
  <ul class="nav">
    <li class="nav__link">
      <router-link :to="{ name: 'home' }" class="nav__link-item">Home</router-link>
    </li>
    <li class="nav__link">
      <router-link :to="{ name: 'products' }" class="nav__link-item">Products</router-link>
    </li>
    <li class="nav__link">
      <router-link :to="{ name: 'contact' }" class="nav__link-item">Contact us</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'NavbarLinks',
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
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
  }
}
</style>
