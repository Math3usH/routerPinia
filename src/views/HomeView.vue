<script setup>
import {useRouter} from 'vue-router'
import {useProductStore} from '@/stores/useProductStore.js'
const ProductStore = useProductStore()
const router = useRouter()

function visializar(id) {
  alert('visializar' + id)
  router.push(`/product/${id}`)
}


</script>

<template>
<h1>listagem de produtos</h1>
<table>
  <thead>
    <th>#</th>
    <th>nome</th>
    <th>preço</th>
    <th>açoes</th>
  </thead>
  <tbody>
    <tr v-for="product in ProductStore.product" :key="product.id">
      <td>{{ product.id }}</td>
      <td>{{ product.nome }}</td>
      <td>{{ product.preço }}</td>
      <td>{{ product.price }}</td>
      <td><button @click="visializar(product.id)">ver</button></td>
    </tr>
  </tbody>
</table>
</template>
