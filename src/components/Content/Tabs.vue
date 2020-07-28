<template>
    <section class="col-6 content-section">
      <b-tabs>
        <b-tab title="Permanent" active>
          <LeftTab />
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
    components: {
      LeftTab,
      RightTab
    }
  }
</script>