<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import GameMemoryAdvanced from '../js/GameMemoryAdvanced'

const store = useStore()
const settings = computed(() => store.state.gameSettings)
const isSolved = computed(() => {
  return solvedCount.value == gameLogic.value._cards.length
})

let gameLogic = ref(new GameMemoryAdvanced(settings.value))
let timeElapsed = ref('Nije početo')
let solvedCount = ref(0)

function Restart() {
  gameLogic.value = new GameMemoryAdvanced(settings.value)
  timeElapsed.value = 'Nije početo'
  solvedCount.value = 0
}
function CardClick(card) {
  if (!card.faceUp) {
    if (gameLogic.value.getGameState() != 'running') {
      // Starts the game and flips forst card
      gameLogic.value.StartGame()
      card.faceUp = true
      gameTimer(Date.now())
    } else if (gameLogic.value.getGameState() == 'running') {
      card.faceUp = true
      gameLogic.value.steps++
      setTimeout(function () {
        if (card.imageUrl == gameLogic.value.getMainCard().imageUrl) {
          // If flipped card matches main card, mark it as found and increment counter
          solvedCount.value++
          card.found = true
          if (isSolved.value) {
            // Game is compleated
            gameLogic.value.EndGame()
          }
          // Select new main card
          gameLogic.value.setMainCard()
        } else {
          // Card is not the same as main, flip it back
          card.faceUp = false
        }
      }, 1200)
    }
  }
}
function gameTimer(countDownDate) {
  let timer = setInterval(function () {
    // Get start date and time
    var now = new Date().getTime()

    // Find the distance between start time and now
    var distance = now - countDownDate

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Save result
    timeElapsed.value =
      (days > 0 ? days + 'd ' : '') +
      (hours > 0 ? hours + 'h ' : '') +
      (minutes > 0 ? minutes + 'm ' : '') +
      seconds +
      's'

    // If the game is over, stop
    if (gameLogic.value.getGameState() == 'ended') {
      clearInterval(timer)
    }
  }, 1000)
}
</script>

<template>
  <main class="play relative p-3 h-screen">
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
        <router-link to="/">
          <img
            class="hover:bg-gray-700/70 h-full rounded"
            src="../assets/icon-menu.svg"
            alt="menu"
          />
        </router-link>
      </div>
      <div class="text-center lg:text-left">
        <h1 class="text-gray-400">Vreme igre:</h1>
        <p class="text-2xl font-bold">{{ timeElapsed }}</p>
      </div>
      <div class="text-right lg:text-left">
        <h2 class="text-gray-400">Broj poteza:</h2>
        <p class="text-2xl font-bold">{{ gameLogic.steps }}</p>
      </div>
    </section>
    <div
      class="m-auto mt-8 p-2 text-center lg:mt-20"
      :style="{
        maxWidth:
          'calc((90vh - 5.5rem) * ' +
          (settings.columns * 0.705) / (settings.rows + 1) +
          ')'
      }"
    >
      <button
        :style="{
          width: 'calc(100%/' + settings.columns + ')'
        }"
        class="flip-card row-span-full hover:translate-x-1 hover:rotate-3"
        @click="CardClick(gameLogic.getMainCard())"
      >
        <div
          class="flip-card-inner ratio-narrow"
          :class="{ flip: gameLogic.getMainCard().faceUp }"
        >
          <img
            class="flip-card-reverse w-full"
            :src="gameLogic.getReverseURL()"
            alt="Zadnja strana"
          />
          <img
            class="flip-card-obverse"
            :src="gameLogic.getMainCard().imageUrl"
            alt="Prednja strana"
          />
        </div>
      </button>
      <section
        class="grid gap-1"
        :class="{ dimmed: isSolved }"
        :style="{
          gridTemplateColumns: 'repeat(' + settings.columns + ', 1fr)'
        }"
      >
        <button
          v-for="card in gameLogic.getPlayingCards()"
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
              :src="gameLogic.getReverseURL()"
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
    </div>
    <section
      v-if="isSolved"
      class="
        absolute
        left-1/2
        top-1/2
        flex flex-col
        gap-5
        justify-center
        p-8
        pt-10
        w-full
        h-full
        text-center
        bg-gray-800
        rounded
        opacity-95
        transform
        -translate-x-1/2 -translate-y-1/2
        md:max-w-2xl md:h-auto md:border md:border-green-700 md:opacity-100
      "
    >
      <p class="text-6xl">🎊 🥳 🎊</p>
      <h1 class="text-green-300 text-3xl font-bold">
        Uspeh, pronašli ste sve kartice!
      </h1>
      <p class="text-lg">
        Rešili ste tabelu <b>{{ settings.columns }}x{{ settings.rows }}</b>
        <br />
        za <b>{{ timeElapsed }}</b> sa <b>{{ gameLogic.steps }}</b> koraka
      </p>
      <div class="flex gap-4 mx-auto">
        <button class="button" @click="Restart()">NOVA IGRA</button>
        <router-link to="/" class="button"> POČETNI MENI</router-link>
      </div>
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
.dimmed {
  transition-duration: 200ms;
  filter: brightness(0.6);
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
