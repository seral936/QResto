<template>
	<div>
		<h1>Serveur</h1>
		<navServeur></navServeur>

	
   
  

	</div>

	
</template>

<script>
		  import navServeur from '../partials/navServer.vue';
  export default{
    components: {
      navServeur
    }
  }
	
	
</script>
<style scoped>
a{ font-size: 1.5rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}
a:hover{
  color: tomato;
}
	
</style>