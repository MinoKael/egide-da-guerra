<template>
  <v-container style="max-width: 1280px" fluid class="pt-1">
    <v-row no-gutters>
      <v-col cols="12">
        <v-tabs v-model="currentTab" align-tabs="center" grow>
          <v-tab v-for="(tab, index) in tabs" :key="index">
            <v-icon left class="mr-1">{{ tab.icon }}</v-icon>
            <span v-if="smAndUp">{{ tab.title }}</span>
          </v-tab>
        </v-tabs>
        <v-window v-model="currentTab">
          <v-window-item>
            <EgCombateBox />
            <EgStatusBox />
          </v-window-item>
          <v-window-item>
            <EgEquipamentoBox />
          </v-window-item>
          <v-window-item>
            <EgRotasBox />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import EgRotasBox from '../components/EgRotasBox.vue'
import EgEquipamentoBox from '../components/EgEquipamentoBox.vue'
import EgStatusBox from '../components/EgStatusBox.vue'
import EgCombateBox from '../components/EgCombateBox.vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

export default {
  components: {
    EgRotasBox,
    EgEquipamentoBox,
    EgStatusBox,
    EgCombateBox
  },
  data: () => ({
    currentTab: 0,
    tabs: [
      {
        icon: 'mdi-sword-cross',
        title: 'Combate'
      },

      {
        icon: 'mdi-bag-personal-outline',
        title: 'Equipamento'
      },
      {
        icon: 'mdi-sign-direction',
        title: 'Rotas'
      }
    ]
  }),
  setup() {
    const { smAndUp } = useDisplay()
    return { smAndUp }
  }
}
</script>
