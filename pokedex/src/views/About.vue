<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
  <a v-if="pokemon.id > 1" @click="previousPoke()">Previous pokemon</a>
  <a @click="nextPoke()">Next pokemon</a>
  <div class="about">
    <h1>This is a page about {{ pokemon.name }}</h1>
    <!-- basic info table -->
    <table class="table table-bordered" style="width: 50%">
      <thead>
        <tr>
          <th scope="col" style="width: 15%">Pokedex ID</th>
          <th scope="col">Name</th>
          <th scope="col">Sprite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ pokemon.id }}</td>
          <td>{{ pokemon.name }}</td>
          <td><img :src=" this.sprites['front_default'] " alt=""></td>
        </tr>
        <tr>
          <td>Types</td>
          <td colspan="2">
            <div style="display:inline-block; float: none" class="col-sm-10" v-for="type in pokemon.types" :key="type">{{ type.type.name }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Stats table -->
    <h2>Stats</h2>
    <table class="table table-bordered" style="width: 50%">
      <thead>
        <tr>
          <th>Stat name</th>
          <th>Stat value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>height</td>
          <td>{{ (pokemon.height / 10).toString() + ' m' }}</td> <!-- height is given in decimeters, hence why it is divided by 10. Converted to string to preserve the floating point -->
        </tr>
        <tr>
          <td>weight</td>
          <td>{{ (pokemon.weight / 10).toString() + ' kg' }}</td> <!-- weight is given in decagrams, hence why it is divided by 10. Converted to string to preserve the floating point -->
        </tr>
        <tr v-for="base in pokemon.stats" :key="base">
          <td>{{ base.stat.name }}</td>
          <td>{{ base.base_stat }}</td>
        </tr>
      </tbody>
    </table>
    <!-- Moves Table -->
    <h2>Moves</h2>
    <table class="table table-bordered" style="width: 50%">
      <thead>
        <tr>
          <th>Moves</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="move in moves" :key="move">
          <td>{{ move.move.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      url: this.$route.params.pokeUrl,
      pokemon: [],
      sprites: [],
      types: [],
      moves: []
    }
  },
  watch: {
    '$route.params.pokeLink' (newLink, oldLink) {
      this.load(newLink)
    }
  },
  methods: {
    nextPoke () {
      this.$router.push({ name: 'about', params: { pokeLink: this.pokemon.id + 1 }, props: { pokeLink: this.pokemon.id + 1 } })
    },
    previousPoke () {
      this.$router.push({ name: 'about', params: { pokeLink: this.pokemon.id - 1 }, props: { pokeLink: this.pokemon.id - 1 } })
    },
    load (link) {
      const axios = require('axios')
      axios.get('http://localhost:8899/pokemon/' + link).then(response => {
        // Added sprites array, because sometimes it fail to load the image without it (not sure why)
        this.pokemon = response.data
        this.sprites = response.data.sprites
        this.types = response.data.types
        this.moves = response.data.moves
      })
    }
  },
  mounted: function () {
    this.load(this.$route.params.pokeLink)
  }
}
</script>

<style scoped>
table {
  margin: auto;
}
td {
  font-size: 25px;
  margin-top: 50px;
  vertical-align: middle !important;
}
th {
  font-size: 20px;
  margin-top: 50px;
  vertical-align: middle !important;
}
tr {
  margin: auto;
  vertical-align: middle !important;
}
a {
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  color: #42b983;
}
a:hover {
  background-color: #ddd;
  color: black;
}
</style>
