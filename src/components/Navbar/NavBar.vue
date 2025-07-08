<script lang="ts" setup>
import NavbarLinks from './NavbarLinks.vue'
import HamburgerMenu from './HamburgerMenu.vue'
import SideCart from '../SideCart.vue'
import AppLink from '../shared/AppLink.vue'
import type { MobileMenu } from '../../types/types'
import { computed, onMounted, reactive } from 'vue'
import { cartStore as useCartStore } from '../../stores/cartStore'

//useing to refs to destructure reactive state for better readability

const state = reactive<MobileMenu>({
  mobile: false,
  mobileNav: false,
  windowWidth: 0,
  isCartOpen: false,
})

const checkScreenWidth = () => {
  state.windowWidth = window.innerWidth
  state.mobile = state.windowWidth < 750
  if (state.mobileNav && !state.mobile) {
    state.mobileNav = false
  }
}
const toggleMobileNav = () => {
  state.mobileNav = !state.mobileNav
}
const openCart = () => {
  state.isCartOpen = true
}
const closeCart = () => {
  state.isCartOpen = false
}

const cartStore = useCartStore()
// acces cart item count from the cart store getters
const cartItemCount = computed(() => cartStore.cartItemCount)

onMounted(() => {
  console.log(cartItemCount)
  checkScreenWidth()
  window.addEventListener('resize', checkScreenWidth)
})
</script>
<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__icon">
        <FontAwesomeIcon
          :icon="['fas', 'bars']"
          @click="toggleMobileNav"
          v-if="state.mobile"
          :class="{ 'nav__icon--active': state.mobileNav }"
        />
      </div>
      <div class="nav__logo">
        <AppLink :to="{ name: 'home' }" class="nav__logo-link">
          <img
            class="nav__logo-img"
            src="../../assets/online-shopping.png"
            alt="Colorful shopping bag logo"
          />
        </AppLink>
      </div>
      <NavbarLinks v-if="!state.mobile" />
      <div class="nav__actions">
        <AppLink :to="{ name: '' }" class="nav__action-link">Sign in</AppLink>
        <AppLink :to="{ name: '' }" class="nav__action-link nav__cart-container">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            size="2xl"
            class="nav__cart--trigger"
            @click="openCart"
          />
          <span v-if="cartItemCount > 0" class="nav__cart-badge">
            {{ cartItemCount }}
          </span>
        </AppLink>
      </div>
      <SideCart :is-open="state.isCartOpen" @close="closeCart" />
    </nav>
    <HamburgerMenu
      v-if="state.mobile"
      :mobileNav="state.mobileNav"
      @close-mobile-nav="toggleMobileNav"
    />
  </header>
</template>
<style lang="scss" scoped>
.header {
  .nav {
    position: relative;
    display: flex;
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
      white-space: nowrap;
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

    &__cart-container {
      position: relative;
      display: inline-block;
    }

    &__cart-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: var(--secondary-color);
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: bold;
      min-width: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }

    .nav__action-link {
      text-decoration: none;
      font-size: 14px;
      transition: 0.5s ease all;

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
