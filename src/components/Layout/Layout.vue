<template>
  <div class="layout">
    <Navbar class="layout__header" />
    <main class="layout__content">
      <router-view />
    </main>
    <FooterElement />
  </div>
</template>

<script lang="ts">
import Navbar from '../Navbar/NavBar.vue'
import FooterElement from '../Footer/Footer.vue'
export default {
  name: 'AppLayout',
  components: {
    Navbar,
    FooterElement,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  &__header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    background-color: var(--bg-color);
    color: #901b90;
    transition: background-color 0.5s ease all;
  }
  &__content {
    flex: 1;
    padding: 20px;
    margin-top: 6rem;
    height: auto;
  }
  &__footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
}
</style>
