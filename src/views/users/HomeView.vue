<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { useProductStore } from '@/stores/user/product';
import Product from '@/components/Product.vue'
import { useCartStore } from '@/stores/user/carts';
import { useRoute, useRouter } from 'vue-router';

const cartStore = useCartStore()
const productStore = useProductStore()

const router = useRouter()

const addToCart = (product) => {
    cartStore.addToCart(product)
    router.push({ name: 'cart' })
}

</script>

<template>
    <div>
        <UserLayout>
            <div class="hero h-96 bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Hello World</h1>
                        <p class="py-6">Trust Your Imagine!!.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Product :products="productStore.list" :addToCart="addToCart" />
        </UserLayout>
    </div>
</template>