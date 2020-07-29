<template>
  <div id="app" class="full-h">
    <Header
      v-bind:userPic="userPic"
      v-bind:userName="userName"
      v-bind:userNotifications="userNotifications"
    />
    <main class="container-fluid full-h">
      <div class="row full-h">
        <Tabs
          v-bind:locationPos="locationPos"
          v-bind:userPos="userPos"
        />
        <Description />
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
        locationPos: [48.7024872, 2.1364273],
        userPos: [48.7015705,2.2054508]
      }
    }
  }
</script>
