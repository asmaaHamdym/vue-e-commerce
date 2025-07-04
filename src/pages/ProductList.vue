<template>
  <div class="products">
    <div class="products__header">
      <h1 class="products__title">Products</h1>
      <SortDropdown @sort="setSortOption" />
    </div>
    <div v-if="isLoading" class="products__loading">Loading products...</div>
    <div v-if="error" class="products__error">Error: {{ error }}</div>

    <ul v-if="!isLoading && !error" class="products__list">
      <ProductCard
        v-for="product in sortedProducts"
        :key="product.id"
        :product="product"
        @product-added="showNotification"
      />
    </ul>
    <ItemAddedNotifaction v-if="notificationVisible" />
  </div>
</template>

<script lang="ts">
import type { Product } from '../types/types'
import ProductCard from '../components/ProductCard.vue'
import SortDropdown from '../components/SortDropdown.vue'
import { mapState, mapActions } from 'vuex'
import ItemAddedNotifaction from '../components/shared/ItemAddedNotifaction.vue'
export default {
  name: 'ProductList',
  components: {
    ProductCard,
    SortDropdown,
    ItemAddedNotifaction,
  },
  data() {
    return {
      filterBy: '' as string,
      notificationVisible: false as boolean,
    }
  },
  computed: {
    ...mapState('products', {
      items: (state) => state.items,
      isLoading: (state) => state.loading,
      error: (state) => state.error,
    }),
    sortedProducts(): Product[] {
      const products = [...this.items]
      switch (this.filterBy) {
        case 'price-asc':
          return products.sort((a: { price: number }, b: { price: number }) => a.price - b.price)
        case 'price-desc':
          return products.sort((a: { price: number }, b: { price: number }) => b.price - a.price)
        case 'rating':
          return products.sort(
            (a: { rating: { rate: number } }, b: { rating: { rate: number } }) =>
              b.rating.rate - a.rating.rate,
          )
        case 'category':
          return products.sort((a: { category: string }, b: { category: string }) =>
            a.category.localeCompare(b.category),
          )

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
    showNotification(): void {
      this.notificationVisible = true
      setTimeout(() => {
        this.notificationVisible = false
      }, 1500)
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
  &__header {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    padding: 1rem;
  }
  &__title {
    text-align: center;
    font-size: 2rem;
    padding: 0 0.5rem;
    color: var(--primary-color);
  }
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
  // media query for smaller screens
  @media (max-width: 768px) {
    &__title {
      font-size: 1.5rem;
    }
  }
}
</style>
