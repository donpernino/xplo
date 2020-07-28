<template>
  <div id="app">
    <Header
      v-bind:userPic="userPic"
      v-bind:userName="userName"
      v-bind:userNotifications="userNotifications"
    />
    <Maquettes />
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Maquettes from './components/Maquettes.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Maquettes
    },
    data: () => {
      return {
        userPic: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=7dc81c222437ff6fed90bfb04c491d6f',
        userName: 'Pierre D.',
        userNotifications: 2
      }
    }
  }
</script>
