<script setup>

import AdminLayout from '@/layouts/AdminLayout.vue';
import { useAdminProductStore } from '@/stores/admin/product';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const adminProductStore = useAdminProductStore()
const router = useRouter()

const formData = [
    {
        name: 'Name',
        field: 'name'
    },
    {
        name: 'Image',
        field: 'image'
    },
    {
        name: 'Price',
        field: 'price'
    },
    {
        name: 'Quantity',
        field: 'quantity'
    },
    {
        name: 'About',
        field: 'about'
    },
]

const productData = reactive({
    name: '',
    image: '',
    price: 0,
    quantity: 0,
    about: '',
    status: ''
})

const addProduct = () => {
    adminProductStore.addProduct(productData)
    alert('New Product Created')
    router.push({name: 'admin-products-list'})
}

</script>


<template>
    <AdminLayout>
        <div class="shadow-xl p-8">
            <div class="font-bold text-3xl">Add Product</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-x-4">
                <label v-for="(form, index) in formData" :key="index" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-model="productData[form.field]" type="text" class="input input-bordered w-full" />
                </label>
            </div>
            <div class="divider"></div>
            <select v-model="productData.status" class="select select-bordered w-full max-w-xs">
                <option disabled selected>Status</option>
                <option value="open">Open</option>
                <option value="close ">Close</option>
            </select>
            <div class="mt-4 flex justify-end">
                <button class="btn btn-ghost">Back</button>
                <button @click="addProduct()" class="btn btn-neutral">Add</button>
            </div>
        </div>
    </AdminLayout>
</template>