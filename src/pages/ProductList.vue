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
      />
    </ul>
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
          return products.sort((a, b) => b.rating - a.rating)
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
}
</style>
