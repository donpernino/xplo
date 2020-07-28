<template>
  <div id="app" class="full-h">
    <Header
      v-bind:userPic="userPic"
      v-bind:userName="userName"
      v-bind:userNotifications="userNotifications"
    />
    <main class="container-fluid full-h">
      <div class="row full-h">
        <Tabs />
        <Description />
      </div>
    </main>
    <Maquettes />
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Maquettes from './components/Maquettes.vue'
  import Tabs from './components/Content/Tabs.vue'
  import Description from './components/Content/Description.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Maquettes,
      Tabs,
      Description
    },
    data: () => {
      return {
        userPic: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=7dc81c222437ff6fed90bfb04c491d6f',
        userName: 'Pierre D.',
        userNotifications: 2,
      }
    }
  }
</script>
