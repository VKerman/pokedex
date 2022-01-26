<template>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table class="table table-hover table-bordered table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">Pokedex Index</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(poke, index) in pokemon" :key="poke.id" @click="goToAbout(poke.url)">
          <th scope="row">{{(this.$store.state.page*20) + 1 + index}}</th>
          <th>{{ poke.name }}</th>
        </tr>
      </tbody>
    </table>
  </div>
  <a href="#" class="previous" @click="previousPage()">&laquo; Previous</a>
  <a href="#" class="next" @click="nextPage()">Next &raquo;</a>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      pokemon: []
    }
  },
  methods: {
    goToAbout (link) {
      this.$router.push({ name: 'about', params: { pokeLink: link.split('v2/pokemon/')[1] }, props: { pokeLink: link } })
    },
    nextPage () {
      this.$store.commit('increment')
      const axios = require('axios')
      axios.get('http://localhost:8899/' + this.$store.state.page).then(response => {
        this.pokemon = response.data.results
      })
    },
    previousPage () {
      if (this.$store.state.page > 0) {
        this.$store.commit('decrement')
        const axios = require('axios')
        axios.get('http://localhost:8899/' + this.$store.state.page).then(response => {
          this.pokemon = response.data.results
        })
      }
    }
  },
  mounted: function () {
    const axios = require('axios')
    axios.get('http://localhost:8899/' + this.$store.state.page).then(response => {
      this.pokemon = response.data.results
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
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
#nav {
  color: #2c3e50;
}
</style>
