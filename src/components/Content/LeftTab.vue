<template>
    <div>
      <Map
        v-bind:locationPos="locationPos"
        v-bind:userPos="userPos"
      />
      <Slider />
    </div>
</template>

<script>
  import Map from './Map.vue'
  import Slider from './Slider.vue'

  export default {
    name: 'LeftTab',
    props: {
      locationPos: Array,
      userPos: Array
    },
    components: {
      Map,
      Slider
    }
  }
</script>