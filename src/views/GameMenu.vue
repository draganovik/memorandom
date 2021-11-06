<template>
  <main class="home">
    <GamePicker class="game-picker" />
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
<style lang="postcss" scoped>
main {
  padding: 10vh 0;
}
</style>
