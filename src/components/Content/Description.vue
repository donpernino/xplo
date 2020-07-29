<template>
    <section class="col-md-6 full-h content-section">
      <div class="content">

        <!-- Content header -->
        <div class="content-header-wrapper">
          <div class="content-header">
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
        <p class="content-description">{{ description }}</p>

        <!-- Content show facts (mobile) -->
        <button class="content-show-facts-btn bold" v-on:click="factsHidden = !factsHidden">Le saviez-vous ?</button>

        <!-- Content facts -->
        <div class="content-facts" v-bind:class="{ hidden: factsHidden }">

          <!-- Content facts header -->
          <div class="content-facts-header">
            <h2 class="content-facts-header-title bold">Le saviez-vous ?</h2>
            <Button
              v-bind:id="'js-content-add-fact-btn'"
              v-bind:classes="'btn green outline bold uppercase content-add-fact-btn'"
              v-bind:text="'Ajouter une anecdote'"
              v-slot:icon
            >
              <PlusIcon />
            </Button>
          </div>

          <!-- Content facts list -->
          <ul
            class="content-facts-list"
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
          <Button
              v-bind:id="'js-content-actions-btn-like'"
              v-bind:classes="'btn rounded shadow white content-actions-btn like'"
              v-slot:icon
          >
            <div class="content-actions-btn-inner">
              <HeartIcon />
            </div>
          </Button>
          <!-- Content already visited -->
          <div class="content-actions-already-visited">
            <input type="checkbox" id="content-actions-already-visited" name="content-actions-already-visited" value="already-visited">
            <label for="content-actions-already-visited">Déjà visité</label>
          </div>
          <!-- Content dislike button -->
          <Button
              v-bind:id="'js-content-actions-btn-like'"
              v-bind:classes="'btn rounded shadow white content-actions-btn dislike'"
              v-slot:icon
          >
            <div class="content-actions-btn-inner">
              <CrossIcon />
            </div>
          </Button>
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
      StarRating
    },
    data: function() {
      return {
        name: 'Château du Val Fleury',
        stars: '4.5',
        reviews: 44,
        description: `Le Val Fleury est le centre d'exposition de la ville de Gif-sur-Yvettes. Il propose une programmation pluridisciplinaire d'enverge nationale avec 5 expositions par saison : patrimoine, art comtemporain, sciences, photographie et arts graphiques.`,
        factsHidden: true,
        facts: [
          {
            id: 1,
            fact: `Construit au XIXe siècle, le château est d'abord le lieu de résidence de différents notables locaux`
          },
          {
            id: 2,
            fact: `Le château est acquis en 1947 par le nouveau Commissariat à l'Energie Atomique (CEA) pour y loger du personnel`
          },
          {
            id: 3,
            fact: `La commune commence à transformer le château en espace culturel à partir de 2003`
          }
        ],
        images: [
          {
              src: 'https://images.unsplash.com/photo-1539584222411-a76a40e9e861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          }
        ]
      }
    },
  }
</script>