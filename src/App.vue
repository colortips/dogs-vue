<template>
  <div id="nav" class="navbar">
    <router-link class="navbar--link" to="/">Dogs list</router-link> |
    <router-link class="navbar--link" to="/guess">Guess the dog</router-link>
    <!-- |<router-link class="navbar--link" to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<style lang="scss">
@import "./scss/_variables.scss";
// ---- reset ----
* {
  vertical-align: baseline;
  font-weight: inherit;
  font-family: inherit;
  font-style: inherit;
  font-size: 100%;
  border: 0 none;
  outline: 0;
  padding: 0;
  margin: 0;
  text-decoration: none;
}

body,
html,
#app {
  height: 100%;
  width: 100%;
}
body {
  // position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: $bg;
  font-family: $nunito;
  color: $primary;
  // font-family: "Red Hat Text";
  // font-size: 14px;
  // font-weight: 700;
  // background: linear-gradient($very-dark, $dark) no-repeat;
  // background: linear-gradient($dark, $primary-red);
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background: $primary;
  border-radius: 0 0 50px 50px;
}
.router-link-exact-active {
  border-radius: 10px;
  border: solid $bg;
}
.navbar--link {
  color: $bg !important;

  padding: 10px;
  letter-spacing: 2px;
  font-size: 30px;
  font-weight: 700;
}
.navbar--link:hover {
  text-decoration: underline;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 770px) {
  .navbar {
    height: 50px;
    border-radius: 0;
    box-shadow: inset 0 -3px $primary-dark-4;
  }
  .navbar--link {
    font-size: 15px;
    padding: 5px;
  }
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
// color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
