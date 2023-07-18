<script setup lang="ts">

import { computed } from 'vue'
import type { PropType } from 'vue'

import { cartStore } from '../stores/cartStore'
const store = cartStore()

interface Product {
  id: string
  name: string
  price: number
  image: string
}

const { product } = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

const added = computed<boolean>(() => !!store.getProductById(product.id))
const btnColor = computed<string>(() => added.value ? 'btn-secondary' : 'btn-primary')
const addToCart = (): void => store.addToCart(product)

</script>



<template>

  <button 
    @click="addToCart" 
    :disabled="added"
    :class="btnColor"
  >
    {{ added ? 'Agregado' : 'Agregar al carrito' }}
  </button>

</template>



