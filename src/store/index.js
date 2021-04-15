import { createStore } from 'vuex'
// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(Vuex)
// Vue.use(VueAxios, axios)
// Vue.use(axios)

axios.defaults.baseURL = "https://dog.ceo/api/";

export default createStore({
  state: {
    dogs: [],
  },
  mutations: {
    SAVE_DOGS(state, dogs) {
      state.dogs = dogs;
    },
    GET_RANDOM_IMAGE(state, image) {
      state.image = image;
    },
  },
  actions: {
    loadDogs({ commit }) {
      // console.log("loadDogs");
      axios.get('breeds/list/all')
        .then(result => {
          var keys = [];
          for (var key in result.data.message) {            
            if(result.data.message[key][0] != null){
              for (let key2 in result.data.message[key]) {
              keys.push(result.data.message[key][key2] + " " + key);}
            }else{
              keys.push(key);
            }
          }
          commit('SAVE_DOGS', keys);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    getImage({ commit }, dogName) {
      console.log("getImage");
      axios.get('breed/'+dogName+'/images/random')
        .then(result => {
          commit('GET_RANDOM_IMAGE', result.data.message);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
  },
  modules: {
  }
})
