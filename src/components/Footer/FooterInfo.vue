<template>
  <div class="footer-info">
    <p class="footer-info__address">
      399 Crowfield Road,<br />
      Phoenix, Arizona 85012
    </p>
    <p class="footer-info__website">asffefdsfsdc.com</p>
    <p class="footer-info__phone">+602-926-5809</p>
    <div class="footer-info__socials">
      <h4 class="footer-info__title">Get social</h4>
      <div class="footer-info__icons">
        <a href="#" class="footer-social__link" aria-label="Facebook">
          <font-awesome-icon :icon="['fab', 'facebook']" class="footer-social__icon" />
        </a>

        <a href="#" class="footer-social__link" aria-label="Twitter">
          <font-awesome-icon :icon="['fab', 'twitter']" class="footer-social__icon" />
        </a>
        <a href="#" class="footer-social__link" aria-label="Instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" class="footer-social__icon" />
        </a>
        <a href="#" class="footer-social__link" aria-label="Pinterest">
          <font-awesome-icon :icon="['fab', 'pinterest']" class="footer-social__icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FooterInfo',
}
</script>

<style scoped lang="scss">
.footer-info {
  &__address,
  &__website,
  &__phone {
    font-size: 0.9rem;
    text-align: right;
    color: #666;
    margin: 0.5rem 0;
    line-height: 1.4;
    align-self: center;
  }
  &__socials {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  &__title {
    font-size: 1rem;
    font-weight: 600;
  }

  &__icons {
    display: flex;
    gap: 1rem;
  }

  &__icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ccc;
    }
  }
}
</style>
