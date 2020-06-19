<template>
  <div id="app">
    <div id="nav">
      <router-link to="/BreakingBad">Learn about Breaking Bad characters</router-link> |
      <router-link to="/BreakingRandom">Random Quote</router-link> |
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: '/BreakingBad'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 75%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
}
body, html {
  background: #666;
  margin: 0;
  padding: 0;
}
</style>