<template>
  <div class="choices">
    <!-- {{ getRandomDog() }} - {{ rightDog }} - {{ getRandomDog() }} -->
    <button class="choices--button" v-for="item in this.fill_n_sort" :key="item">
      {{ item }}
    </button>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import axios from "axios";
// axios.defaults.baseURL = "https://dog.ceo/api/";

export default {
  name: "DogChooser",
  data() {
    return {
      list: ["1", "2", "3"],
    };
  },
  props: {
    dificulty: {
      type: String,
      required: true,
    },
    rightDog: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["dogs"]),
    fill_n_sort() {
      var list = [];
      list.push(this.rightDog);
      while (list.length < 3){
        let randomDog = this.getRandomDog();
        if(!list.includes(randomDog))list.push(randomDog);
        // list.push(this.getRandomDog() + "-");
      }
      list.sort(() => Math.random() - 0.5);
      return list;
    },
  },
  methods: {
    getRandomDog() {
      var DogsSize = this.$store.state.dogs.length - 1;
      var rand = Math.floor(Math.random() * DogsSize);
      return this.$store.state.dogs[rand];
    },
  },
  created() {
    // this.$store.dispatch("loadDogs");
    this.fill_n_sort;
  },
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.choices {
  display: flex;
  flex-flow: wrap column;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  height: 150px;
  border-radius: 20px;
  background: $secondary-dark-1;
  box-shadow: 0.5em 0.5em $secondary-shadow-light;
  margin: 20px;
}
.choices--button {
  width: 260px;
  height: 35px;
  border-radius: 20px;
  font-weight: 700;
  color: $primary;
  background: $primary;
  border-radius: 20px;
  color: $secondary-dark-1;
  font-size: 15px;
  box-shadow: inset 0 -2px $primary-shadow-light;
  transition: 1s;
}
.choices--button:hover {
  cursor: pointer;
  background: inherit;
  border: 1px solid $primary;
  box-shadow: 0 0;
  color: $primary;
}
</style>