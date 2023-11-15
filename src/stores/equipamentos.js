import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useEquipamentosStore = defineStore('equipamentos', {
  state: () => ({
    equipamentos: useLocalStorage('piniaEquipamentos', [
      {
        name: 'Algoz de Kally',
        efeito: { forca: ['F1', 'F2'] },
        descricaoEfeito: 'F+1 contra Dragões e F+2 contra Golpes Poderosos.'
      },
      {
        name: 'Anel do Tempo',
        efeito: { forca: ['F2'] },
        descricaoEfeito: 'F+2 contra Ataques Velozes.'
      },
      {
        name: 'Botas de Alward',
        efeito: { habilidade: ['H2'] },
        descricaoEfeito: 'H+2 e usos especiais.'
      },
      {
        name: 'Escudo Impérvio',
        efeito: { forca: ['F2'] },
        descricaoEfeito: 'F+2 contra Chamas ou Explosões.'
      },
      {
        name: 'Martelo dos Trovões',
        efeito: { dado: ['2D'], custoPm: 4 },

        descricaoEfeito: '+2D no jogada de ataque ao custo de 4 PM.'
      },
      {
        name: 'Medalha do Deicida',
        efeito: { pvMax: 6 },
        descricaoEfeito: 'Aumenta PV máximos em +6.'
      },
      {
        name: 'Monóculo da Verdade',
        efeito: { forca: ['F2'], habilidade: ['H2'], pmMax: 2, custoPm: 2 },
        descricaoEfeito: 'Aumenta PM máximos em +2. +2 em testes de F ou H ao custo de 2 PM.'
      },
      {
        name: 'Montante Uivante',
        efeito: { forca: ['F2'] },
        descricaoEfeito: 'F+2 contra Defesa Impérvia.'
      },
      {
        name: 'Pelego do Descanso',
        efeito: { pvAtual: 2, pvMax: 2, combate: 'final' },
        descricaoEfeito: 'Após cada combate, restaura 2 PV e 2 PM.'
      },
      {
        name: 'Símbolo Sagrado Primordial',
        efeito: { pvMax: 2, magiaDivina: 1 },
        descricaoEfeito:
          'Aumenta PM máximos em +2. Melhora todos os efeitos de Magias Divinas em 1 ponto.'
      },
      { name: 'Turbante Planar', descricaoEfeito: 'Usos especiais.' },
      {
        name: 'Tridente Sibilante',
        efeito: { forca: ['F2'], dano: ['1D+3'], custoPm: 3, combate: 'inicio' },
        descricaoEfeito:
          'F+2 contra Ataques à Distância. Na primeira rodada do combate, Arsenal pode gastar 3 PM para causar automaticamente 1D+3 de dano.'
      },
      { name: 'Alabarda de Sirrannamena', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Algoz de Allihanna', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Anel da Barreira', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Broquel de Nordman', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Canhão Final', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Centelha Solar', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Coroa de Chamas', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Espaldar dos Intocáveis', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Espada de Asloth', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Espada de Yugraz', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Granadas Elementais', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Lua Minguante', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Luz das Estrelas', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Martelo dos Relâmpagos', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Nuvem de Al-Gazara', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Picareta de Marmaduk', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Ruína da Civilização', efeito: { efeito: ['F2'] }, descricaoEfeito: '' },
      { name: 'Slash Calliber', efeito: { efeito: ['F2'] }, descricaoEfeito: '' }
    ])
  }),
  getters: {},
  actions: {}
})
