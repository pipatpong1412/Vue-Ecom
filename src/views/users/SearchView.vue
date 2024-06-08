<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Product from '@/components/Product.vue'
import { useProductStore } from '@/stores/product';
import { useCartStore } from '@/stores/carts';

const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()
const searchText = ref('')

const filterProducts = computed(() => {
    return productStore.finterProducts(searchText.value)
})

const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({ name: 'cart' })
}


watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true })
</script>

<template>
    <div>
        <UserLayout>
            <div class="text-3xl m-4">Search: <b>{{ searchText }}</b></div>
            <Product :products="filterProducts" :addToCart="addToCart" />
        </UserLayout>
    </div>
</template>