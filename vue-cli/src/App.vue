<template>
  <div id="app">
    <!-- <h1 class="logo">QResto</h1> -->
     <router-view></router-view>
  

   <!--  <app-nav></app-nav> -->
   
  </div>
</template>

<script>
  import nav from './components/partials/nav.vue';
  export default{
    components: {
      appNav: nav
    }
  }

</script>

<style>
#app {
 font-family: 'Dancing Script', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424242;
 /* margin-top: 60px;*/

  
}
.logo{
  font-size: 5rem;
}

</style>
