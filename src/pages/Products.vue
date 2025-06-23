<template>
  <div class="products">
    <div v-if="isLoading" class="products__loading">Loading products...</div>

    <div v-if="error" class="products__error">Error: {{ error }}</div>

    <ul v-if="!isLoading && !error" class="products__list">
      <li v-for="product in products" :key="product.id" class="products__item">
        <h3 class="products__title">{{ product.title }}</h3>
        <img
          v-if="product.image"
          :src="product.image"
          :alt="product.title"
          class="products__image"
        />
        <p class="products__price">${{ product.price }}</p>
        <p class="products__description">{{ product.description }}</p>
        <button @click="addToCart(product)" class="products__add-to-cart">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Products',

  computed: {
    ...mapState('products', {
      products: (state) => state.items,
      isLoading: (state) => state.loading,
      error: (state) => state.error,
    }),
  },
  methods: {
    ...mapActions('products', { loadProducts: 'fetchProducts' }),
  },
  created() {
    this.loadProducts()
  },
}
</script>

<style lang="scss" scoped>
.products {
  margin: 2rem;
  &__loading,
  &__error {
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  &__error {
    color: #ff0000;
    background-color: #ffeeee;
    border: 1px solid #ffcccc;
  }

  &__list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  &__item {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 1rem;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  &__title {
    margin-top: 0;
    color: var(--primary-color);
  }

  &__image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  &__price {
    font-weight: bold;
    color: #2c3e50;
  }

  &__description {
    color: #666;
  }
}
</style>
