<template>
    <div>
      <Map
        v-bind:locationPos="locationPos"
        v-bind:userPos="userPos"
      />
      <Slider
        v-bind:images="images"
      />
    </div>
</template>

<script>
  import Map from './Map.vue'
  import Slider from './Slider.vue'

  export default {
    name: 'LeftTab',
    props: {
      locationPos: Array,
      userPos: Array,
      images: Array,
    },
    components: {
      Map,
      Slider
    }
  }
</script>