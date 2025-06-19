<script lang="ts">
export default {
  name: 'NavBar',
  data() {
    return {
      scrollPosition: 0,
      mobile: false,
      mobileNav: false,
      windowWidth: 0,
    }
  },
  mounted() {
    this.checkScreenWidth()
    window.addEventListener('resize', this.checkScreenWidth)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreenWidth() {
      this.windowWidth = window.innerWidth
      this.mobile = this.windowWidth < 750
      if (this.mobileNav && !this.mobile) {
        this.mobileNav = false
      }
    },
  },
}
</script>
<template>
  <header :class="{ 'header header--scrolled-nav': scrollPosition }">
    <nav class="nav">
      <div class="icon">
        <FontAwesomeIcon
          :icon="['fas', 'bars']"
          @click="toggleMobileNav"
          v-show="mobile"
          :class="{ 'icon--active': mobileNav }"
        />
      </div>
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
  background-color: #348585;
  color: #901b90;
  transition: background-color 0.5s ease all;
  nav {
    position: relative;
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
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav__actions {
      text-transform: uppercase;

      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px;
      gap: 16px;
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
.icon {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2rem;
  color: #901b90;
}
.icon--active {
  color: #00efea;
  transform: rotate(180deg);
}
.nav__links-mobile {
  top: 0;
  left: 0;
  background-color: #348585;
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 16px;
  width: 100%;
  max-width: 250px;
  height: 100%;
}
.nav__link-item-mobile {
  margin-left: 0;
}
.nav__link-mobile {
  text-decoration: none;
}
</style>
