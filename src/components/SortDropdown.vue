<template>
  <div class="products">
    <div class="products__controls">
      <select v-model="selectedSortOption" class="products__select" @change="emitSelectedOption">
        <option
          v-for="option in options"
          :value="option.value"
          class="products__option"
          :key="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductList',
  methods: {
    emitSelectedOption(): void {
      this.$emit('sort', this.selectedSortOption)
    },
  },
  data() {
    return {
      selectedSortOption: '',
      options: [
        { value: '', label: 'Default' },
        { value: 'rating', label: 'Highest Rating' },
        { value: 'price-asc', label: 'Price: Low to High' },
        { value: 'price-desc', label: 'Price: High to Low' },
        { value: 'category', label: 'Category' },
      ],
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
