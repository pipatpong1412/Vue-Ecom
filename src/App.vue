<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/user/carts';
import { onMounted } from 'vue';
const cartStore = useCartStore()

onMounted(() => {
  cartStore.loadCart()
})

</script>

<template>
  <RouterView />
</template>