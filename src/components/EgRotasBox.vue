<template>
  <v-row dense class="pt-3">
    <!-- smAndDown -->
    <v-expansion-panels v-if="smAndDown">
      <v-row dense>
        <v-col cols="12">
          <v-expansion-panel rounded="0" style="max-height: 400px" class="overflow-auto">
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col cols="6"> Rotas Disponíveis</v-col>
                <v-col cols="6"> {{ rotasConcluidas }} / 410 </v-col>
              </v-row></v-expansion-panel-title
            >
            <v-expansion-panel-text>
              <v-text-field
                v-model="searchRota"
                label="Pesquisar pelo número"
                outlined
              ></v-text-field>
              <v-chip-group>
                <v-chip
                  medium
                  pill
                  @click="toggleRota(item.rota)"
                  v-for="item in filteredRotas"
                  :key="item.rota"
                >
                  {{ item.rota }}
                </v-chip>
              </v-chip-group>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-col>
        <v-col cols="12">
          <v-expansion-panel rounded="0" style="max-height: 400px" class="overflow-auto">
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col cols="6"> Rotas Concluídas</v-col>
                <v-col cols="6">{{ porcentagemConclusao }}</v-col>
              </v-row></v-expansion-panel-title
            >
            <v-expansion-panel-text>
              <v-text-field
                v-model="searchRotaConcluida"
                label="Pesquisar pelo número"
                outlined
              ></v-text-field>
              <v-chip-group>
                <v-chip
                  pill
                  @click="toggleRota(item.rota)"
                  v-for="item in filteredRotasConcluidas"
                  :key="item.rota"
                >
                  {{ item.rota }}
                </v-chip>
              </v-chip-group>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-col>
      </v-row>
    </v-expansion-panels>

    <!-- mdAndUp -->
    <v-col v-else cols="12">
      <v-row dense>
        <v-col cols="12" sm="6">
          <v-card rounded="0">
            <v-card-title class="text-center">Rotas Totais</v-card-title>
            <v-card-text class="text-center text-h6">{{ rotasConcluidas }} / 410</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card rounded="0">
            <v-card-title class="text-center">Porcentagem Conclusão</v-card-title>
            <v-card-text class="text-center text-h6">{{ porcentagemConclusao }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="border-opacity-0" :thickness="8"></v-divider>

      <v-row dense>
        <v-col cols="12" sm="6">
          <v-card rounded="0" style="max-height: 400px" class="overflow-auto">
            <v-card-title class="text-center">Rotas Disponíveis</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="searchRota"
                label="Pesquisar pelo número"
                outlined
              ></v-text-field>
              <v-chip-group>
                <v-chip
                  medium
                  pill
                  @click="toggleRota(item.rota)"
                  v-for="item in filteredRotas"
                  :key="item.rota"
                >
                  {{ item.rota }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card rounded="0" style="height: 400px" class="overflow-auto">
            <v-card-title class="text-center">Rotas Concluídas</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="searchRotaConcluida"
                label="Pesquisar pelo número"
                outlined
              ></v-text-field>
              <v-chip-group>
                <v-chip
                  pill
                  @click="toggleRota(item.rota)"
                  v-for="item in filteredRotasConcluidas"
                  :key="item.rota"
                >
                  {{ item.rota }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { storeToRefs } from 'pinia'
import { useRotasStore } from '../stores/rotas'
import { useDisplay } from 'vuetify/lib/framework.mjs'

export default {
  name: 'EgRotas',

  data() {
    return { searchRota: '', searchRotaConcluida: '' }
  },

  computed: {
    filteredRotas() {
      if (!this.searchRota) {
        return this.listaRotas
      }
      return this.listaRotas.filter((x) => {
        return x.rota.toString().includes(this.searchRota)
      })
    },
    filteredRotasConcluidas() {
      if (!this.searchRotaConcluida) {
        return this.listaRotasConcluidas
      }
      return this.listaRotasConcluidas.filter((x) => {
        return x.rota.toString().includes(this.searchRotaConcluida)
      })
    }
  },

  setup() {
    const useRotas = useRotasStore()

    const { listaRotas, listaRotasConcluidas, rotasConcluidas, porcentagemConclusao } =
      storeToRefs(useRotas)
    const { toggleRota } = useRotas

    const { smAndDown } = useDisplay()

    return {
      listaRotas,
      listaRotasConcluidas,
      rotasConcluidas,
      porcentagemConclusao,
      toggleRota,
      smAndDown
    }
  }
}
</script>
<style scoped>
:deep(.expansion-text-wrapper-p-0 .v-expansion-panel-text__wrapper) {
  padding: 0;
}
</style>
