<script lang="ts">
import NavbarLinks from './NavbarLinks.vue'
import HamburgerMenu from './HamburgerMenu.vue'
import CartDrawer from '../CartDrawer.vue'
import AppLink from '../shared/AppLink.vue'
import { type ToggleMobileMenu } from '@/types/ToggleMobileMenu'

export default {
  name: 'NavBar',
  components: {
    NavbarLinks,
    HamburgerMenu,
    CartDrawer,
    AppLink,
  },
  data(): ToggleMobileMenu {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: 0,
      isCartopen: false,
    }
  },
  mounted() {
    this.checkScreenWidth()
    window.addEventListener('resize', this.checkScreenWidth)
  },
  methods: {
    toggleMobileNav(): void {
      this.mobileNav = !this.mobileNav
    },
    checkScreenWidth() {
      this.windowWidth = window.innerWidth
      this.mobile = this.windowWidth < 750
      if (this.mobileNav && !this.mobile) {
        this.mobileNav = false
      }
    },
    openCart() {
      this.isCartopen = true
    },
    closeCart() {
      this.isCartopen = false
    },
  },
}
</script>
<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__icon">
        <FontAwesomeIcon
          :icon="['fas', 'bars']"
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'nav__icon--active': mobileNav }"
        />
      </div>
      <div class="nav__logo">
        <AppLink :to="{ name: 'home' }" class="nav__logo-link">
          <img src="../../assets/logo.png" alt="Colorful shopping bag logo" />
        </AppLink>
      </div>
      <NavbarLinks v-if="!mobile" />
      <div class="nav__actions">
        <AppLink :to="{ name: '' }" class="nav__action-link">Sign in</AppLink>
        <AppLink :to="{ name: '' }" class="nav__action-link">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            size="2xl"
            class="nav__cart--trigger"
            @click="openCart"
          />
        </AppLink>
      </div>
      <CartDrawer :is-open="isCartopen" @close="closeCart" />
    </nav>
    <HamburgerMenu v-if="mobile" :mobileNav="mobileNav" />
  </header>
</template>
<style lang="scss" scoped>
.header {
  .nav {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: all 0.5s ease;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
    &__actions {
      text-transform: uppercase;
      display: flex;
      align-items: center;
      margin: 16px;
      gap: 16px;
      text-wrap: nowrap;
    }
    &__icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 2rem;
      color: var(--primary-color);
      z-index: 1000;
      transition: all 0.3s ease;
      &:hover {
        opacity: 0.8;
      }

      &:active {
        transform: scale(0.95);
      }
    }
    &__icon--active {
      color: var(--secondary-color);
      transform: rotate(180deg);
    }
    &__cart--trigger {
      background: none;
      border: none;
      cursor: pointer;
    }

    .nav__action-link {
      text-decoration: none;
      font-size: 14px;
      transition: 0.5 ease all;

      &:hover {
        color: var(--secondary-color);
      }
    }
    .nav__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 70px;
        transition: 0.5s ease all;
      }
    }
  }
}
</style>
