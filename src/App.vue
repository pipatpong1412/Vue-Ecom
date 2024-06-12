<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/user/carts';
import { onMounted } from 'vue';
import { useProductStore } from './stores/user/product';
import { useEventStore } from './stores/events';
const cartStore = useCartStore()
const productStore = useProductStore()
const eventStore = useEventStore()


onMounted(() => {
  cartStore.loadCart()
  productStore.loadProducts()
  eventStore.popUpmessage('info', 'Test Message')
})

</script>

<template>
  <RouterView />
  <div v-if="eventStore.alert" class="toast">
    <div class="alert" :class="`alert-${eventStore.data.status}`">
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>
</template>