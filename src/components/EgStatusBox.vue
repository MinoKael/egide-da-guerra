<template>
  <v-row dense class="pt-3">
    <!-- Coluna Jogador -->
    <v-col cols="6" sm="6">
      <v-card rounded="0">
        <v-card-title class="text-center text-h4" @click="resetAll" style="cursor: pointer">
          <span>
            Jogador
            <v-tooltip activator="parent" location="end center" origin="auto"
              >Resetar Jogador</v-tooltip
            >
          </span>
        </v-card-title>

        <v-card-title class="text-center"> PV </v-card-title>
        <v-card-text class="text-center text-h4 pt-4 pb-1">
          {{ jogador.pvAtual }} / {{ jogador.pvMax }}</v-card-text
        >
        <v-card-actions class="pt-5 pb-3">
          <v-slider hide-details v-model="jogador.pvAtual" :max="jogador.pvMax" step="1">
            <template #prepend>
              <v-icon size="30" class="ml-1" @click="subPvAtual(1)">mdi-minus</v-icon>
            </template>
            <template #append>
              <v-icon size="30" class="mr-1" @click="addPvAtual(1)">mdi-plus</v-icon>
            </template>
          </v-slider>
        </v-card-actions>
      </v-card>

      <v-card rounded="0">
        <v-card-title class="text-center">PM</v-card-title>
        <v-card-text class="text-center text-h4 pt-4 pb-1">
          {{ jogador.pmAtual }} / {{ jogador.pmMax }}</v-card-text
        >
        <v-card-actions class="pt-5 pb-3">
          <v-slider hide-details v-model="jogador.pmAtual" :max="jogador.pmMax" step="1">
            <template #prepend>
              <v-icon size="30" class="ml-1" @click="subPmAtual(1)">mdi-minus</v-icon>
            </template>
            <template #append>
              <v-icon size="30" class="mr-1" @click="addPmAtual(1)">mdi-plus</v-icon>
            </template>
          </v-slider>
        </v-card-actions>
      </v-card>
      <v-row no-gutters>
        <v-col cols="6">
          <v-card rounded="0">
            <v-card-title class="text-center">Força</v-card-title>
            <v-card-text class="text-center text-h4 pt-4 pb-1"> {{ jogador.forca }} </v-card-text>
            <v-card-actions class="justify-center">
              <v-icon size="30" class="mr-4" @click="addForca(1)">mdi-plus</v-icon>
              <v-icon size="30" @click="subForca(1)">mdi-minus</v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card rounded="0">
            <v-card-title class="text-center">Habilidade</v-card-title>
            <v-card-text class="text-center text-h4 pt-4 pb-1">
              {{ jogador.habilidade }}
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-icon size="30" class="mr-4" @click="addHabilidade(1)">mdi-plus</v-icon>
              <v-icon size="30" @click="subHabilidade(1)">mdi-minus</v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <!-- Coluna Inimigo -->
    <v-col cols="6" sm="6">
      <v-card rounded="0">
        <v-card-title class="text-center text-h4">Inimigo</v-card-title>
        <v-card-title class="text-center">
          <v-dialog contained v-model="dialog" width="130" transition="dialog-bottom-transition">
            <template #activator>
              <span @click="dialog = true" variant="solo" style="cursor: pointer">
                PV
                <v-tooltip activator="parent" location="end center" origin="auto"
                  >Editar PV máximo</v-tooltip
                >
              </span>
            </template>
            <v-text-field
              v-model="inimigo.pvMax"
              variant="solo"
              @keypress="onlyNumber($event)"
              label="Editar PV máximo"
              required
              class="centered-input"
            ></v-text-field>
          </v-dialog>
        </v-card-title>

        <v-card-text class="text-center text-h4 pt-4 pb-1">
          {{ inimigo.pvAtual }} / {{ inimigo.pvMax }}</v-card-text
        >
        <v-card-actions class="pt-5 pb-3">
          <v-slider hide-details v-model="inimigo.pvAtual" :max="inimigo.pvMax" step="1">
            <template #prepend>
              <v-icon size="30" class="ml-1" @click="subPvAtualInimigo(1)">mdi-minus</v-icon>
            </template>
            <template #append>
              <v-icon size="30" class="mr-1" @click="addPvAtualInimigo(1)">mdi-plus</v-icon>
            </template>
          </v-slider>
        </v-card-actions>
      </v-card>

      <v-card rounded="0">
        <v-card-title class="text-center">
          <v-dialog contained v-model="dialog2" width="130" transition="dialog-bottom-transition">
            <template #activator>
              <span @click="dialog2 = true" variant="solo" style="cursor: pointer">
                PM
                <v-tooltip activator="parent" location="end center" origin="auto"
                  >Editar PM máximo</v-tooltip
                >
              </span>
            </template>
            <v-text-field
              v-model="inimigo.pmMax"
              variant="solo"
              @keypress="onlyNumber($event)"
              label="Editar PM máximo"
              required
              class="centered-input"
            ></v-text-field>
          </v-dialog>
        </v-card-title>
        <v-card-text class="text-center text-h4 pt-4 pb-1">
          {{ inimigo.pmAtual }} / {{ inimigo.pmMax }}
        </v-card-text>
        <v-card-actions class="pt-5 pb-3">
          <v-slider hide-details v-model="inimigo.pmAtual" :max="inimigo.pmMax" step="1">
            <template #prepend>
              <v-icon size="30" class="ml-1" @click="subPmAtualInimigo(1)">mdi-minus</v-icon>
            </template>
            <template #append>
              <v-icon size="30" class="mr-1" @click="addPmAtualInimigo(1)">mdi-plus</v-icon>
            </template>
          </v-slider>
        </v-card-actions>
      </v-card>
      <v-row no-gutters>
        <v-col cols="6">
          <v-card rounded="0">
            <v-card-title class="text-center">Força</v-card-title>
            <v-card-text class="text-center text-h4 pt-4 pb-1"> {{ inimigo.forca }} </v-card-text>
            <v-card-actions class="justify-center">
              <v-icon size="30" class="mr-4" @click="addForcaInimigo(1)">mdi-plus</v-icon>
              <v-icon size="30" @click="subForcaInimigo(1)">mdi-minus</v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card rounded="0">
            <v-card-title class="text-center">Habilidade</v-card-title>
            <v-card-text class="text-center text-h4 pt-4 pb-1">
              {{ inimigo.habilidade }}
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-icon size="30" class="mr-4" @click="addHabilidadeInimigo(1)">mdi-plus</v-icon>
              <v-icon size="30" @click="subHabilidadeInimigo(1)">mdi-minus</v-icon>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { storeToRefs } from 'pinia'
