<template>
  <div class="dogsContainer">
    <DogCard
      v-for="dog in dogs"
      :key="dog"
      :title="dog"
    />
    <!-- <select v-model="selected">
    <option
      v-for="dog in dogs"
      :key="dog"
      :value="{ text: dog }"
    >
      {{ dog }}
    </option>
  </select> -->
    <!-- <div v-for="dog in dogs" :key="dog">
      {{ dog }}
      <img
        :id="dog"
        :ref="dog"
        :src="getImage(dog)"
        alt="dog"
        width="400"
        @click="getImage(dog)"
      />
    </div> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
axios.defaults.baseURL = "https://dog.ceo/api/";

import DogCard from "../components/DogCard.vue";

export default {
  name: "Dogs",
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    ...mapState(["dogs"]),
    // getImage(dogName) {
    //   var getImage = "";
    //   console.log("getImage Init: " +dogName)
    //   if(dogName !== "undefined"){
    //     axios
    //     .get("breed/"+dogName+"/images/random")
    //     // .then((response) => (this.info = response.message));
    //     .then(result => {
    //       // this.$refs['dog_img'].src = result.data.message;
    //       getImage = result.data.message;
    //     }).catch(error => {
    //       throw new Error(`API ${error}`);
    //     });
    //     // console.log("getImage processed: " +axios)
    //   }
    //   return getImage;
    // },
  },
  created() {
    this.$store.dispatch("loadDogs");
  },
  methods: {
    getImage(dogName) {
      var dogsrc = dogName;
      if (dogName.includes(" "))
        dogsrc = dogName.split(" ")[1] + "/" + dogName.split(" ")[0];
      console.log("getImage Init: " + dogName);
      if (dogName !== "undefined") {
        axios
          .get("breed/" + dogsrc + "/images/random")
          // .then((response) => (this.info = response.message));
          .then((result) => {
            // this.$refs['dog_img'].src = result.data.message;
            this.$refs[dogName].src = result.data.message;
          })
          .catch((error) => {
            throw new Error(`API ${error}`);
          });
        // console.log("getImage processed: " +axios)
      }
    },
    // changeImage(){
    //   console.log("getimage for: "+ this.selected.text + " is " + this.getImage(this.selected.text));
    //   this.$refs['dog_img'].src = this.getImage(this.selected.text);
    // }
  },
  components:{
    DogCard,
  }
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.dogsContainer{
  display: flex;
  flex-flow: wrap;
  height: 90vh;
  justify-content: center;
}
</style>