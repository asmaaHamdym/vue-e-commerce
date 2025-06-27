<template>
  <div class="products">
    <SortDropdown @sort="setSortOption" />
    <div v-if="isLoading" class="products__loading">Loading products...</div>
    <div v-if="error" class="products__error">Error: {{ error }}</div>

    <ul v-if="!isLoading && !error" class="products__list">
      <ProductCard
        v-for="product in sortedProducts"
        :key="product.id"
        class="products__item"
        :product="product"
        @product-added="showNotification"
      />
    </ul>
    <div v-if="notificationVisible" class="products__notification">Product added to cart!</div>
  </div>
</template>

<script lang="ts">
import { type Product } from '@/types/types'
import ProductCard from '@/components/ProductCard.vue'
import SortDropdown from '@/components/SortDropdown.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ProductList',
  components: {
    ProductCard,
    SortDropdown,
  },
  data() {
    return {
      filterBy: '' as string,
      notificationVisible: false,
    }
  },
  computed: {
    ...mapState('products', {
      products: (state) => state.items,
      isLoading: (state) => state.loading,
      error: (state) => state.error,
    }),
    sortedProducts(): Product[] {
      const products = this.products.slice()
      switch (this.filterBy) {
        case 'price-asc':
          return products.sort((a, b) => a.price - b.price)
        case 'price-desc':
          return products.sort((a, b) => b.price - a.price)
        case 'rating':
          return products.sort((a, b) => b.rating.rate - a.rating.rate)
        case 'category':
          return products.sort((a, b) => a.category.localeCompare(b.category))

        default:
          return products
      }
    },
  },
  methods: {
    ...mapActions('products', { loadProducts: 'fetchProducts' }),
    setSortOption(selectedSortOption: string) {
      this.filterBy = selectedSortOption
    },
    showNotification() {
      this.notificationVisible = true
      setTimeout(() => {
        this.notificationVisible = false
      }, 2000)
    },
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
  &__notification {
    position: fixed;
    top: 10%;
    right: 20%;
    width: 20rem;
    text-align: center;
    font-size: 1.5rem;
    background: #635f68;
    color: white;
    padding: 1rem 2rem;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 2000;
    transition: opacity 0.3s;
  }
}
</style>
