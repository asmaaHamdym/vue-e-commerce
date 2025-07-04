<template>
  <NavbarLinks
    v-if="mobileNav"
    containerClass="mobile-nav-ul"
    @linkClicked="emit('closeMobileNav')"
  />
</template>

<script lang="ts" setup>
import NavbarLinks from './NavbarLinks.vue'

defineProps({
  mobileNav: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['closeMobileNav'])
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
