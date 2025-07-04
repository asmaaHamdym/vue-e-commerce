<template>
  <ul :class="containerClass">
    <li v-for="link in links" class="nav__link" :key="link.name">
      <AppLink
        :to="{ name: link.name }"
        :class-name="['nav__link-item', { 'active-link': $route.name === link.name }]"
        @click="handleLinkClick"
        >{{ link.label }}</AppLink
      >
    </li>
  </ul>
</template>

<script lang="ts" setup>
import AppLink from '../shared/AppLink.vue'

const links = [
  { name: 'home', label: 'Home' },
  { name: 'products', label: 'Products' },
  { name: 'contactus', label: 'Contact us' },
]

defineProps({
  containerClass: {
    type: String,
    default: 'nav',
  },
})
const emit = defineEmits(['linkClicked'])
const handleLinkClick = () => {
  emit('linkClicked')
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
    transition: 0.5s ease-in all;

    .active-link {
      color: var(--secondary-color);
      font-weight: bold;
      border-bottom: 1px solid var(--secondary-color);
    }
  }
  &__link-item {
    text-decoration: none;
    text-transform: uppercase;
    margin: 16px;
    &:hover {
      color: var(--secondary-color);
      border-color: var(--secondary-color);
    }
  }
}
</style>
