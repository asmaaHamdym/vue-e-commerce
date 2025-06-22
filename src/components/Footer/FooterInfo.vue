<template>
  <div class="footer-info">
    <p class="footer-info__address">
      399 Crowfield Road,<br />
      Phoenix, Arizona 85012
    </p>
    <p class="footer-info__website">asffefdsfsdc.com</p>
    <p class="footer-info__phone">+602-926-5809</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FooterInfo',
}
</script>

<style scoped lang="scss">
.footer-info {
  text-align: right;
  &__address,
  &__website,
  &__phone {
    font-size: 0.9rem;
    color: #666;
    margin: 0.5rem 0;
    line-height: 1.4;
    align-self: center;
  }
}
</style>
