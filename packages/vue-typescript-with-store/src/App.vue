<template>
  <div>
    <p>{{ count }}</p>
    <button type="button" @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { State, AppStore } from '@/store'

const store = new AppStore({
  count: 0
})

export default Vue.extend({
  methods: {
    increment() {
      this.$store.increment()
    }
  },
  computed: {
    count(): number {
      return this.$store.state.count
    }
  }
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
