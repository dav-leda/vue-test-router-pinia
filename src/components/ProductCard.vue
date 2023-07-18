
<script setup lang="ts">

import type { PropType } from 'vue'


import ProductCounter from './ProductCounter.vue'
import AddToCart from './AddToCart.vue'

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
</script>


<template>
  <div class="card">
    
    <h2>ProductCard</h2>

    <h4>{{ product.name }}</h4>
    <p>$ {{ product.price }}</p>
    
    <footer class="center mt-2">
      
      <ProductCounter :product-id="product.id"/>
  
      <AddToCart :product="product"/>
    
    </footer>
    
  </div>
</template>

