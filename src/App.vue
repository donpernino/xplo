<template>
  <div id="app">
    <Header />
    <Maquettes />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Maquettes from './components/Maquettes.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Maquettes
    }
  }
</script>
