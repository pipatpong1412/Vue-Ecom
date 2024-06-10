<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import { useCartStore } from '@/stores/user/carts';
import { onMounted, ref } from 'vue';

const cartStore = useCartStore()
const orderData = ref({})

onMounted(() => {
    cartStore.loadCheckout()
    if (cartStore.checkout.orderNumber) {
        orderData.value = cartStore.checkout
    }
})

</script>

<template>
    <div>
        <UserLayout>
            <div class=" max-w-2xl mx-auto border border-base-200 shadow-xl px-4 pb-4">
                <div>
                    <div class="text-2xl font-bold">Your order is successfull</div>
                    <div>Hi {{ orderData.name }}</div>
                    <div>เตรียมรอรับสินค้าได้เลย</div>
                </div>
                <div class="divider"></div>
                <div class="grid grid-cols-4 gap-2">
                    <div>
                        <div><b>Order date</b></div>
                        <div>{{ orderData.createdDate }}</div>
                    </div>
                    <div>
                        <div><b>Order Number</b></div>
                        <div>{{ orderData.orderNumber }}</div>
                    </div>
                    <div>
                        <div><b>Payment Method</b></div>
                        <div>{{ orderData.paymentMethod }}</div>
                    </div>
                    <div>
                        <div><b>Address</b></div>
                        <div>{{ orderData.address }}</div>
                    </div>
                </div>
                <div class="divider"></div>
                <div v-for="product in orderData.products">
                    <div class="grid grid-cols-4 gap-2 items-center text-center">
                        <div>
                            <img class="w-full p-2" :src="product.imageUrl">
                        </div>
                        <div>
                            <div><b>{{ product.name }}</b></div>
                        </div>
                        <div>
                            <div>จำนวน</div>
                            <div>{{ product.quantity }}</div>
                        </div>
                        <div>
                            <div>ราคารวม</div>
                            <div>{{ product.price * product.quantity }}</div>
                        </div>
                    </div>
                </div>
                <div class="divider"></div>
                <div class="flex justify-between">
                    <div>ราคาสินค้าทั้งหมด</div>
                    <div>{{ orderData.totalPrice }}</div>
                </div>
                <div class="flex justify-between">
                    <div>ค่าส่ง</div>
                    <div>0</div>
                </div>
                <div class="flex justify-between">
                    <div>ราคาทั้งสิ้น</div>
                    <div>{{ orderData.totalPrice }}</div>
                </div>
                <div class="divider"></div>
                <div>ขอบคุณที่อุดหนุน</div>
            </div>
        </UserLayout>
    </div>
</template>