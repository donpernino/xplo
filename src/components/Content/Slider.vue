<template>
  <div>
    <VueSlickCarousel
        :arrows="true"
        :dots="false"
        :infinite="false"
        :slidesToShow="3"
        :slidesToScroll="1"
        class="slider-wrapper"
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
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'Slider',
    data: function() {
        return {
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1539584222411-a76a40e9e861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    src: 'https://images.unsplash.com/photo-1583044302608-c971c5aff184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'
                },
                {
                    src: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    src: 'https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    src: 'https://images.unsplash.com/photo-1489421471208-251cc68284b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
                }
            ]
        }
    },
    components: { VueSlickCarousel },
  }
</script> 