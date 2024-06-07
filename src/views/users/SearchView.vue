<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Product from '@/components/Product.vue'
import { useProductStore } from '@/stores/product';

const productStore = useProductStore()
const route = useRoute()
const searchText = ref('')

const filterProducts = computed(() => {
    return productStore.finterProducts(searchText.value)
})

watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, { immediate: true })
</script>

<template>
    <div>
        <UserLayout>
            <div class="text-3xl m-4">Search: <b>{{ searchText }}</b></div>
            <Product :products="filterProducts" />
        </UserLayout>
    </div>
</template>