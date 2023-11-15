import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useInimigoStore = defineStore('inimigo', {
  state: () => ({
    inimigo: useLocalStorage('piniaInimigo', {
      pvMax: 0,
      pvAtual: 0,
      pmMax: 0,
      pmAtual: 0,
      forca: 0,
      habilidade: 0
    })
  }),
  actions: {
    addPvAtualInimigo(value) {
      this.inimigo.pvAtual = this.addToMax(this.inimigo.pvAtual, value, this.inimigo.pvMax)
    },
    addPvMaxInimigo(value) {
      this.inimigo.pvMax = this.inimigo.pvMax + value
    },
    addPmAtualInimigo(value) {
      this.inimigo.pmAtual = this.addToMax(this.inimigo.pmAtual, value, this.inimigo.pmMax)
    },
    addPmMaxInimigo(value) {
      this.inimigo.pmMax = this.inimigo.pmMax + value
    },
    addForcaInimigo(value) {
      this.inimigo.forca = this.inimigo.forca + value
    },
    addHabilidadeInimigo(value) {
      this.inimigo.habilidade = this.inimigo.habilidade + value
    },
    subPvAtualInimigo(value) {
      this.inimigo.pvAtual = this.reduceToZero(this.inimigo.pvAtual, value)
    },
    subPvMaxInimigo(value) {
      this.inimigo.pvMax = this.reduceToZero(this.inimigo.pvMax, value)
    },
    subPmAtualInimigo(value) {
      this.inimigo.pmAtual = this.reduceToZero(this.inimigo.pmAtual, value)
    },
    subPmMaxInimigo(value) {
      this.inimigo.pmMax = this.reduceToZero(this.inimigo.pmMax, value)
    },
    subForcaInimigo(value) {
      this.inimigo.forca = this.reduceToZero(this.inimigo.forca, value)
    },
    subHabilidadeInimigo(value) {
      this.inimigo.habilidade = this.reduceToZero(this.inimigo.habilidade, value)
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
