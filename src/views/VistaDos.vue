<template>

  <h2 class="u bold">Vista 2</h2>

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
  
  <pre class="mt-1">Array en data: {{ array2 }}</pre>

  <pre class="mt-2">Array en Pinia: {{ store.getProductsInCart }}</pre>

</template>


<script setup>

import { ref } from 'vue'

import { cartStore } from '../stores/cartStore'

const store = cartStore()

const array2 = ref([])

const object2 = { name: 'Producto 2', price: 200 }

const pushObject = () => array2.value.push(object2)

const pushObjectPinia = () => store.pushItem(object2)

</script>../stores/cartStore