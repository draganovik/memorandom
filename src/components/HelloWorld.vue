<script setup>
import { useStore } from 'vuex'
import { ref, computed } from 'vue'
const store = useStore()

defineProps({
  msg: String
})

const count = ref(0)
const gameMode = computed(() => store.state.gameMode)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="font-bold">
    {{ gameMode }}
  </p>
</template>
