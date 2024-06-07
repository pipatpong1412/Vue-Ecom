import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [
      {
        name: 'test',
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
        about: 'testes',
        price: 999
      },
      {
        name: 'tsets123',
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
        about: 'testes',
        price: 998
      }
    ],
  }),
  actions: {
    finterProducts(searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})