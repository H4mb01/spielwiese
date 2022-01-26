<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
  import Nav from "./components/Nav.vue"

  export default {
    name: "App",
    components: {
      Nav
    }
  }
</script>

<style>
html, body {
  margin: 0;

}

/* Farbpalette: */
:root {
  --clr-text: #2c3e50;
}

h1, h2, h3, h4, h5, h6 {
  text-align: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--clr-text);
  padding-top: 50px;
}

</style>
