<template>
  <div class="choices">
    <!-- {{ getRandomDog() }} - {{ rightDog }} - {{ getRandomDog() }} -->
  </div>
  <button class="choice--button" v-for="item in this.list" :key="item">
    {{ item }}
  </button>
</template>
<script>
import { mapState } from "vuex";
// import axios from "axios";
// axios.defaults.baseURL = "https://dog.ceo/api/";

export default {
  name: "DogChooser",
  data() {
    return {
      list: [],
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
    list: {
      type: Array,
    },
  },
  computed: {
    ...mapState(["dogs"]),
    fill_n_sort() {
      this.list.push(this.getRandomDog());
      this.list.push(this.getRandomDog());
      this.list.push(this.guess);
      this.list.sort(() => Math.random() - 0.5);
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
.choice {
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-between;
  width: 280px;
  height: 150;
  border-radius: 20px;
  background: $secondary-dark-1;
  box-shadow: 0.5em 0.5em $secondary-shadow-light;
  margin: 20px;
}
</style>