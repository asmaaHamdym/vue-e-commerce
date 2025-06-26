<script lang="ts">
import { mapState, mapActions } from 'vuex'
import { type Product } from '@/types/types'
export default {
  name: 'ProductPage',
  computed: {
    ...mapState('products', {
      product: (state: Product) => state.currentProduct,
      isLoading: (state) => state.loading,
      error: (state) => state.error,
    }),
  },
  methods: {
    ...mapActions('products', { loadProduct: 'fetchProductById' }),
  },
  created() {
    const productId = this.$route.params.id
    if (productId) {
      this.loadProduct(productId)
    }
  },
}
</script>

<template>
  <main class="product">
    <h1 v-if="!isLoading && !error" class="product__title">Product: {{ product.title }}</h1>
    <div v-if="isLoading" class="product--loading">Loading...</div>
    <div v-if="error" class="product--error">Error: {{ error }}</div>
    <div v-if="!isLoading && !error" class="product__container">
      <img :src="product.image" :alt="product.image" class="product__image" />
      <div class="product__details">
        <p class="product__description">{{ product.description }}</p>
        <p class="product__price">Price: ${{ product.price }}</p>
        <p class="product__category">Category: {{ product.category }}</p>
        <p class="product__rating">
          Rating:
          <span>
            <FontAwesomeIcon
              v-for="n in 5"
              :key="n"
              :icon="n <= Math.round(product.rating.rate || 0) ? 'fas fa-star' : 'far fa-star'"
              class="product__star"
            ></FontAwesomeIcon>
          </span>
        </p>
        <p class="product__rating">Reviews: {{ product.rating.count }}</p>
        <button class="product__add-to-cart" @click="$store.dispatch('cart/addToCart', product)">
          Add to Cart
        </button>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.product {
  margin: 3rem 1rem;
  &__title {
    text-align: center;
    margin-bottom: 20px;
    color: var(--primary-color);
  }
  &--loading,
  &--error {
    text-align: center;
    font-size: 1.2em;
    color: red;
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
  &__image {
    max-width: 400px;
    max-height: 400px;
    border-radius: 10px;
  }
  &__details {
    font-weight: 500;
    max-width: 400px;
    max-height: 400px;
    height: auto;
  }
  &__description {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.7;
    text-transform: lowercase;
  }
  &__price,
  &__category,
  &__rating {
    margin: 1rem;
    color: var(--secondary-color);
  }
  &__star {
    color: gold;
  }
  &__add-to-cart {
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--secondary-color);
    }
  }
  // for small screens
  @media (max-width: 600px) {
    &__title {
      font-size: 1.5rem;
    }
    &__image {
      max-width: 100%;
      max-height: 300px;
    }
    &__description {
      font-size: 1rem;
    }
  }
}
</style>
