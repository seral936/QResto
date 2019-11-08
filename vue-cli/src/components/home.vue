<template>
	<div>


		<h1>Home</h1>
		<app-nav></app-nav>
<br><br>
		<h1>Une erreur est survenue , veuillez informer le serveur ou le gérant</h1>

		   <!-- <p><span class="link" @click="retourCarte()">Revenir sur la Carte du Restaurant</span></p> -->
	</div>

</template>
<script>
  import nav from './partials/nav.vue';
  export default{
		data(){
			return {
				id: this.$route.params.id,
			}
		},
    components: {
      appNav: nav
    },
		methods:{
			retourCarte(){

		 this.$router.push({name: 'laCarte' })
		},

	},

  }

</script>
<style scoped>
h1{
	margin-top: 50px;
}

</style>
