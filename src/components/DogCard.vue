<template>
  <div class="card">
    <h1 class="card--title">{{ title }}</h1>
    <img
      :id="title"
      :ref="title"
      :src="getImage(title)"
      :alt="title"
      class="card--image"
      @click="getImage(title)"
    />
    <button class="card--button" @click="showModal(title)">
      <span>See more</span>
    </button>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.baseURL = "https://dog.ceo/api/";
export default {
  name: "DogCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  methods: {
    getImage(dogName) {
      var dogsrc = dogName;
      if (dogName.includes(" "))
        dogsrc = dogName.split(" ")[1] + "/" + dogName.split(" ")[0];
      // console.log("getImage Init: " + dogName);
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
    showModal(dogName) {
      var dogsrc = dogName;
      if (dogName.includes(" "))
        dogsrc = dogName.split(" ")[1] + "/" + dogName.split(" ")[0];
      if (dogName !== "undefined") {
         axios
          .get("breed/" + dogsrc + "/images")
          // .then((response) => (this.info = response.message));
          .then((result) => {
            // this.$refs['dog_img'].src = result.data.message;
            this.$emit("event-showModal", { dogName: dogName, images: result.data.message });
          })
          .catch((error) => {
            throw new Error(`API ${error}`);
          });
      }
      
    },
  },
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";

.card {
  display: flex;
  flex-flow: nowrap column;
  justify-content: space-between;
  width: 280px;
  height: 400px;
  border-radius: 20px;
  background: $secondary-dark-1;
  box-shadow: 0.5em 0.5em $secondary-shadow-light;
  margin: 20px;
}
.card--title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $nunito;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 30px;
  width: 100%;
  height: 100px;
  background: $secondary-dark-2;
  border-radius: 20px 20px 0 0;
  box-shadow: inset 0 -5px $secondary;
  color: $text-dark;
}
.card--image {
  align-self: center;
  height: auto;
  width: auto;
  max-height: 180px;
  max-width: 240px;
  border-radius: 10px;
}
.card--button {
  content: "Comming soon";
  font-weight: 700;
  align-self: center;
  justify-self: flex-end;
  width: 80%;
  height: 60px;
  background: $primary;
  border-radius: 20px;
  margin: 10px;
  color: $secondary-dark-1;
  font-size: 20px;
  box-shadow: inset 0 -2px $primary-shadow-light;
  transition: 1s;
}
.card--button:hover {
  cursor: pointer;
  background: inherit;
  border: 1px solid $primary;
  box-shadow: 0 0;
  color: $primary;
}
.card--button:hover span {
  display: none;
}
.card--button:hover:before {
  content: "Coming soon";
}
</style>