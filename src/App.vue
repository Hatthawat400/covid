<template>
  <div id="app">
      <img alt="logo" src="./assets/covid1.png">
    
    <HelloWorld msg=""/>

    <covid />
  </div> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import covid from './components/covid.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    covid,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
body{
 background-image: url("./assets/CV1.1.jpg");
 background-attachment: fixed;
 background-position: center;
 background-repeat: no-repeat;
 background-size: 100%;
}


</style>
