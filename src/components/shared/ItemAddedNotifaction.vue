<template>
  <div class="products__notification">Product added to cart!</div>
</template>

<script lang="ts">
export default {
  name: 'ItemAddedNotification',
}
</script>

<style>
.products__notification {
  position: fixed;
  top: 70px;
  right: 20px;
  width: 300px;
  max-width: calc(100vw - 40px);
  text-align: center;
  font-size: 0.9rem;
  background: #5e4e5c;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideInFromRight 0.3s ease-out;

  @media (max-width: 768px) {
    top: 80px;
    right: 10px;
    left: 10px;
    width: calc(100vw - 20px);
    max-width: none;
    margin: 0;
    transform: none;
    animation: slideInFromTop 0.3s ease-out;
  }
}
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
