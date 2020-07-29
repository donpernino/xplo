<template>
  <div>
    <VueSlickCarousel
      v-bind="sliderSettings"
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
    data: function() {
      return {
        sliderSettings: {
          "arrows": true,
          "dots": false,
          "infinite": false,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "responsive": [
            {
              "breakpoint": 640,
              "settings": {
                "slidesToShow": 3
              }
            },
            {
              "breakpoint": 420,
              "settings": {
                "slidesToShow": 2
              }
            }
          ]
        }
      }
    },
    props: {
      images: Array
    },
    components: { VueSlickCarousel },
  }
</script> 