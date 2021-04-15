<template>
  <div class="DogModal">
    <div class="DogModal--title">{{title}}</div>
    <div class="DogModal--carousel">
        <img v-for="item in images" :key="item" :src="item" :alt="title" class="carousel--image">
    </div>
    <div class="DogModal--button" @click="closeModal">Return</div>
  </div>
</template>
<script>
export default {
  name: "DogModal",
  props:{
      title:{
          type: String,
          required: true,
      },
      images:{
          type: Array,
          resuired: false,
      }
  },
  methods:{
      closeModal(){
          this.$emit('event-closeModal')
      }
  }
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.DogModal {
  z-index: 99;
  top: 0;
  display: flex;
  width: 400px;
  height: 80%;
  background: $secondary-dark-1;
  box-shadow: 0.5em 0.5em $secondary-shadow-light;
  border-radius: 20px;
  flex-flow: nowrap column;
  justify-content: space-between;
}
.DogModal--title {
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
.DogModal--carousel{
    display: flex;
    flex-flow: nowrap row;
    width: 100%;
    min-height: 300px;
    height: 100%;
    max-height: 600px;
}
.carousel--image{
  height: auto;
  width: auto;
  max-height: 300px;
  max-width: 100%;
}
.DogModal--button {
  font-weight: 700;
  align-self: center;
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
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
.DogModal--button:hover {
  cursor: pointer;
  background: inherit;
  border: 1px solid $primary;
  box-shadow: 0 0;
  color: $primary;
}
</style>