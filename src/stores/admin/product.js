import { defineStore } from "pinia";

export const useAdminProductStore = defineStore('product', {
    state: () => ({
        list: [],
        loaded: false
    }),
    actions: {
        loadProducts() {
            const products = localStorage.getItem('admin-products')
            if (products) {
                this.list = JSON.parse(products)
                this.loaded = true
            }
        },
        getProduct(index) {
            if (!this.loaded) {
                this.loadProducts()
            }
            return this.list[index]
        },

        addProduct(productData) {
            productData.remailQuantity = productData.quantity
            productData.updatedAt = (new Date()).toISOString()
            this.list.push(productData)
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        },

        updateProduct(index, productData) {

            const fields = ['name', 'image', 'price',
                'quantity', 'remainQuantity', 'status']

            for (let field of fields) {
                this.list[index][field] = productData[field]
            }
            this.list[index].updatedAt = (new Date()).toISOString()
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        },

        removeProduct(index) {
            this.list.splice(index, 1)
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        }
    }
})