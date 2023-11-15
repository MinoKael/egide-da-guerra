import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useJogadorStore = defineStore('jogador', {
  state: () => ({
    jogador: useLocalStorage('piniaJogador', {
      pvMax: 30,
      pvAtual: 30,
      pmMax: 20,
      pmAtual: 20,
      forca: 13,
      habilidade: 11
    }),
    magias: [
      {
        name: 'Sangue de Ferro',
        custoPm: 4,
        efeito: ''
      },
      {
        name: 'Força Divina',
        custoPm: 5,
        efeito: ''
      },
      {
        name: 'Cura',
        custoPm: 6,
        efeito: ''
      },
      {
        name: 'Soco de Arsenal',
        custoPm: 6,
        efeito: ''
      }
    ]
  }),
  getters: {},
  actions: {
    resetAll() {
      ;(this.jogador.pvMax = 30),
        (this.jogador.pvAtual = 30),
        (this.jogador.pmMax = 20),
        (this.jogador.pmAtual = 20),
        (this.jogador.forca = 13),
        (this.jogador.habilidade = 11)
    },
    addPvAtual(value) {
      this.jogador.pvAtual = this.addToMax(this.jogador.pvAtual, value, this.jogador.pvMax)
    },
    addPvMax(value) {
      this.jogador.pvMax = this.jogador.pvMax + value
    },
    addPmAtual(value) {
      this.jogador.pmAtual = this.addToMax(this.jogador.pmAtual, value, this.jogador.pmMax)
    },
    addPmMax(value) {
      this.jogador.pmMax = this.jogador.pmMax + value
    },
    addForca(value) {
      this.jogador.forca = this.jogador.forca + value
    },
    addHabilidade(value) {
      this.jogador.habilidade = this.jogador.habilidade + value
    },
    subPvAtual(value) {
      this.jogador.pvAtual = this.reduceToZero(this.jogador.pvAtual, value)
    },
    subPvMax(value) {
      this.jogador.pvMax = this.reduceToZero(this.jogador.pvMax, value)
    },
    subPmAtual(value) {
      this.jogador.pmAtual = this.reduceToZero(this.jogador.pmAtual, value)
    },
    subPmMax(value) {
      this.jogador.pmMax = this.reduceToZero(this.jogador.pmMax, value)
    },
    subForca(value) {
      this.jogador.forca = this.reduceToZero(this.jogador.forca, value)
    },
    subHabilidade(value) {
      this.jogador.habilidade = this.reduceToZero(this.jogador.habilidade, value)
    },
    addToMax(currentValue, value, max) {
      const result = currentValue + value
      return Math.min(result, max)
    },
    reduceToZero(currentValue, value) {
      const result = currentValue - value
      return Math.max(result, 0)
    }
  }
})
