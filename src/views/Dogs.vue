<template>
  <div class="dogs">
    <div class="modalContainer" v-if="showModal == true">
      <DogModal
        :title="modalDog"
        :images="modalImages"
        @event-closeModal="event_closeModal"
      />
    </div>
    <div class="dogs--filter">
      <span>Search : </span>
      <input class="filter--search" type="search" v-model="search" />
    </div>
    <div class="dogsContainer">
      <DogCard
        v-for="dog in searchDog(dogs)"
        :key="dog"
        :title="dog"
        @event-showModal="event_showModal"
      />
    </div>
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
import DogModal from "../components/DogModal.vue";

export default {
  name: "Dogs",
  data() {
    return {
      selected: "",
      showModal: false,
      modalDog: "",
      modalImages: [],
      search: "",
      filteredDog: [],
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
    searchDog(dogs) {
      var searchDog = [];
      dogs.forEach((dog) => {
        // console.log("dog: "+ dog + " s: " + this.search);
        if (dog.includes(this.search.toLowerCase())) {
          // console.log("Find :" + dog);
          searchDog.push(dog);
        }
      });
      // console.log("Number of dogs in research: " + searchDog.length);
      return searchDog;
    },
    event_closeModal() {
      this.showModal = false;
    },
    event_showModal(payload) {
      this.showModal = true;
      this.modalDog = payload.dogName;
      this.modalImages = payload.images;
    },
    // changeImage(){
    //   console.log("getimage for: "+ this.selected.text + " is " + this.getImage(this.selected.text));
    //   this.$refs['dog_img'].src = this.getImage(this.selected.text);
    // }
  },
  components: {
    DogCard,
    DogModal,
  },
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.dogsContainer {
  display: flex;
  flex-flow: wrap;
  height: 90vh;
  justify-content: center;
}
.modalContainer {
  top: -50px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 100%;
  height: calc(100% + 50px);
}
.modalContainer::after {
  content: "";
  position: absolute;
  background: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
.dogs--filter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
}
.dogs--filter span {
  font-weight: 700;
  margin-right: 5px;
  font-size: 20px;
}
.filter--search {
  border: 1px solid $primary;
  border-radius: 10px;
  width: 200px;
  padding-left: 5px;
  color: $primary;
}
</style>