<script setup>

import AdminLayout from '@/layouts/AdminLayout.vue';
import { useAdminUserStore } from '@/stores/admin/user';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const adminUserStore = useAdminUserStore()
const route = useRoute()
const router = useRouter()
const userId = ref(-1)
const userData = reactive({
    fullname: '',
    role: '',
    status: ''
})

onMounted(() => {
    if (route.params.id) {
        userId.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userId.value)

        userData.fullname = selectedUser.fullname
        userData.role = selectedUser.role
        userData.status = selectedUser.status
    }
})

const updateUser = () => {
    adminUserStore.updateUser(userId.value, userData)
    router.push({ name: 'admin-users-list' })
}

const formData = [
    {
        name: 'Name',
        field: 'fullname',
        type: 'text'
    },
    {
        name: 'Role',
        field: 'role',
        type: 'select',
        dropdownList: ['admin', 'moderator', 'user']
    },
    {
        name: 'Status',
        field: 'status',
        type: 'select',
        dropdownList: ['active', 'inactive']
    },
]


</script>


<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-4">
            <div class="text-3xl font-bold">Update User ID: </div>
            <div class="divider"></div>
            <div class="grid grid-cols-1 gap-x-4">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input v-model="userData[form.field]" v-if="form.type === 'text'" type="text"
                        class="input input-bordered w-full" />
                    <select v-model="userData[form.field]" v-if="form.type === 'select'"
                        class="input input-bordered w-full">
                        <option v-for="item in form.dropdownList" :value="item">{{ item }}</option>
                    </select>

                </label>
            </div>
            <div class="mt-4 flex justify-end">
                <button class="btn btn-ghost">Back</button>
                <button @click="updateUser()" class="btn btn-neutral">Update</button>
            </div>
        </div>
    </AdminLayout>
</template>