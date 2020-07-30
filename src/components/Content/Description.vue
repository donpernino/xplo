<template>
    <section
      class="col-lg-6 content-section"
      v-bind:name="name"
    >
      <div class="content content-inner" ref="rightContentTop">

        <!-- Content header -->
        <div class="content-header-wrapper">
          <div class="content-header" ref="contentHeader">
            <!-- Content img -->
            <img :src="images[0].src" class="content-img">
            <!-- Content title -->
            <div class="content-header-inner">
              <div class="content-title">
                <!-- Content title -->
                <h1 class="content-name uppercase bold">{{ name }}</h1>
                <!-- Content stars & reviews -->
                <div class="content-subtitle medium">
                  <div class="content-stars">
                    <star-rating
                      :read-only="true"
                      :rating="4.5"
                      :increment="0.5"
                      :active-color="'#be7129'"
                      :inactive-color="'#ffffff'"
                      :border-color="'#be7129'"
                      :border-width="2"
                      :star-size="16"
                      :rounded-corners="true"
                    />
                  </div>
                  <div class="content-reviews uppercase">
                    {{ reviews }} avis
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content share btn -->
          <Button
            v-bind:id="'js-content-share-btn-btn'"
            v-bind:class="'btn rounded green content-share-btn'"
            v-slot:icon
          >
            <ShareIcon />
          </Button>
        </div>

        <!-- Content description -->
        <p class="content-description" v-html="description" ref="contentDescription"></p>

        <!-- Content facts -->
        <div
          class="content-facts"
        >

          <!-- Content facts header -->
          <div
            class="content-facts-header"
            v-bind:class="{ hidden: factsHidden }"
          >
            <!-- Content show facts (mobile) -->
            <h2 class="content-facts-header-title bold" v-on:click="factsHidden = !factsHidden">
              <ArrowIcon />
              <span>Le saviez-vous ?</span>
            </h2>
            <Button
              v-bind:id="'js-content-add-fact-btn'"
              v-bind:classes="'btn green outline bold uppercase content-add-fact-btn'"
              v-bind:text="'Ajouter une anecdote'"
              v-slot:icon
              v-bind:class="{ hidden: factsHidden }"
              ref="contentFacts"
            >
              <PlusIcon />
            </Button>
          </div>

          <!-- Content facts list -->
          <ul
            class="content-facts-list"
            v-bind:class="{ hidden: factsHidden }"
            ref="contentFacts"
          >
            <li
              v-for="fact in facts"
              :key="fact.id"
              class="content-facts-list-item"
            >
              <p class="content-facts-list-item-text">{{ fact.fact }}</p>
              <div class="content-facts-list-item-btns">
                <button class="content-facts-list-item-btn js-content-fact-upvote">
                  <LikeIcon />
                </button>
                <button class="content-facts-list-item-btn js-content-fact-downvote">
                  <DislikeIcon />
                </button>
              </div>
            </li>
          </ul>
        </div>

        <!-- Content actions buttons -->
        <div class="content-actions-btns">
          <!-- Content like button -->
          <button
            id="js-content-actions-btn-like"
            class="btn rounded shadow white content-actions-btn like"
            v-on:click="changeInfos()"
          >
            <div class="content-actions-btn-inner">
              <HeartIcon />
            </div>
          </button>
          <!-- Content already visited -->
          <div class="content-actions-already-visited">
            <input type="checkbox" id="content-actions-already-visited" name="content-actions-already-visited" value="already-visited">
            <label for="content-actions-already-visited">Déjà visité</label>
          </div>
          <!-- Content dislike button -->
          <button
            id="js-content-actions-btn-dislike"
            class="btn rounded shadow white content-actions-btn dislike"
            v-on:click="changeInfos()"
          >
            <div class="content-actions-btn-inner">
              <CrossIcon />
            </div>
          </button>
        </div>
      </div>
    </section>
</template>

<script>
  import StarRating from 'vue-star-rating'
  import Button from '../Button'
  import ShareIcon from '../../assets/icons/share-icon.svg'
  import PlusIcon from '../../assets/icons/plus-icon.svg'
  import LikeIcon from '../../assets/icons/like-icon.svg'
  import DislikeIcon from '../../assets/icons/dislike-icon.svg'
  import HeartIcon from '../../assets/icons/heart-icon.svg'
  import CrossIcon from '../../assets/icons/cross-icon.svg'
  import ArrowIcon from '../../assets/icons/arrow-icon.svg'

  export default {
    name: 'Description',
    components: {
      Button,
      ShareIcon,
      PlusIcon,
      LikeIcon,
      DislikeIcon,
      HeartIcon,
      CrossIcon,
      ArrowIcon,
      StarRating
    },
    props: {
      name: String,
      stars: String,
      reviews: Number,
      description: String,
      facts: Array,
      images: Array
    },
    data: function() {
      return {
        factsHidden: true,
      }
    },
    methods: {
      changeInfos: function() {
        window.scrollTo(0,0)
        this.$refs.rightContentTop.scrollTop = 0;

        this.$refs.contentHeader.classList.add('hide-anim')
        this.$refs.contentDescription.classList.add('hide-anim')
        this.$refs.contentFacts.classList.add('hide-anim')

        setTimeout( () => {
          
          this.$refs.contentHeader.classList.remove('hide-anim')
          this.$refs.contentDescription.classList.remove('hide-anim')
          this.$refs.contentFacts.classList.remove('hide-anim')

          this.$emit('changeInfos',
          [
            {
              locationPos: [48.725740,2.125500],
              name: 'Château de Villiers-le-Bâcle',
              stars: '3.5',
              reviews: 11,
              description: `Le château de Villiers-le-Bâcle est un château français situé dans la commune de Villiers-le-Bâcle, dans le département de l'Essonne et la région Île-de-France, à vingt-deux kilomètres au sud-ouest de Paris. Datant du XVIIIᵉ siècle, il est entouré d'un parc de 40 ha.<br>Nullam consectetur in ex quis facilisis. Etiam fringilla sem euismod eros ornare, quis consequat metus iaculis. Vestibulum vitae turpis quis mauris semper finibus. Ut ullamcorper justo in egestas euismod. Integer vel ipsum ut augue commodo ullamcorper nec sit amet diam. Mauris quam lectus, aliquam vitae lacinia a, viverra vel metus. Vestibulum libero quam, posuere eu arcu in, maximus sagittis nisi. Vivamus ullamcorper felis a nunc aliquam tristique eu in mi.`,
              facts: [
                {
                  id: 1,
                  fact: `Au milieu du xviie siècle, un hôtel particulier se trouvait à l'emplacement actuel du château : l'hôtel de Presles. Il appartenait à Françoise Lombard.`
                },
                {
                  id: 2,
                  fact: `Le propriétaire actuel du château est Yves Lecoq, dont il constitue la résidence principale.`
                },
              ],
              images: [
                {
                  src: 'https://images.unsplash.com/photo-1551727032-0c2a01bf8b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80'
                },
                {
                  src: 'https://images.unsplash.com/photo-1505567745926-ba89000d255a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
                },
              ]
            }
          ]
        );
        }, 400)
      },
    }
  }
</script>