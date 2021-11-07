<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const obverseDesigns = computed(() => store.state.obverseDesigns)
const reverseDesigns = computed(() => store.state.reverseDesigns)

let gameSettings = computed(() => store.state.gameSettings)

function changeReverseDesign(design) {
  store.commit('changeReverseDesign', design)
}

function changeObverseDesign(design) {
  store.commit('changeObverseDesign', design)
}

function changeRows(event) {
  store.commit('changeRows', Math.floor(event.target.value))
}

function changeColumns(event) {
  store.commit('changeColumns', event.target.value)
}
</script>

<template>
  <form
    class="
      flex flex-col
      gap-6
      m-auto
      p-8
      w-full
      h-full
      text-center
      bg-gray-900
      rounded-none
      opacity-95
      md:mt-10 md:max-w-xl md:h-auto md:rounded-lg md:opacity-100
    "
  >
    <h1 class="text-3xl font-black">Izaberite vrstu igre</h1>
    <div class="flex gap-3 justify-between">
      <router-link
        to="/playClassic"
        class="
          ratio-wide
          grid
          place-items-center
          py-2
          w-1/2
          hover:bg-gray-600
          bg-gray-700
          rounded
        "
      >
        <img class="h-14" src="../assets/icon-game-1.svg" alt="game1 image" />
        <p class="text-lg">Pronađi dve iste</p>
      </router-link>
      <router-link
        to="/playAdvanced"
        class="
          ratio-wide
          grid
          place-items-center
          py-2
          w-1/2
          hover:bg-gray-600
          bg-gray-700
          rounded
        "
      >
        <img class="h-14" src="../assets/icon-game-2.svg" alt="game2 image" />
        <p class="text-lg">Zapamti poziciju</p></router-link
      >
    </div>
    <h2 class="text-2xl font-bold">Dodatne opcije</h2>
    <div
      class="
        grid
        gap-8
        grid-rows-3
        align-top
        text-left
        md:grid-cols-2 md:grid-rows-2
      "
    >
      <div class="flex flex-col gap-4 row-start-1 md:row-span-2">
        <p class="text-lg">Broj redova: {{ Math.floor(gameSettings.rows) }}</p>
        <input
          v-model="gameSettings.rows"
          class="w-full"
          type="range"
          min="3"
          step="1.5"
          max="6"
          @input="changeRows($event)"
        />
        <p class="text-lg">Broj kolona: {{ gameSettings.columns }}</p>
        <input
          v-model="gameSettings.columns"
          class="w-full"
          type="range"
          min="4"
          max="6"
          @input="changeColumns($event)"
        />
      </div>
      <div>
        <p class="mb-3 text-lg">Tema kartica:</p>
        <div class="flex gap-2 h-20">
          <input
            v-for="design in obverseDesigns"
            :key="design"
            v-model="gameSettings.obverseDesign"
            type="radio"
            name="card-design"
            :value="design.name"
            :style="{ '--bg-image': 'url(' + design.image + ')' }"
            class="ratio-narrow"
            @input="changeObverseDesign(design.name)"
          />
        </div>
      </div>
      <div>
        <p class="mb-3 text-lg">Dizajn pozadine:</p>
        <div class="flex gap-2 h-20">
          <input
            v-for="design in reverseDesigns"
            :key="design"
            :checked="design.name == gameSettings.reverseDesign"
            type="radio"
            name="back-design"
            :value="design.name"
            :style="{ '--bg-image': 'url(' + design.image + ')' }"
            class="ratio-narrow"
            @input="changeReverseDesign(design.name)"
          />
        </div>
      </div>
    </div>
    <a
      class="text-gray-700"
      target="_blank"
      href="https://www.vecteezy.com/free-vector/playing-cards"
      >Cards back designs inspired by Vecteezy</a
    >
  </form>
</template>

<style lang="postcss" scoped>
img {
  object-fit: cover;
}
input[type='radio'] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* For iOS < 15 */
  background-color: var(--form-background);
  /* Not removed via appearance */
  @apply opacity-60;
  background-image: var(--bg-image);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  outline-offset: 1px;
  outline: 2px;
}

input[type='radio']:checked {
  @apply opacity-100;
  outline-style: solid;
  outline-color: magenta;
}
input[type='radio']:hover {
  @apply opacity-100;
}
</style>