import { useJogadorStore } from '../stores/jogador'
import { useInimigoStore } from '../stores/inimigo'

export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialogJogador: false
    }
  },

  methods: {
    onlyNumber(evt) {
      let expect = evt.target.value.toString() + evt.key.toString()
      if (!/^[0-9]*$/.test(expect)) {
        evt.preventDefault()
      } else {
        return true
      }
    }
  },

  setup() {
    const useJogador = useJogadorStore()
    const useInimigo = useInimigoStore()

    const { jogador } = storeToRefs(useJogador)
    const { inimigo } = storeToRefs(useInimigo)
    const {
      addPvAtual,
      addPmAtual,
      addPvMax,
      addPmMax,
      addForca,
      addHabilidade,
      subPvAtual,
      subPmAtual,
      subPvMax,
      subPmMax,
      subForca,
      subHabilidade,
      resetAll
    } = useJogador
    const {
      addPvAtualInimigo,
      addPmAtualInimigo,
      addPvMaxInimigo,
      addPmMaxInimigo,
      addForcaInimigo,
      addHabilidadeInimigo,
      subPvAtualInimigo,
      subPmAtualInimigo,
      subPvMaxInimigo,
      subPmMaxInimigo,
      subForcaInimigo,
      subHabilidadeInimigo
    } = useInimigo

    return {
      jogador,
      addPvAtual,
      addPmAtual,
      addPvMax,
      addPmMax,
      addForca,
      addHabilidade,
      subPvAtual,
      subPmAtual,
      subPvMax,
      subPmMax,
      subForca,
      subHabilidade,
      resetAll,
      inimigo,
      addPvAtualInimigo,
      addPmAtualInimigo,
      addPvMaxInimigo,
      addPmMaxInimigo,
      addForcaInimigo,
      addHabilidadeInimigo,
      subPvAtualInimigo,
      subPmAtualInimigo,
      subPvMaxInimigo,
      subPmMaxInimigo,
      subForcaInimigo,
      subHabilidadeInimigo
    }
  }
}
</script>
<style scoped>
:deep(.centered-input input) {
  text-align: center;
}
</style>
