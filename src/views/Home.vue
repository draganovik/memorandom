<template>
  <main class="home">
    <img class="m-auto" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
