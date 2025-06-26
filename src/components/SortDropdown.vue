<template>
  <div class="products">
    <div class="products__controls">
      <select v-model="selectedSortOption" class="products__select" @change="sortProducts">
        <option value="" class="products__option">Default</option>
        <option value="rating" class="products__option">Highest Rating</option>
        <option value="price-asc" class="products__option">Price: Low to High</option>
        <option value="price-desc" class="products__option">Price: High to Low</option>
        <option value="category" class="products__option">Category</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductList',
  methods: {
    sortProducts(): void {
      this.$emit('sort', this.selectedSortOption)
    },
  },
  data() {
    return {
      selectedSortOption: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.products {
  &__controls {
    display: flex;
    justify-content: flex-end;
  }
  &__select {
    padding: 0.5rem 1.2rem;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    background-color: white;
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>
