<template>
  <router-link :to="to" :class="className">
    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  className: {
    type: [String, Array, Object],
    default: '',
  },
})
</script>

<style></style>
