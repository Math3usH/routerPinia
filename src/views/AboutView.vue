<script setup>
import { useCounterStore } from '@/stores/counter'

const CounterStore = useCounterStore()

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>meu contador: {{ CounterStore }}</h2>
    <button @click="CounterStoreIncrement"></button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
