<script lang="ts">
import FooterLinkGroup from './FooterNavigation.vue'
import NewsletteForm from './FooterNewsletter.vue'
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
      linkGroups: [
        {
          header: 'Navigate',
          links: [
            { text: 'About Us', url: 'https://example.com/about' },
            { text: 'Blog', url: 'https://example.com/blog' },
            { text: 'Contact Us', url: 'https://example.com/contact' },
          ],
        },
        {
          header: 'Collection',
          links: [
            { text: 'Sitemap', url: 'https://example.com/sitemap' },
            { text: 'New Arrival', url: 'https://example.com/privacy' },
            { text: 'Terms of Service', url: 'https://example.com/terms' },
          ],
        },
        {
          header: 'Categories',
          links: [
            { text: 'Help Center', url: 'https://example.com/help' },
            { text: 'Careers', url: 'https://example.com/careers' },
            { text: 'FAQs', url: 'https://example.com/faqs' },
            { text: 'Feedback', url: 'https://example.com/feedback' },
          ],
        },
      ] as LinkGroup[],
    }
  },
  components: {
    FooterLinkGroup,
    NewsletteForm,
  },
}
</script>
<template>
  <footer class="footer">
    <NewsletteForm />
    <div class="footer-links">
      <FooterLinkGroup
        v-for="(group, index) in linkGroups"
        :key="index"
        :links="group.links"
        :header="group.header"
      />
    </div>

    <div class="footer-copyright">
      <p>&copy; {{ currentYear }} Company Name. All rights reserved.</p>
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
