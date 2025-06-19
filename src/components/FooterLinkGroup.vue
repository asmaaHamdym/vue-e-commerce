<script lang="ts">
export default {
  name: 'FooterLinkGroup',
  props: {
    links: {
      type: Array,
      required: true,
    },
    header: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>
<template>
  <div class="footer-link-group">
    <h4>{{ header }}</h4>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
