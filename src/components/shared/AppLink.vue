<template>
  <router-link :to="to" :class="className">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
export default {
  name: 'AppLink',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    className: {
      type: [String, Array, Object],
      default: '',
    },
  },
}
</script>

<style></style>
