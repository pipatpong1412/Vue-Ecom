import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters: {
        summaryPrice(state) {
            return state.items.reduce((acc, item) => {
                return acc + (item.price * item.quantity)
            }, 0)
        },
        summaryQuantity(state) {
            return state.items.reduce((acc, item) => acc + (item.quantity), 0)
        }
    },
    actions: {
        loadCart() {
            const previousCart = localStorage.getItem('cart-data')
            if (previousCart) {
                this.items = JSON.parse(previousCart)
            }
        },
        addToCart(productData) {
            const findProduct = this.items.findIndex(item => item.name === productData.name)

            if (findProduct < 0) {
                productData.quantity = 1
                this.items.push(productData)
            } else {
                const currentItem = this.items[findProduct]
                this.updateQuantity(findProduct, currentItem.quantity + 1)
            }
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },

        updateQuantity(index, quantity) {
            this.items[index].quantity = quantity
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },

        removeItemInCart(index) {
            this.items.splice(index, 1)
            localStorage.setItem('cart-data', JSON.stringify(this.items))

        }
    }
})