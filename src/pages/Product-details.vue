<script lang="ts">
import { mapState, mapActions } from 'vuex'
import { type Product } from '@/types/Product'
export default {
  name: 'ProductPage',
  computed: {
    ...mapState('products', {
      product: (state: Product) => state.currentProduct,
      isLoading: (state) => state.loading,
      error: (state) => state.error,
    }),
  },
  methods: {
    ...mapActions('products', { loadProduct: 'fetchProductById' }),
  },
  created() {
    const productId = this.$route.params.id
    if (productId) {
      this.loadProduct(productId)
    }
  },
}
</script>

<template>
  <main class="product">
    <h1 v-if="!isLoading && !error" class="product__title">Product: {{ product.title }}</h1>
    <div v-if="isLoading" class="product--loading">Loading...</div>
    <div v-if="error" class="product--error">Error: {{ error }}</div>
    <div v-if="!isLoading && !error" class="product__container">
      <img :src="product.image" :alt="product.image" class="product__image" />
      <div class="product__details">
        <p class="product__description">{{ product.description }}</p>
        <p class="product__price">Price: ${{ product.price }}</p>
        <p class="product__category">Category: {{ product.category }}</p>
        <p class="product__rating">
          Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)
        </p>
        <button class="product__add-to-cart" @click="$store.dispatch('cart/addToCart', product)">
          Add to Cart
        </button>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.product {
  margin: 3rem;
  &__title {
    text-align: center;
    margin-bottom: 20px;
  }
  &--loading,
  &--error {
    text-align: center;
    font-size: 1.2em;
    color: red;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  &__image {
    max-width: 400px;
    max-height: 400px;
    border-radius: 10px;
  }
  &__details {
    font-weight: 500;
    max-width: 400px;
    max-height: 400px;
  }
  &__description {
    font-weight: 600;
    font-size: 1.2rem;
  }
  &__price,
  &__category,
  &__rating {
    margin: 1rem 0;
  }
  &__add-to-cart {
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--secondary-color);
    }
  }
}
</style>
