<script lang="ts">
import { mapState, mapActions } from 'vuex'
import type { ProductsState, Product } from '../types/types'
import ItemAddedNotification from '../components/shared/ItemAddedNotifaction.vue'
export default {
  name: 'ProductDetails',
  components: {
    ItemAddedNotification,
  },
  data() {
    return {
      notificationVisible: false,
    }
  },
  computed: {
    ...mapState('selectedProduct', {
      product: (state: ProductsState) => state.selectedProduct,
      isLoading: (state: ProductsState) => state.loading,
      error: (state: ProductsState) => state.error,
    }),
  },
  methods: {
    ...mapActions('selectedProduct', { loadProduct: 'fetchProductById' }),
    additemToCart(product: Product) {
      this.$store.dispatch('cart/addToCart', product)
      this.notificationVisible = true
      setTimeout(() => {
        this.notificationVisible = false
      }, 1500)
    },
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
    <div v-if="isLoading" class="product--loading">Loading...</div>
    <div v-if="error" class="product--error">Error: {{ error }}</div>
    <h1 v-if="!isLoading && !error" class="product__title">{{ product.title }}</h1>
    <div v-if="!isLoading && !error" class="product__container">
      <img :src="product.image" :alt="product.image" class="product__image" />
      <div class="product__details">
        <p class="product__price">${{ product.price }}</p>
        <p class="product__description">{{ product.description }}</p>
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
        <button class="product__add-to-cart" @click="additemToCart(product)">Add to Cart</button>
      </div>
    </div>
    <ItemAddedNotification v-if="notificationVisible" />
  </main>
</template>
<style lang="scss" scoped>
.product {
  margin: 3rem 1rem 5rem;

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
    gap: 7rem;
  }
  &__image {
    max-width: 400px;
    max-height: 400px;
    border-radius: 10px;
    padding: 1rem 0;
  }
  &__details {
    font-weight: 500;
    max-width: 400px;
    max-height: 400px;
    height: auto;
  }
  &__description {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.7;
    text-transform: lowercase;
    // Limit to 10 lines
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
  }
  &__price {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5;
    color: var(--primary-color);
    margin: 1rem 0;
  }
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
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: var(--secondary-color);
    }
    &:active {
      transform: scale(98%);
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
