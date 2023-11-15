<template>
  <v-row dense class="pt-3 justify-center">
    <v-col cols="12">
      <v-card ref="essencialCard" density="compact" rounded="0" class="px-2">
        <v-card-title class="text-center">Equipamento Essencial</v-card-title>
        <v-combobox
          v-model="essencial"
          density="compact"
          multiple
          disabled
          :items="essencial"
        ></v-combobox>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card class="pb-3">
        <v-card-title>Itens Equipados (na Armadura)</v-card-title>
        <v-select
          v-for="n in 4"
          :key="n"
          v-model="boxEquipamentos[n]"
          :items="equipamentos"
          item-title="name"
          item-value="name"
          density="compact"
          label="Selecionar Equipamento"
          hide-details
          single-line
        ></v-select>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card class="pb-3">
        <v-card-title>Itens da Algibeira</v-card-title>
        <v-select
          v-for="n in 4"
          :key="n"
          v-model="boxAlgibeira[n]"
          :items="equipamentos"
          item-title="name"
          item-value="name"
          density="compact"
          label="Selecionar Equipamento"
          hide-details
          single-line
        ></v-select>
      </v-card>
    </v-col>
  </v-row>

  <pre>{{ boxEquipamentos }}</pre>
  <pre>{{ boxAlgibeira }}</pre>
</template>
<script>
import { useEquipamentosStore } from '../stores/equipamentos'
export default {
  data: () => ({
    boxEquipamentos: { 1: 'Martelo dos Trovões', 2: '', 3: '', 4: '' },
    boxAlgibeira: { 1: '', 2: '', 3: '', 4: '' },
    essencial: ['Armadura do Arsenal', 'Martelo dos Trovões', 'Algibeira Infinita']
  }),
  setup() {
    const { equipamentos } = useEquipamentosStore()
    return { equipamentos }
  }
}
</script>
