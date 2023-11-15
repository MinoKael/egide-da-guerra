<template>
  <v-card class="mt-3">
    <!-- smAndDown -->
    <v-row v-if="smAndDown" class="justify-center">
      <v-col cols="6">
        <v-card-title class="text-center">Jogador</v-card-title>
        <v-card-text class="text-center text-h5 pt-4">
          [ {{ playerDicePool[0] }}, {{ playerDicePool[1] }} + {{ playerBonus }} ]</v-card-text
        >
        <v-card-text v-if="playerDicePool[0] > 0" class="text-center text-h5">
          Total: {{ playerTotal }}
        </v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-title class="text-center">Inimigo</v-card-title>
        <v-card-text class="text-center text-h5 pt-4">
          [ {{ enemyDicePool[0] }}, {{ enemyDicePool[1] }} + {{ enemyBonus }} ]
        </v-card-text>
        <v-card-text v-if="enemyDicePool[0] > 0" class="text-center text-h5">
          Total: {{ enemyTotal }}
        </v-card-text>
      </v-col>
      <v-col cols="12">
        <v-card-title class="text-center">Resolução</v-card-title>
        <v-card-text v-if="flagComputed" class="text-center text-h5 pt-4 pb-4">{{
          resolucao
        }}</v-card-text>
        <v-card-text v-else class="text-center text-h5 pt-4">...</v-card-text>
      </v-col>
    </v-row>

    <!-- mdAndUp -->
    <v-row v-else class="justify-center">
      <v-col sm="4">
        <v-card-title class="text-center">Jogador</v-card-title>
        <v-card-text class="text-center text-h5 pt-4">
          [ {{ playerDicePool }} + {{ jogador.forca }} + {{ playerBonus }} ]
        </v-card-text>
        <v-card-text v-if="playerDicePool[0] > 0" class="text-center text-h5">
          Total: {{ playerTotal }}
        </v-card-text>
      </v-col>
      <v-col sm="4">
        <v-card-title class="text-center">Resolução</v-card-title>
        <v-card-text v-if="flagComputed" class="text-center text-h5 pt-4">{{
          resolucao
        }}</v-card-text>
        <v-card-text v-else class="text-center text-h5 pt-4">...</v-card-text>
      </v-col>
      <v-col sm="4">
        <v-card-title class="text-center">Inimigo</v-card-title>

        <v-card-text class="text-center text-h5 pt-4">
          [ {{ enemyDicePool }} + {{ inimigo.forca }} + {{ enemyBonus }} ]
        </v-card-text>
        <v-card-text v-if="enemyDicePool[0] > 0" class="text-center text-h5">
          Total: {{ enemyTotal }}
        </v-card-text>
      </v-col>
    </v-row>

    <v-card-actions class="justify-center">
      <v-btn
        :disabled="inimigo.pvAtual === 0"
        block
        @click="recursiveRollWithDelay(20), (this.flagComputed = false)"
        >Roll</v-btn
      >
    </v-card-actions>
  </v-card>

  <v-row justify="center" align="center">
    <v-col>
      <v-icon :style="{ transform: 'rotate(45deg)' }"><font-awesome-icon icon="gavel" /></v-icon
      >Golpes Poderosos
    </v-col>
    <v-col> <v-icon>mdi-chevron-double-right</v-icon>Ataques Velozes </v-col>
    <v-col> <v-icon>mdi-shield</v-icon>Defesa Impérvia </v-col>
    <v-col> <v-icon>mdi-sword-cross</v-icon>Maior Número </v-col>
    <v-col> <v-icon>mdi-bow-arrow</v-icon>Ataques à Distância </v-col>
    <v-col> <v-icon>mdi-feather</v-icon>Combate Rápido </v-col>
    <v-col
      ><v-icon>
        <font-awesome-icon icon="burst" />
      </v-icon>
      Chamas ou Explosões
    </v-col>
  </v-row>
</template>
<script>
import { storeToRefs } from 'pinia'
import { useJogadorStore } from '../stores/jogador'
import { useInimigoStore } from '../stores/inimigo'
import { useDisplay } from 'vuetify/lib/framework.mjs'

export default {
  data() {
    return {
      playerDicePool: [0, 0],
      playerAditionalDice: 0,
      enemyDicePool: [0, 0],
      enemyAditionalDice: 0,
      playerBonus: 0,
      enemyBonus: 0,
      flagComputed: false,
      turnoCombate: 0
    }
  },
  computed: {
    playerTotal() {
      return this.sumArray(this.playerDicePool) + this.jogador.forca + this.playerBonus
    },
    enemyTotal() {
      return this.sumArray(this.enemyDicePool) + this.inimigo.forca + this.enemyBonus
    },
    resolucao() {
      if (this.playerTotal > this.enemyTotal) {
        return this.inimigo.pvAtual > 0
          ? `Inimigo perdeu ${this.playerTotal - this.enemyTotal} PV`
          : 'Inimigo foi derrotado!'
      } else if (this.playerTotal < this.enemyTotal) {
        return `Jogador perdeu ${this.enemyTotal - this.playerTotal} PV`
      } else {
        return 'Empate'
      }
    }
  },
  methods: {
    sumArray(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0)
    },
    random(max) {
      return Math.floor(Math.random() * (max - 1 + 1)) + 1
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
    roll() {
      for (var i = 0; i < 2 + this.playerAditionalDice; i++) {
        this.playerDicePool[i] = this.random(6)
      }
      for (var j = 0; j < 2 + this.enemyAditionalDice; j++) {
        this.enemyDicePool[j] = this.random(6)
      }
    },
    resolveDamage() {
      if (this.playerTotal > this.enemyTotal) {
        this.subPvAtualInimigo(this.playerTotal - this.enemyTotal)
        this.flagComputed = true
      } else {
        this.subPvAtual(this.enemyTotal - this.playerTotal)
        this.flagComputed = true
      }
    },
    async recursiveRollWithDelay(counter) {
      if (counter <= 0) {
        this.resolveDamage()
        return
      }
      this.roll()
      await this.sleep(40)
      await this.recursiveRollWithDelay(counter - 1)
    }
  },
  setup() {
    const useJogador = useJogadorStore()
    const useInimigo = useInimigoStore()

    const { jogador } = storeToRefs(useJogador)
    const { inimigo } = storeToRefs(useInimigo)
    const { subPvAtualInimigo } = useInimigo
    const { subPvAtual } = useJogador

    const { smAndDown } = useDisplay()

    return { jogador, inimigo, subPvAtual, subPvAtualInimigo, smAndDown }
  }
}
</script>
