<template>
  <li class="products__item">
    <h3 class="products__title">{{ product.title }}</h3>
    <img v-if="product.image" :src="product.image" :alt="product.title" class="products__image" />
    <p class="products__price">${{ product.price }}</p>
    <p class="products__description">{{ product.description }}</p>
    <button @click="addToCart(product)" class="products__add-to-cart">Add to Cart</button>
  </li>
</template>

<script lang="ts">
import { type Product } from '../types/products'
export default {
  name: 'ProductCard',

  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },

  methods: {
    addToCart(product: Product) {
      this.$store.dispatch('cart/addToCart', product)
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.products {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin: 0.7rem 0;
    color: var(--primary-color);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }

  &__image {
    width: 100%;
    max-width: 300px;
    height: 300px;
    border-radius: 4px;
    object-fit: contain;
  }

  &__price {
    font-weight: bold;
    color: #2c3e50;
  }

  &__description {
    color: #666;
    // Limit to 3 lines
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &__add-to-cart {
    margin: 1rem auto;
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: (var(--secondary-color));
    }
  }
}
</style>
