<template>
  <div class="layout">
    <Navbar class="layout__header" />
    <main class="layout__content">
      <router-view />
    </main>
    <FooterElement class="layout__footer" />
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
  overflow: hidden;
  margin-top: 2rem;
  &__header {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.5s ease all;
  }
  &__content {
    flex: 1;
    padding-bottom: 2rem;
    margin: 2rem 0;
    height: auto;
  }

  &__footer {
    position: static;
    bottom: 0;
    width: 100%;
    margin-top: 1rem;
    padding-top: 5rem;
  }
}
</style>
