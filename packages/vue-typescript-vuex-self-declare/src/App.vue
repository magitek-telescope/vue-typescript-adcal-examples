<template>
  <div id="app">
    <p>{{count}}</p>
    <button type="button" @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  methods: {
    increment() {
      this.$store.dispatch('increment')
    }
  },
  computed: {
    count(): number {
      return this.$state.count
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
