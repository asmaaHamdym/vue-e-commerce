<template>
  <div class="dropdown">
    <div class="dropdown__controls">
      <select v-model="selectedSortOption" class="dropdown__select" @change="emitSelectedOption">
        <option
          v-for="option in options"
          :value="option.value"
          class="dropdown__option"
          :key="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const selectedSortOption = ref('')
const options = ref([
  { value: '', label: 'Default' },
  { value: 'rating', label: 'Highest Rating' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'category', label: 'Category' },
])
const emit = defineEmits(['sort'])
const emitSelectedOption = () => {
  emit('sort', selectedSortOption.value)
}
</script>

<style lang="scss" scoped>
.dropdown {
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
  // media query for smaller screens
  @media (max-width: 768px) {
    &__select {
      width: 80%;
      height: 2.5rem;
      font-size: 1rem;
    }
  }
}
</style>
