<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import GameMemory from '../js/GameMemory'
const store = useStore()
const settings = computed(() => store.state.gameData)

let testGame = ref(new GameMemory(settings.value))

let timeElapsed = ref('0:0')

let flipedCards = []

let gameTimer = (countDownDate) => {
  setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime()

    // Find the distance between now and the count down date
    var distance = now - countDownDate

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Output the result in an element with id="demo"
    timeElapsed.value =
      (days > 0 ? days + ' : ' : '') +
      (hours > 0 ? hours + ' : ' : '') +
      minutes +
      ':' +
      seconds

    // If the count down is over, stop
    if (testGame.value.getGameState == 'running') {
      clearInterval(gameTimer)
    }
  }, 1000)
}

function CardClick(card) {
  if (testGame.value.getGameState() != 'running') {
    testGame.value.StartGame()
    gameTimer(Date.now())
  }
  if (testGame.value.getGameState() == 'running' && !card.faceUp) {
    card.faceUp = true
    if (card.faceUp) {
      flipedCards.push(card)
    }
    testGame.value.steps++
    if (flipedCards.length > 1) {
      setTimeout(function () {
        if (flipedCards.length > 1) {
          if (flipedCards[0].imageUrl == flipedCards[1].imageUrl) {
            //solvedCount.value++
          } else {
            flipedCards[0].faceUp = false
            flipedCards[1].faceUp = false
          }
          flipedCards.splice(0, 2)
        }
      }, 1200)
    }
  }
}
</script>

<template>
  <main class="play relative p-3 h-full">
    <section
      class="
        grid
        gap-4
        grid-cols-3 grid-rows-1
        h-12
        lg:absolute lg:grid-cols-1 lg:grid-rows-3 lg:h-auto
      "
    >
      <div>
        <button
          class="hover:bg-gray-700/70 rounded"
          @click="gameTimer(Date.now())"
        >
          <img src="../assets/icon-menu.svg" alt="menu" />
        </button>
      </div>
      <div class="text-center lg:text-left">
        <h1 class="text-gray-400">Vreme igre:</h1>
        <p class="text-2xl font-bold">{{ timeElapsed }}</p>
      </div>
      <div class="text-right lg:text-left">
        <h2 class="text-gray-400">Broj poteza:</h2>
        <p class="text-2xl font-bold">{{ testGame.steps }}</p>
      </div>
    </section>
    <section
      class="board grid gap-1 m-auto mt-8 p-2 lg:mt-20"
      :style="{
        gridTemplateColumns: 'repeat(' + settings.columns + ', 1fr)',
        maxWidth:
          'calc((90vh - 5.5rem) * ' +
          (settings.columns * 0.705) / settings.rows +
          ')'
      }"
    >
      <button
        v-for="card in testGame.getPlayingCards()"
        :key="card.id"
        class="flip-card hover:translate-x-1 hover:rotate-3"
        @click="CardClick(card)"
      >
        <div
          class="flip-card-inner ratio-narrow"
          :class="{ flip: card.faceUp }"
        >
          <img
            class="flip-card-reverse w-full"
            src="../assets/reverse/royal.png"
            alt="Zadnja strana"
          />
          <img
            class="flip-card-obverse"
            :src="card.imageUrl"
            alt="Prednja strana"
          />
        </div>
      </button>
    </section>
  </main>
</template>

<style lang="postcss">
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

.flip {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-reverse,
.flip-card-obverse {
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

/* Style the back side */
.flip-card-obverse {
  transform: rotateY(180deg);
}
</style>
