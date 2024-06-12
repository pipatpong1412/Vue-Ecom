<script setup>

import AdminLayout from '@/layouts/AdminLayout.vue';
import { useAdminOrderStore } from '@/stores/admin/order';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const adminOrderStore = useAdminOrderStore()
const orderId = ref(-1)
const route = useRoute()

const orderData = ref({
    products: []
})

onMounted(() => {
    if (route.params.id) {
        orderId.value = parseInt(route.params.id)
        const selectedOrder = adminOrderStore.getOrder(orderId.value)
        orderData.value = selectedOrder
    }
})

</script>


<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-xl font-bold">Order Detail</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div class="font-bold">Order Date</div>
                    <div>{{ orderData.updatedAt }}</div>
                </div>
                <div>
                    <div class="font-bold">Order Number</div>
                    <div>{{ orderData.no }}</div>
                </div>
                <div>
                    <div class="font-bold">Payment Method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="(product, index) in orderData.products" :key="index"
                class="grid grid-cols-4 gap-4 p-4 items-center">
                <div class="mx-auto"><img class="w-20 p-2" :src="product.imageUrl"></div>
                <div>
                    <div><b>{{ product.name }}</b></div>
                    <div>{{ product.description }}</div>
                </div>
                <div>จำนวน {{ product.quantity }} ชิ้น</div>
                <div>{{ product.price }} บาท</div>
            </div>
            <div class="divider"></div>
            <div class="justify-between flex">
                <div class="font-bold">ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-end">
                <RouterLink class="btn btn-ghost" :to="{ name: 'admin-orders-list' }">Back</RouterLink>
            </div>
        </div>
    </AdminLayout>
</template>