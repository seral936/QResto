<template>
	<div>
		<h1>Gerant</h1>
		<navGerant></navGerant>
	</div>

	
</template>

<script>
		  import navGerant from '../partials/navGerant.vue';
      import Login from '../partials/Login.vue';
  export default{
    components: {
      navGerant: navGerant,
      Login:Login
    }
  }
	
</script>
<style scoped>
a{ font-size: 1.5rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}
/*a:hover{
  color: tomato;
}*/
	
</style>