<script lang="ts">
import FooterLinkGroup from './FooterLinkGroup.vue'

export default {
  name: 'FooterElement',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerLinks: [
        { text: 'Privacy Policy', url: 'https://example.com/privacy' },
        { text: 'Terms of Service', url: 'https://example.com/terms' },
        { text: 'Contact Us', url: 'https://example.com/contact' },
      ],
    }
  },
  components: {
    FooterLinkGroup,
  },
}
</script>
<template>
  <div class="footer-container">
    <div class="footer-links">
      <FooterLinkGroup :links="footerLinks" header="Navigate" />
      <FooterLinkGroup :links="footerLinks" header="Collection" />
      <FooterLinkGroup :links="footerLinks" header="Categories" />
    </div>
    <div class="footer-copyright">
      <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.footer-links {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}
</style>
