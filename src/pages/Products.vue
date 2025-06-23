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

<style></style>
