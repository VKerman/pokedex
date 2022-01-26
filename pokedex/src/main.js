import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      page: 0,
      pokemon: '1/'
    }
  },
  mutations: {
    increment (state) {
      state.page++
    },
    decrement (state) {
      state.page--
    },
    setPokemon (state, n) {
      state.pokemon = n
    }
  }
})

createApp(App).use(VueAxios, axios).use(router).use(store).mount('#app')
