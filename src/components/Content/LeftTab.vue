<template>
    <div>
      <Map />
      <Slider />
    </div>
</template>

<script>
  import Map from './Map.vue'
  import Slider from './Slider.vue'

  export default {
    name: 'LeftTab',
    components: {
      Map,
      Slider
    }
  }
</script>