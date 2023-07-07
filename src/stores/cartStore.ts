
import { defineStore } from 'pinia'

interface Product {
  name: string
  price: number
}

export const cartStore = defineStore('cart', {

  state: () => ({
    cart: [] as Product[]
  }),

  getters: {
    getProductsInCart() {
      return this.cart
    }
  },

  actions: {
    pushItem(product: Product) {
      this.cart.push(product)
    },

    $reset() {
      this.cart = []
    }
  }
})
