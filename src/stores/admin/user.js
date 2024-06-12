import { defineStore } from "pinia";

export const useAdminUserStore = defineStore('admin-user', {
    state: () => ({
        list: [
            {
                fullname: 'Pit',
                role: 'admin',
                status: 'active',
                updatedAt: (new Date).toISOString()
            }
        ],

    }),
    actions: {
        getUser (index) {
            return this.list[index]
        },

        updateUser (index, userData) {
            const fields = ['fullname', 'role', 'status']
            for (let field of fields) {
                this.list[index][field] = userData[field]
            }
        },

        removeUser (index) {
            this.list.splice(index, 1)
        }
    }
})