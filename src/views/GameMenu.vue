<template>
  <main class="home">
    <GamePicker />
  </main>
</template>

<script>
// @ is an alias to /src
import GamePicker from '../components/GamePicker.vue'

export default {
  name: 'GameMenu',
  components: {
    GamePicker
  }
}
</script>
