<template>
	<div>
		<h1>Merci pour votre commande <br> nous vous souhaitons un agréable moment !!!</h1>
		<p class="link"  @click="retourCarte()">Revenir sur la Carte du Restaurant</p>
	</div>
</template>
<script>
export default{
	data(){
		return {
			id: this.$route.params.id,
		}
	},
	methods:{
		retourCarte(){
			var id = this.id
			this.$router.push({name: 'laCarte', params: {id}})
		},
	},
}
</script>
<style scoped>
h1{
	margin: 50px 0px;
}
.link{
	font-size: 30px;
	color: orangered;
}
a{ font-size: 1.5rem;
	text-decoration: none;
	color: #424242;
	transition: color 0.3s ease;
}

</style>
