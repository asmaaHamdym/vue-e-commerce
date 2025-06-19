<script lang="ts">
export default {
  name: 'NavBar',
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },

  methods: {},
}
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
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon--active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="nav__links-mobile">
          <li class="nav__link-item-mobile">
            <router-link :to="{ name: 'home' }" class="nav__link-mobile">Home</router-link>
          </li>
          <li class="nav__link-item-mobile">
            <router-link :to="{ name: 'products' }" class="nav__link-mobile">Products</router-link>
          </li>
          <li class="nav__link-item-mobile">
            <router-link :to="{ name: 'contact' }" class="nav__link-mobile">Contact us</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<style>
header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: #f2fefe;
  color: #901b90;
  transition: background-color 0.5s ease all;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    transition: all 0.5s ease;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    .nav__links,
    .nav__links-mobile {
      list-style: none;
      font-weight: 500;
    }

    .nav__link-item {
      text-transform: uppercase;
      padding: 16px;
      margin: 16px;
    }
    .nav__link,
    .nav__action-link {
      text-decoration: none;
      font-size: 14px;
      transition: 0.5 ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00efea;
        border-color: #00efea;
      }
    }
    .nav__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 70px;
        transition: 0.5 ease all;
      }
    }
  }
}
</style>
