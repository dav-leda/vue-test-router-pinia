
<script setup lang="ts">

import { ref } from 'vue'
import type { Ref } from 'vue'

import ProductCard from '../components/ProductCard.vue';

import { products } from '../data'

interface Product {
  id: string 
  name: string
  price: number
  image: string
}


const product: Ref<Product> = ref(products[2])

</script>

<template>

  <ProductCard :product="product"/>

</template>