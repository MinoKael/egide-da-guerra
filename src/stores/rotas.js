import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useRotasStore = defineStore('rotas', {
  state: () => ({
    rotas: useLocalStorage(
      'piniaRotas',
      Array.from({ length: 410 }, (_, index) => ({
        rota: index + 1,
        isCompleted: false
      }))
    )
  }),
  getters: {
    listaRotas() {
      return this.rotas.filter((x) => !x.isCompleted)
    },
    listaRotasConcluidas() {
      return this.rotas.filter((x) => x.isCompleted)
    },
    rotasConcluidas() {
      return this.rotas.reduce((p, c) => {
        return c.isCompleted ? p + 1 : p
      }, 0)
    },
    porcentagemConclusao() {
      return ((this.rotasConcluidas / 410) * 100).toFixed(2) + '%'
    }
  },
  actions: {
    toggleRota(rota) {
      const r = this.rotas.find((x) => x.rota === rota)
      r.isCompleted = !r.isCompleted
    }
  }
})
