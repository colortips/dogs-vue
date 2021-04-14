<template>
  <div class="guess">
    <div class="guess--gametab">Score : {{score}}</div>
    <!-- <select v-model="selected">
    <option v-for="dog in dogs" :key="dog" :value="{ text: dog }">
      {{ dog }}
    </option>
  </select> -->
    <img
      class="guess--image"
      id="guess"
      ref="guess"
      :src="getImage(getRandomDog())"
      alt="random dog"
      width="280"
    /><br />
    <DogChooser :difficulty="1" :rightDog="this.guess" @event-play="play"/>
  </div>
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
      score: 0,
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
    play(payload){
        console.log("Received : " + payload.difficulty + " & " + payload.answer);
        if(payload.answer === this.guess) this.score += payload.difficulty;
        else this.score = 0;
    }
  },
  components: {
    DogChooser,
  },
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
.guess {
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  margin-top: 9px;
}
.guess--gametab {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 50px;
  border-radius: 20px;
  background: $secondary-dark-1;
  box-shadow: 0.5em 0.5em $secondary-shadow-light;
  font-weight: 700;
  font-size: 15px;
}
.guess--image {
  margin-top: 20px;
  width: auto;
  height: auto;
  max-width: 300px;
  max-height: 250px;
  border-radius: 20px;
}
</style>