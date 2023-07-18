

import { defineStore } from 'pinia'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface CartItem extends Product {
  qty: number
  subtotal: number
}

export const cartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[],
  }),

  getters: {
    getProductsInCart(): CartItem[] {
      return this.cart
    },
    getTotalPrice(): number {
      return this.cart.reduce((acc: number, curr: CartItem) => acc + curr.price, 0)
    },
    getCartTotal(): number {
      return this.cart.length
    },
    getProductById: (state) => (id: string): CartItem | undefined => {
      return state.cart.find((item) => item.id === id)
    }
  },

  actions: {
    addToCart(product: Product): void {

      const inCart = this.getProductById(product.id)

      if (inCart) {
        inCart.qty++
        inCart.subtotal = inCart.qty * inCart.price
      } else {
        this.cart.push({
          ...product,
          qty: 1,
          subtotal: product.price,
        })
      }
    },

    $reset(): void {
      this.cart = []
    }
  }
})


