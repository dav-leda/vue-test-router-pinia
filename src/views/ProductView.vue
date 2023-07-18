
<script setup>

import { ref } from 'vue'

import ProductCard from '../components/ProductCard.vue';

import { products } from '../data'

const product = ref(products[2])

</script>

<template>

  <ProductCard :product="product"/>

</template>