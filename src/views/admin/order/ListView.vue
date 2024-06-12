<script setup>

import AdminLayout from '@/layouts/AdminLayout.vue';
import Table from '@/components/Table.vue';
import { useAdminOrderStore } from '@/stores/admin/order';

const adminOrderStore = useAdminOrderStore()

</script>


<template>
    <AdminLayout>
        <div class="m-8">
            <div class="flex items-center justify-between my-4">
                <div class="text-3xl font-bold">Order</div>
            </div>
            <div class="divider"></div>
            <Table :headers="['Customer Name', 'Price', 'Status', 'Update At', '']">
                <tr v-for="(order, index) in adminOrderStore.list">
                    <td>{{ order.customerName }}</td>
                    <td>{{ order.totalPrice }}</td>
                    <td>{{ order.status }}</td>
                    <td>{{ order.updatedAt }}</td>
                    <td>
                        <RouterLink :to="{ name: 'admin-order-detail', params: { id: index } }" class="btn btn-ghost">
                            Detail</RouterLink>
                    </td>
                </tr>
            </Table>
        </div>
    </AdminLayout>
</template>