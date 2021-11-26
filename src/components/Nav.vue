<template>
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/blog" >Blog</router-link>
      <router-link to="/css" >CSS</router-link>
      <router-link to="/dies" >Dies</router-link>
      <router-link to="/das" >Das</router-link>
      <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
    name: "Nav",
}
</script>

<style>

</style>

<style scoped>
#nav {
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: #eee;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background: #ddd;
  display: inline-block;
}
</style>