<script lang="ts">
import FooterCopyright from './FooterCopyright.vue'
import FooterNavigation from './FooterNavigation.vue'
import FooterSocials from './FooterSocials.vue'
import FooterNewsletter from './FooterNewsletter.vue'

export interface FooterLink {
  text: string
  url: string
}
interface LinkGroup {
  header: string
  links: FooterLink[]
}
export default {
  name: 'FooterElement',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  components: {
    FooterNewsletter,
    FooterNavigation,
    FooterCopyright,
    FooterSocials,
  },
}
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <FooterNewsletter />
      <FooterNavigation />
      <FooterSocials />
      <FooterCopyright :year="currentYear" />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}
</style>
