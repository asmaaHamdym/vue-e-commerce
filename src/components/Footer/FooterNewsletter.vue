<template>
  <div class="newsletter">
    <h3 class="newsletter__title">Join our Newsletter</h3>
    <p class="newsletter__description">
      Nulla ac convallis lorem, eget euismod nisl. bibendum nec.
    </p>
    <form class="newsletter__form">
      <input type="email" class="newsletter__input" placeholder="Your E-mail" />
      <button type="submit" class="newsletter__submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NewsletterForm',
  data() {
    return {
      email: '',
    }
  },
}
</script>

<style></style>
