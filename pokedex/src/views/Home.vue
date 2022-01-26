<template>
  <div class="home">
    <img alt="Poke logo" src="../assets/PokeLogo.png">
    <HelloWorld msg="Welcome to a Pokedex app"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
img {
  max-height: 200px;
  max-width: 200px;
}
</style>
