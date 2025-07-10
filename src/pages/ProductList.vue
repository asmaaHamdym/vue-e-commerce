<template>
  <div class="products">
    <div class="products__header">
      <h1 class="products__title">Products</h1>
      <SortDropdown />
    </div>
    <div v-if="isLoading" class="products__loading">Loading products...</div>
    <div v-if="error" class="products__error">Error: {{ error }}</div>

    <ul v-if="!isLoading && !error" class="products__list">
      <ProductCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        @product-added="showNotification"
      />
    </ul>
    <ItemAddedNotifaction v-if="notificationVisible" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { productsStore as useProductStore } from '@/stores/productsStore'
import type { Product } from '../types/types'
import ProductCard from '../components/ProductCard.vue'
import SortDropdown from '../components/SortDropdown.vue'
import ItemAddedNotifaction from '../components/shared/ItemAddedNotifaction.vue'

const productStore = useProductStore()
const notificationVisible = ref(false)

const items = computed(() => (productStore.items as Product[]) || [])
const isLoading = computed(() => productStore.loading)
const error = computed(() => productStore.error)

const showNotification = () => {
  notificationVisible.value = true
  setTimeout(() => {
    notificationVisible.value = false
  }, 1500)
}
const loadProducts = () => {
  productStore
    .fetchProducts()
    .then(() => {
      if (productStore.error) {
        console.error('Failed to load products:', productStore.error)
      }
    })
    .catch((err) => {
      console.error('Error fetching products:', err)
      productStore.error = 'Failed to load products'
    })
}

onMounted(() => {
  loadProducts()
})
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
