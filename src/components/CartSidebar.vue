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
          <p>Your cart is empty</p>
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
              <p class="cart-item__price">${{ item.product.price }} x {{ item.quantity }}</p>
              <p class="cart-item__total">${{ (item.product.price * item.quantity).toFixed(2) }}</p>
            </div>
            <button @click="removeFromCart(item.product.id)" class="cart-item__remove">
              &times;
            </button>
          </div>

          <div class="cart-sidebar__summary">
            <p class="cart-sidebar__total">Total: ${{ totalPrice.toFixed(2) }}</p>
            <button @click="clearCart" class="cart-sidebar__clear">Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CartSidebar',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  emits: ['close'],
  methods: {
    closeCart(): void {
      this.$emit('close')
    },
    ...mapActions('cart', ['removeFromCart', 'clearCart']),
  },
  watch: {
    isOpen(newVal: boolean) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    },
  },
  computed: {
    ...mapState('cart', {
      cartItems: (state) => state.products,
      totalPrice: (state) => state.total,
    }),
  },
}
</script>

<style>
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  visibility: hidden;
  transition: visibility 0.3s ease;
}

.cart-sidebar--open {
  visibility: visible;
}

.cart-sidebar__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cart-sidebar--open .cart-sidebar__overlay {
  opacity: 1;
}

.cart-sidebar__content {
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

.cart-sidebar--open .cart-sidebar__content {
  transform: translateX(0);
}

.cart-sidebar__header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-sidebar__title {
  margin: 0;
  font-size: 1.5rem;
}

.cart-sidebar__close {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
}

.cart-sidebar__body {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .cart-sidebar__content {
    width: 100%;
    max-width: 100%;
  }
}
</style>
