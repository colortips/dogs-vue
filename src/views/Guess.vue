<template>
  <!-- <select v-model="selected">
    <option v-for="dog in dogs" :key="dog" :value="{ text: dog }">
      {{ dog }}
    </option>
  </select> -->
  <img
    id="guess"
    ref="guess"
    :src="getImage(getRandomDog())"
    alt="random dog"
    width="280"
  /><br />
  <DogChooser :dificulty="'easy'" :rightDog="guess"/>
  <!-- {{ getImage(getRandomDog()) }} -->
  <!-- {{ getRandomDog() }} - {{ guess }} - {{ getRandomDog() }} -->
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
import DogChooser from "../components/DogChooser.vue";
axios.defaults.baseURL = "https://dog.ceo/api/";


// import DogCard from "../components/DogCard.vue";
export default {
  name: "Guess",
  data() {
    return {
      guess: "default",
      selected: "",
    };
  },
  computed: {
    ...mapState(["dogs"]),
  },
  created() {
    this.$store.dispatch("loadDogs");
  },
  methods: {
    getRandomDog() {
      var DogsSize = this.$store.state.dogs.length - 1;
      var rand = Math.floor(Math.random() * DogsSize);
      return this.$store.state.dogs[rand];
    },
    getImage(dogName) {
      if (dogName != "undefined") {
        this.guess = dogName;
        var dogsrc = dogName;
        if (dogName.includes(" "))
          dogsrc = dogName.split(" ")[1] + "/" + dogName.split(" ")[0];
        console.log("getImage Init: ???");
        axios
          .get("breed/" + dogsrc + "/images/random")
          // .then((response) => (this.info = response.message));
          .then((result) => {
            // this.$refs['dog_img'].src = result.data.message;
            this.$refs["guess"].src = result.data.message;
          })
          .catch((error) => {
            throw new Error(`API ${error}`);
          });
        // console.log("getImage processed: " +axios)
      }
    },
  },
  components:{
    DogChooser,
  }
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.comming-soon {
  margin-top: 100px;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
}
</style>