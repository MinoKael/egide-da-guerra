<template>
  <v-app-bar density="compact">
    <v-row align-content="space-between" justify="center">
      <v-col class="ml-4" align-self="center">Égide da Guerra</v-col>
      <v-spacer></v-spacer>
      <v-col align="right" class="mr-4"><EgThemeButton /></v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
import EgThemeButton from './EgThemeButton.vue'
export default {
  components: {
    EgThemeButton
  }
}
</script>
