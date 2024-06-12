<script setup>

import AdminLayout from '@/layouts/AdminLayout.vue';
import { onMounted, ref } from 'vue';
import Trash from '@/components/icons/Trash.vue'
import Edit from '@/components/icons/Edit.vue'
import Table from '@/components/Table.vue'
import { useAdminProductStore } from '@/stores/admin/product';

// const products = ref([
//     {
//         name: 'Apple',
//         image: 'https://hips.hearstapps.com/hmg-prod/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg',
//         price: 100,
//         quantity: 20,
//         remailQuantity: 10,
//         status: 'open',
//         updatedAt: (new Date()).toISOString()
//     }
// ])

const adminProduct = useAdminProductStore()

onMounted(() => {
    adminProduct.loadProducts()
})

</script>


<template>
    <AdminLayout>
        <div class="m-8">
            <div class="flex items-center justify-between">
                <div class="text-3xl font-bold">Product</div>
                <RouterLink :to="{ name: 'admin-product-create' }" class="btn btn-neutral">Add New</RouterLink>
                </div>
            <div class="divider" />
            <Table :headers="['Name', 'Image', 'Price', 'Status', 'Quantity', 'UpdatedAt', '']">
                <tr v-for="(product, index) in adminProduct.list">
                    <th>{{ product.name }}</th>
                    <td><img :src="product.image" class="w-12"></td>
                    <td>{{ product.price }}</td>
                    <td>
                        <div class="badge" :class="product.status === 'open' ? ' badge-success' : ' badge-error'">
                            {{ product.status }}
                        </div>
                    </td>
                    <td>{{ product.quantity }}/{{ product.remailQuantity }}</td>
                    <td>{{ product.updatedAt }}</td>
                    <td>
                        <div class="flex items-center">
                            <RouterLink :to="{ name: 'admin-product-update', params: { id: index } }">
                                <Edit class="btn btn-ghost w-12" />
                            </RouterLink>
                            <Trash @click="adminProduct.removeProduct(index)" class="btn btn-ghost w-12" />
                        </div>
                    </td>
                </tr>
            </Table>
        </div>
    </AdminLayout>
</template>