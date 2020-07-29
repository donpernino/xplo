<template>
  <div id="app" class="full-h">
    <Header
      v-bind:userPic="userPic"
      v-bind:userName="userName"
      v-bind:userNotifications="userNotifications"
    />
    <main class="container-fluid">
      <div class="row">
        <Tabs
          v-bind:locationPos="locationPos"
          v-bind:userPos="userPos"
          v-bind:images="images"
        />
        <Description
          v-bind:name="name"
          v-bind:stars="stars"
          v-bind:reviews="reviews"
          v-bind:description="description"
          v-bind:facts="facts"
          v-bind:images="images"
          v-on:changeInfos="updateInfos($event)"
        />
      </div>
    </main>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Tabs from './components/Content/Tabs.vue'
  import Description from './components/Content/Description.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Tabs,
      Description
    },
    data: () => {
      return {
        userPic: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=7dc81c222437ff6fed90bfb04c491d6f',
        userName: 'Pierre D.',
        userNotifications: 2,
        locationPos: [48.701190, 2.136570],
        userPos: [48.7015705,2.2054508],
        name: 'Château du Val Fleury',
        stars: '4.5',
        reviews: 44,
        description: `Le Val Fleury est le centre d'exposition de la ville de Gif-sur-Yvettes. Il propose une programmation pluridisciplinaire d'enverge nationale avec 5 expositions par saison : patrimoine, art comtemporain, sciences, photographie et arts graphiques. La programmation a pour ambition d’interroger et d’interpeller les visiteurs sur des sujets et des techniques diversifiés : patrimoine, photographie, sciences, art contemporain et design…<br><br>
        Spiritualités d'Éthiopie<br>
        Du 8 au 27 septembre 2020`,
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
            src: 'https://images.unsplash.com/photo-1539584222411-a76a40e9e861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            descr: 'test'
          },
          {
            src: 'https://images.unsplash.com/photo-1583044302608-c971c5aff184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
            descr: 'test'
          },
          {
            src: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            descr: 'test'
          },
          {
            src: 'https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            descr: 'test'
          },
          {
            src: 'https://images.unsplash.com/photo-1489421471208-251cc68284b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            descr: 'test'
          }
        ],
      }
    },
    methods: {
      updateInfos: function(updatedInfos) {
        this.locationPos = updatedInfos[0].locationPos
        this.name = updatedInfos[0].name
        this.stars = updatedInfos[0].stars
        this.reviews = updatedInfos[0].reviews
        this.description = updatedInfos[0].description
        this.facts = updatedInfos[0].facts
        this.images = updatedInfos[0].images
      }
    }
  }
</script>
