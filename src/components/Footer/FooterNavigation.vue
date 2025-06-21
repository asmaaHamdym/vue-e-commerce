<script lang="ts">
export interface FooterLink {
  text: string
  url: string
}
export default {
  name: 'FooterLinkGroup',
  props: {
    links: [] as FooterLink[],
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
  <div class="footer-group">
    <h4 class="footer-group__header">{{ header }}</h4>
    <ul class="footer-group__links">
      <li v-for="(link, index) in links" :key="index" class="footer-group__link">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer-group__links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-group__link {
  text-decoration: none;
}
</style>
