<script lang="ts">
export default {}
</script>
<template>
  <header :class="{ 'header header--scrolled-nav': scrollPosition }">
    <nav class="nav">
      <div class="nav__logo">
        <router-link :to="{ name: 'home' }" class="nav__logo-link"
          ><img src="../assets/logo.png" alt="brand logo " />
        </router-link>
      </div>
      <ul v-show="!mobile" class="nav__links">
        <li class="nav__link-item">
          <router-link :to="{ name: 'home' }" class="nav__link">Home</router-link>
        </li>
        <li class="nav__link-item">
          <router-link :to="{ name: 'products' }" class="nav__link">Products</router-link>
        </li>
        <li class="nav__link-item">
          <router-link :to="{ name: 'contact' }" class="nav__link">Contact us</router-link>
        </li>
      </ul>
      <div class="nav__actions">
        <router-link :to="{ name: '' }" class="nav__action-link">
          <img src="../assets/search.png" alt="search icon" />
        </router-link>
        <router-link :to="{ name: '' }" class="nav__action-link">Sign in</router-link>
        <router-link :to="{ name: '' }" class="nav__action-link">
          <img src="../assets/cart.png" alt="cart icon" />
        </router-link>
      </div>
    </nav>
  </header>
</template>
