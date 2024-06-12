<script setup>

import AdminLayout from '@/layouts/AdminLayout.vue';
import Trash from '@/components/icons/Trash.vue'
import Edit from '@/components/icons/Edit.vue'
import Table from '@/components/Table.vue'
import { useAdminUserStore } from '@/stores/admin/user';

const adminUserStore = useAdminUserStore()

const changeStatus = (index) => {
    let selectedUser = adminUserStore.list[index]
    selectedUser.status = selectedUser.status === 'active' ? 'inactive' : 'active'
    adminUserStore.updateUser(selectedUser)
}

</script>


<template>
    <AdminLayout>
        <div class="m-8">
            <div class="text-3xl font-bold mb-4">User</div>
            <Table :headers="['Name', 'Role', 'Status', 'Updated At', '']">
                <tr v-for="(user, index) in adminUserStore.list">
                    <td>{{ user.fullname }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <div class="badge badge-success">{{ user.status }}</div>
                    </td>
                    <td>{{ user.updatedAt }}</td>
                    <td>
                        <div class="flex gap-2">
                            <RouterLink :to="{ name: 'admin-user-update', params: { id: index } }" class="btn btn-neutral">
                                Edit</RouterLink>
                            <button @click="changeStatus(index)" class="btn btn-ghost">
                                {{ user.status === 'active' ? 'Disable' : 'Enable' }}
                            </button>
                        </div>
                    </td>
                </tr>
            </Table>
        </div>
    </AdminLayout>
</template>