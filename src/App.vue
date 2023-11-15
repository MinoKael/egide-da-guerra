<template>
  <v-app>
    <EgAppBar />
    <v-main>
      <HomeView />
    </v-main>
    <EgFooter />
  </v-app>
</template>
<script>
import HomeView from './views/HomeView.vue'
import EgAppBar from './components/EgAppBar.vue'
import EgFooter from './components/EgFooter.vue'

export default {
  components: {
    HomeView,
    EgAppBar,
    EgFooter
  }
}
</script>
