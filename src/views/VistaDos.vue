

<script setup lang="ts">

import { reactive } from 'vue'

import { cartStore } from '../stores/cartStore'
const store = cartStore()

import { products } from '../data'

interface Product {
  id: string 
  name: string
  price: number
  image: string
}

const state = reactive({
  cart: [] as Product[]
})

const addLocal = () => state.cart.push(products[1])
const addPinia = () => store.addToCart(products[1])

</script>


<template>

  <h2 class="u bold">Vista 2</h2>

  <div class="flex-center">

    <button 
      @click="addLocal"
      class="m-1 no-wrap"
      > push al state local </button>
    
    <button 
      class="btn-primary m-1 no-wrap"
      @click="addPinia"
    > push al store </button>

    <button 
      class="btn-danger m-1 no-wrap"
      @click="store.$reset()"
    > reset store </button>
    
  </div>
  
  <pre class="mt-1">Array local: {{ state.cart }}</pre>

  <pre class="mt-2">Array en Pinia: {{ store.getProductsInCart }}</pre>

</template>

