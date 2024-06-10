import { defineStore } from "pinia";

export const useAdminProductStore = defineStore('product', {
    state: () => ({
        list: [
            {
                name: 'Apple',
                image: 'https://hips.hearstapps.com/hmg-prod/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg',
                price: 100,
                quantity: 20,
                remailQuantity: 10,
                status: 'open',
                updatedAt: (new Date()).toISOString()
            }
        ]
    }),
    actions: {
        getProduct(index) {
            return this.list[index]
        },

        addProduct(productData) {
            productData.remailQuantity = productData.quantity
            productData.updatedAt = (new Date()).toISOString()
            this.list.push(productData)
        },

        updateProduct(index, productData) {
            this.list[index].name = productData.name
            this.list[index].image = productData.image
            this.list[index].price = productData.price
            this.list[index].quantity = productData.quantity
            this.list[index].remailQuantity = productData.remailQuantity
            this.list[index].status = productData.status
            this.list[index].updatedAt = (new Date()).toISOString()
        },

        removeProduct(index) {
            this.list.splice(index, 1)
        }
    }
})