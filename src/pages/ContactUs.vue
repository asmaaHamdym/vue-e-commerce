<template>
  <div class="contact">
    <h1 class="contact__header">Get in Touch!</h1>
    <p class="contact__description">
      We'd love to hear from you. Please fill out the form below to reach us.
    </p>
    <form class="contact__form">
      <div class="contact__form-group">
        <input type="text" id="name" class="contact__form-input" placeholder="Your Name" required />
      </div>
      <div class="contact__form-group">
        <input
          type="email"
          id="email"
          class="contact__form-input"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="contact__form-group">
        <textarea
          id="message"
          class="contact__form-textarea"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button type="submit" class="contact__form-button">Send Message</button>
    </form>
    <p class="contact__footer">Thank you for reaching out to us!</p>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.contact {
  margin: 4rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  &__header {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
  }
  &__description {
    margin-bottom: 2rem;
    color: #7f8c8d;
  }
  &__form {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;

    &-group {
      margin-bottom: 1rem;
      width: 100%;
    }
    &-input,
    &-textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
    &-input {
      height: 40px;
    }
    &-textarea {
      height: 200px;
    }
    &-button {
      margin: 1rem 0;
      padding: 10px 20px;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        background-color: var(--secondary-color);
      }
      &:active {
        transform: scale(98%);
      }
    }
  }
}
</style>
