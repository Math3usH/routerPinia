import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const product = ref([
    {id: 1, nome: 'liquidificador', price: 79.90, qny: 100},
    {id: 2, nome: 'liquidificador', price: 89.90, qny: 100},
    {id: 3, nome: 'liquidificador', price: 99.90, qny: 100},
    {id: 4, nome: 'liquidificador', price: 109.90, qny: 100},
    {id: 5, nome: 'liquidificador', price: 119.90, qny: 100}
  ])

  return { product }
})
