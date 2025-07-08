<template>
  <div class="cart-sidebar" :class="{ 'cart-sidebar--open': isOpen }">
    <div class="cart-sidebar__overlay" @click="closeCart"></div>

    <div class="cart-sidebar__content">
      <div class="cart-sidebar__header">
        <h2 class="cart-sidebar__title">Your Cart</h2>
        <button class="cart-sidebar__close" @click="closeCart" aria-label="Close cart">
          &times;
        </button>
      </div>
      <div class="cart-sidebar__body">
        <div v-if="!cartItems.length" class="cart-sidebar__empty">
          <p class="cart-sidebar__empty-notice">Your cart is empty</p>
        </div>

        <div v-else>
          <div v-for="item in cartItems" :key="item.product.id" class="cart-item">
            <img
              v-if="item.product.image"
              :src="item.product.image"
              :alt="item.product.title"
              class="cart-item__image"
            />
            <div class="cart-item__details">
              <h3 class="cart-item__title">{{ item.product.title }}</h3>
              <span class="cart-item__price">${{ item.product.price }} x {{ item.quantity }}</span>
            </div>
            <button @click="removeFromCart(item.product.id)" class="cart-item__remove">
              &times;
            </button>
          </div>

          <div class="cart-sidebar__summary">
            <p class="cart-sidebar__total">Total: ${{ totalPrice.toFixed(2) }}</p>
            <div class="cart-sidebar__buttons">
              <button class="cart-sidebar__checkout">Checkout</button>
              <button @click="clearCart" class="cart-sidebar__clear">Clear Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['close'])
const closeCart = () => {
  emit('close')
}

const removeFromCart = (productId: number) => {
  store.dispatch('cart/removeFromCart', productId)
}
const clearCart = () => {
  store.dispatch('cart/clearCart')
}

const cartItems = computed(() => store.state.cart.products || [])
const totalPrice = computed(() => store.state.cart.total)

onMounted(() => {
  if (props.isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style lang="scss" scoped>
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  visibility: hidden;
  transition: visibility 0.3s ease;
  &--open {
    visibility: visible;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &--open &__overlay {
    opacity: 1;
  }

  &__content {
    position: absolute;
    top: 0;
    right: 0;
    width: 90%;
    max-width: 400px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  &--open &__content {
    transform: translateX(0);
  }

  &__header {
    padding: 1.5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    margin: 0;
    font-size: 1.5rem;
  }

  &__close {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem;
  }

  &__body {
    flex: 1;
    padding: 1.5rem;
    overflow-y: auto;
  }
  &__empty-notice {
    text-align: center;
    font-size: 1.2rem;
  }
  &__summary {
    margin-top: 1rem;
    padding: 1rem;
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
  &__total {
    font-size: 1.2rem;
    font-weight: bold;
  }
  &__buttons {
    display: flex;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }
  &__clear,
  &__checkout {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
    &:hover {
      background-color: var(--secondary-color);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  &__clear {
    background-color: var(--bg-color-secondary);
  }
}

.cart-item {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  &__remove {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
  }
  &__details {
    display: flex;
    flex-direction: column;
  }
  &__price {
    margin: 0.7rem 0;
    font-weight: bold;
    color: #2c3e50;
  }
  &__total {
    font-weight: bold;
    color: #e74c3c;
  }

  &__image {
    // Ensure the image fits well in the sidebar
    width: 90px;
    max-width: 80px;
    max-height: 100px;
    object-fit: contain;
    margin-right: 1rem;
  }
  &__title {
    max-width: 200px;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .cart-sidebar__content {
    width: 100%;
    max-width: 100%;
  }
}
</style>
