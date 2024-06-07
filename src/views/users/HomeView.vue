<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { useProductStore } from '@/stores/product';
import Product from '@/components/Product.vue'

const productStore = useProductStore()
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
            <Product :products="productStore.list" />
        </UserLayout>
    </div>
</template>