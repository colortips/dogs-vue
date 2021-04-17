<template>
  <div class="DogModal">
    <div class="DogModal--title">
      <span>{{ title }}</span>
      <div class="DogModal--button" @click="closeModal" @keyup="OnEscapePress">x</div>
    </div>
    <div class="DogModal--carousel">
      <agile>
        <div v-for="item in images" :key="item" class="slide">
          <img :src="item" :alt="title" class="carousel--image" />
        </div>
      </agile>
    </div>
  </div>
</template>
<script>
import { VueAgile } from "vue-agile";
export default {
  name: "DogModal",
  data() {
    return {
      slider: "",
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      resuired: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("event-closeModal");
    },
  },
  components: {
    agile: VueAgile,
  },
  created(){
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        this.closeModal();
      }
    });
  }
};
// // Carousel
// // const slider = document.querySelector(".gallery");
// const slider = this.slider;
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const SCROLL_SPEED = 3;
//   const walk = (x - startX) * SCROLL_SPEED;
//   slider.scrollLeft = scrollLeft - walk;
// });
</script>
<style lang="scss">
@import "../scss/_variables.scss";
.DogModal {
  z-index: 99;
  top: 0;
  display: flex;
  max-width: 1000px;
  width: 1000px;
  min-width: 320px;
  height: 80%;
  background: $secondary-dark-1;
  box-shadow: 0.5em 0.5em 0.5em $secondary-shadow-dark;
  border-radius: 20px;
  flex-flow: nowrap column;
}
.DogModal--title {
  display: flex;
  justify-self: flex-start;
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
.DogModal--carousel,
.agile__slide {
  flex-grow: 1;
  margin: 10px 0;
}
.agile {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 100%;
}
.agile__slide {
  display: flex;
  justify-content: center;
}
.carousel--image {
  height: auto;
  width: auto;
  max-height: 500px;
  max-width: 100%;
  border-radius: 10px;
  transform: scale(0.5, 0.5) rotate(10deg);
  transition: 1s;
    box-shadow: 0.5em 0.5em 0.5em $secondary-shadow-light;
}
.DogModal--button {
  position: absolute;
  top: 60px;
  font-weight: 700;
  align-self: center;
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: $primary;
  border-radius: 50%;
  color: $secondary-dark-1;
  font-size: 30px;
  transition: 1s;
}
.DogModal--button:hover {
  cursor: pointer;
  background: transparent;
  top: 60px;
  box-shadow: 0 0;
  color: $primary;
  transform: rotate(360deg);
}
.agile__actions {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  margin: 10px 0;
}
.agile__nav-button {
  width: 150px;
  background: $primary;
  border-radius: 20px;
  margin: 10px;
  color: $secondary-dark-1;
  font-size: 20px;
  box-shadow: inset 0 -2px $primary-shadow-light;
}
.agile__nav-button:hover {
  cursor: pointer;
  background: inherit;
  border: 1px solid $primary;
  box-shadow: 0 0;
  color: $primary;
}
.agile__slide--active img{
  transform: scale(1, 1) rotate(0deg);
}
.agile__slide--active img:active{
  transform: scale(0.9, 0.9) rotate(5deg);
}
@media only screen and (min-device-width: 0px) and (max-device-width: 500px) {
  .DogModal {
    width: 320px;
  }
}
@media only screen and (min-device-width: 500px) and (max-device-width: 1000px) {
  .DogModal {
    width: 450px;
  }
}
@media only screen and (min-device-height: 0px) and (max-device-height: 700px) {
  .carousel--image {
    max-height: 300px;
  }
}
@media only screen and (min-device-height: 700px) and (max-device-height: 800px) {
  .carousel--image {
    max-height: 400px;
  }
}

</style>
// // https://codepen.io/aybukeceylan/pen/RwrRPoO
// // https://codepen.io/fredericrous/pen/xxVXJYX