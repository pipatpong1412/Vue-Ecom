<script setup>
import UserLayout from '@/layouts/UserLayout.vue'
import Close from '@/components/icons/Close.vue'
</script>

<template>
    <div>
        <UserLayout>
            <h1 class="text-3xl font-bold m-4">Shopping Cart</h1>
            <div class="flex">
                <div class="flex-1 w-64 bg-base-200 p-4">
                    <div v-for="item in [1,2,3,4]" class="flex">
                        <div class="flex-1">
                            <img class="w-full p-2"
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg">
                        </div>
                        <div class="flex-1">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <div class="grid grid-cols-2 relative">
                                        <div>
                                            <div><b>Flower</b></div>
                                            <div>Just a Flower</div>
                                            <div>100 B</div>
                                        </div>
                                        <div>
                                            <select class="w-1/2 p-2 ">
                                                <option v-for="quantity in [1, 2, 3, 4, 5]">
                                                    {{ quantity }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="top-0 left-0 absolute">
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
                            <div>100</div>
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
                </div>
            </div>
        </UserLayout>
    </div>
</template>