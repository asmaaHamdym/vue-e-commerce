<template>
  <div class="not-found">
    <h1 class="not-found__header">404 - Not Found</h1>
    <p class="not-found__text">The page you are looking for does not exist.</p>
    <AppLink class-name="not-found__link" to="/">Go back to Home</AppLink>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import AppLink from '../components/shared/AppLink.vue'
onMounted(() => {
  document.title = '404 - Not Found'
})
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  text-align: center;
  color: #333;

  &__header {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  &__text {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #7f8c8d;
  }

  &__link {
    font-size: 1.2rem;
    color: var(--secondary-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
