<template>
    <section class="col-md-6 content-section">
      <b-tabs>
        <b-tab title="Permanent" active>
          <LeftTab
            v-bind:locationPos="locationPos"
            v-bind:userPos="userPos"
          />
        </b-tab>
        <b-tab title="Évènements">
          <RightTab />
        </b-tab>
      </b-tabs>
    </section>
</template>

<script>
  import LeftTab from './LeftTab.vue'
  import RightTab from './RightTab.vue'

  export default {
    name: 'Tabs',
    props: {
      locationPos: Array,
      userPos: Array
    },
    components: {
      LeftTab,
      RightTab
    }
  }
</script>