<template>
    <div>
        <apexchart v-if="grafico" width="300" type="histogram" :options="chartOptions" :series="series"></apexchart>
        <!-- <apexchart v-else="grafico" width="300" type="radar" :options="chartOptions" :series="series"></apexchart> -->
   </div>
</template>

<script setup>
import { computed, onMounted, reactive, toRefs } from 'vue';

// se definen los props. este es un array
const props = defineProps({
    vida:Number,
    ataque:Number,
    defensa:Number,
    ferviente:Number,
    velocidad:Number
})

const chartOptions = {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['vida', 'ataque', 'defensa', 'ferviente']
          },
        }
        const series = computed(() => { return [{
          name: 'series-1',
          data: [props.vida, props.ataque, props.defensa, props.ferviente]
  }]})


  const state = reactive({
    grafico: true,
    edit: false,
    arrayVacioo: ['']
  })

  let {grafico, edit} = toRefs(state)

  let CambioEstadistica = () => {
    edit.value = !edit.value
  }

</script>

<style lang="scss" scoped>

</style>
