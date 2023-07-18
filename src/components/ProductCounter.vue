<script setup lang="ts">

import { computed } from 'vue'

import { cartStore } from '../stores/cartStore'
const store = cartStore()

const props = defineProps({
  productId: {
    type: String,
    required: true
  }
})

const qty = computed<number>(() => store.getProductQty(props.productId))
const inCart = computed<boolean>(() => !!store.getProductById(props.productId))
const increment = (): void => store.incrementQty(props.productId)
const decrement = (): void => store.decrementQty(props.productId)

</script>


<template>
  
  <button
    class="btn-small" 
    @click="decrement"
    :disabled="!inCart"
  >➖️</button>
  
  <span>{{ qty }}</span>
  
  <button 
    class="btn-small"
    @click="increment"
    :disabled="!inCart"
  >➕️</button>
  
</template>
