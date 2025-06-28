<template>
  <router-link :to="to" :class="className">
    <slot>
      <img src="../../assets/logo.png" alt="Colorful shopping bag logo" />
    </slot>
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
