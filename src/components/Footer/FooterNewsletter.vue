<template>
  <div class="newsletter">
    <div class="newsletter__header">
      <h3 class="newsletter__title">Join our Newsletter</h3>
      <p class="newsletter__description">
        Nulla ac convallis lorem, eget euismod nisl. bibendum nec.
      </p>
    </div>
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

<style scoped lang="scss">
.newsletter {
  width: 100%;
  background-color: var(--color-bg-secondary);
  display: flex;
  gap: 20%;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;

  &__title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  &__description {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__input {
    font-style: italic;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 0.9rem;
  }

  &__submit {
    width: 40%;
    padding: 0.5rem 1rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #555;
    }
  }
}
@media (max-width: 768px) {
  .newsletter {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 0 0.7rem;
  }

  .newsletter__form {
    width: 100%;
    max-width: 300px;
    margin-bottom: 0.5rem;
  }

  .newsletter__input {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .newsletter__submit {
    width: 100%;
  }
}
</style>
