<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import GameMemory from '../js/GameMemory'
const store = useStore()

const settings = computed(() => store.state.gameData)

let testGame = new GameMemory(settings.value)
</script>

<template>
  <main class="play">
    <button class="hover:bg-gray-700/70 left-0 top-0 rounded">
      <img src="../assets/icon-menu.svg" alt="menu" />
    </button>
    <section>
      <ul class="board grid grid-cols-6 m-auto">
        <button
          v-for="card in testGame.getCards()"
          :key="card"
          class="flip-card hover:translate-x-1 hover:rotate-3"
          :bind="card"
        >
          <div class="flip-card-inner ratio-narrow">
            <img
              class="flip-card-reverse"
              src="../assets/reverse/royal.png"
              alt=""
            />
            <img class="flip-card-obverse" :src="card" alt="" />
          </div>
        </button>
      </ul>
    </section>
  </main>
</template>

<style lang="postcss">
.play {
  padding: min(2vh, 2vw);
}
.board {
  max-height: min(80vh, 80vw);
  max-width: min(80vh, 80vw);
  @apply gap-2 md:gap-3;
}
.board,
.board * {
  transition-duration: 300ms;
}
.flip-card {
  background-color: transparent;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  height: fit-content;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card:hover .flip-card-obverse {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-reverse,
.flip-card-obverse {
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the back side */
.flip-card-obverse {
  transform: rotateY(180deg);
}
</style>
