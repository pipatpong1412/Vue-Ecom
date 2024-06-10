<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
import { useCartStore } from '@/stores/user/carts';

const cartStore = useCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    cartStore.updateQuantity(index, newQuantity)
}

</script>

<template>
    <div>
        <UserLayout>
            <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
            <div class="flex">
                <div class="flex-1 w-64 bg-base-200 p-4">
                    <div v-if="cartStore.items.length === 0">
                        Cart is empty
                    </div>
                    <div v-else v-for="(item, index) in cartStore.items" class="flex">
                        <div class="flex-1">
                            <img class="w-full p-2"
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg">
                        </div>
                        <div class="flex-1">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <div class="grid grid-cols-2 relative">
                                        <div>
                                            <div><b>{{ item.name }}</b></div>
                                            <div>{{ item.about }}</div>
                                            <div>{{ item.price }}</div>
                                        </div>
                                        <div>
                                            <select v-model="item.quantity" class="w-1/2 p-2 "
                                                @change="changeQuantity($event, index)">
                                                <option v-for="quantity in [1, 2, 3, 4, 5]">
                                                    {{ quantity }}
                                                </option>
                                            </select>
                                        </div>
                                        <div @click="cartStore.removeItemInCart(index)" class="top-0 left-0">
                                            <Close />
                                        </div>
                                    </div>
                                    <div><b>In Stock</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 w-32 bg-slate-200 p-4">
                    <div class="text-2xl font-bold">Order Summary</div>
                    <div class="my-4 divide-y divide-black">
                        <div class="flex justify-between py-2">
                            <div>ราคาสินค้า</div>
                            <div>{{ cartStore.summaryPrice }}</div>
                        </div>
                        <div class="flex justify-between py-2">
                            <div>ค่าส่ง</div>
                            <div> 0</div>
                        </div>
                        <div class="flex justify-between py-2">
                            <div>ราคารวมทั้งหมด</div>
                            <div> 0</div>
                        </div>
                    </div>
                    <RouterLink :to="{ name: 'checkout' }" class="btn btn-neutral w-full mt-4">ชำระเงิน</RouterLink>
                </div>
            </div>
        </UserLayout>
    </div>
</template>