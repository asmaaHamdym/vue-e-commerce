<template>
  <li class="product__item" :key="product.id" @click="goToProductDetail(product.id)">
    <h3 class="product__title">{{ product.title }}</h3>
    <img v-if="product.image" :src="product.image" :alt="product.title" class="product__image" />
    <div class="product__price-rating">
      <p class="product__price">${{ product.price }}</p>
      <div class="product__rating">
        <FontAwesomeIcon
          v-for="n in 5"
          :key="n"
          :icon="n <= Math.round(product.rating.rate || 0) ? 'fas fa-star' : 'far fa-star'"
          class="product__star"
        ></FontAwesomeIcon>
      </div>
    </div>

    <p class="product__description">{{ product.description }}</p>
    <button @click.stop="addToCart(product)" class="product__add-to-cart">Add to Cart</button>
  </li>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { Product } from '../types/types'

const store = useStore()
defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
})
const emit = defineEmits(['product-added'])

const addToCart = (product: Product) => {
  emit('product-added', product)
  store.dispatch('cart/addToCart', product)
}
const router = useRouter()

const goToProductDetail = (productId: number) => {
  router.push({ name: 'product', params: { id: productId } })
}
</script>

<style lang="scss" scoped>
.product {
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
    margin: 0.6rem 0;
  }

  &__price-rating {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  &__price {
    font-size: 1.3rem;
    font-weight: 900;
    margin: 0.7rem 0;
    color: var(--text-color);
  }
  &__star {
    color: gold;
  }

  &__description {
    color: #666;
    // Limit to 2 lines
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
    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
