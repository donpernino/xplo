<template>
  <div>
    <VueSlickCarousel
        :arrows="true"
        :dots="false"
        :infinite="false"
        :slidesToShow="3"
        :slidesToScroll="1"
        class="slider-wrapper"
        ref="contentSlider"
    >
        <div
            v-for="image in images"
            :key="image.src"
            class="slider-img-wrapper"
        >
            <img
              :src="image.src"
              alt=""
              class="slider-img"
            />
        </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'Slider',
    props: {
        images: Array
    },
    components: { VueSlickCarousel },
  }
</script> 