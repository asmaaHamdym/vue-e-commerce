<template>
  <div class="products">
    <div class="products__controls">
      <select v-model="selectedSortOption" class="products__sort-select" @change="sortProducts">
        <option value="">Default</option>
        <option value="rating">Highest Rating</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="category">Category</option>
      </select>
    </div>

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
export default {
  name: 'SortDropdown',

  data() {
    return {
      selectedSortOption: '',
    }
  },
}
</script>

<style></style>
