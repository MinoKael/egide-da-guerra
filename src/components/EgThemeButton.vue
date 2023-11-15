<template>
  <v-btn small fab variant="text" @click="toggleTheme()">
    <v-icon>{{
      theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
    }}</v-icon>
  </v-btn>
</template>
<script>
import { useTheme } from 'vuetify/lib/framework.mjs'

export default {
  props: {
    darkMode: {
      type: Function,
      default: () => ({})
    }
  },
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark')
    }
  }
}
</script>
