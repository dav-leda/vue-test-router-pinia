<template>
  
  <h2 class="u bold">Vista 1</h2>

  <div class="flex-center">
    <button 
      @click="pushObject"
      class="m-1 no-wrap"
      >push a data</button>
    <br>
    <button 
      class="btn-primary m-1 no-wrap"
      @click="pushObjectPinia"
    >push al store</button>

    <button 
      class="btn-danger m-1 no-wrap"
      @click="store.$reset()"
    > resetear pinia </button>
  </div>
  
  <pre class="mt-1">Array en data: {{ array1 }}</pre>

  <pre class="mt-2">Array en Pinia: {{ store.getProductsInCart }}</pre>

</template>

<script setup>

import { ref } from 'vue'

import { cartStore } from '../stores/cartStore'

const store = cartStore()

const array1 = ref([])

const object1 = { name: 'Producto 1', price: 100 }

const pushObject = () => array1.value.push(object1)

const pushObjectPinia = () => store.pushItem(object1)

</script>



../stores/cartStore