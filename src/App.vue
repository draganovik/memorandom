<template>
  <router-view></router-view>
</template>

<style lang="postcss">
* {
  accent-color: magenta;
}
html body {
  font-family: Rubik, Helvetica, -apple-system, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('~@/assets/pattern.svg');
  background-repeat: repeat;
  @apply h-screen dark:text-gray-200 text-gray-800 bg-gray-50 dark:bg-gray-800;
}
</style>
