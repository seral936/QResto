<template>
	<div class="ctn">

		<h1>QResto</h1>

		<div class="partie1">
			<div class="ctnNav">
				<app-nav></app-nav>
			</div>
		</div>
		<div class="ctn_carte">
			<div class="titreEtNom">
				<h2>Entrées</h2>

				<div class="produit" v-for="(entree, n) in entrees" :key="entree.nom">
				<p>{{entree.nom}}..........{{entree.prix}} €</p>
					<input class="inputNum" type="number" name="" min="1" max="10"
					v-model="entrees[n].qty">

				</div>

				<h2>Plats</h2>
				<div class="produit"  v-for="(plat, n) in plats" :key="plat.nom">
					<p>{{plat.nom}}..........{{plat.prix}} €</p>
					<input class="inputNum" type="number" name="" min="1" max="10"
					v-model="plats[n].qty">

				</div>

				<h2>Desserts</h2>
				<div class="produit"  v-for="(dessert, n) in desserts" :key="dessert.nom">
					<p>{{dessert.nom}}......{{dessert.prix}} €</p>
					<input class="inputNum" type="number" name="" min="1" max="10"
					v-model="desserts[n].qty">

				</div>

				<h2>Boissons</h2>
				<div class="produit"  v-for="(boisson, n) in boissons" :key="boisson.nom">
					<p>{{boisson.nom}}......{{boisson.prix}} €</p>
					<input class="inputNum" type="number" name="" min="1" max="10"
					v-model="boissons[n].qty">
				</div>
			</div>
		</div>
		<br><br>

			<h3>table : {{id}}</h3><br>
		<button type="" @click="checkpapy()">Valider votre commande</button>
	</div>
</template>
<script>
	import nav from '../partials/navClient.vue';
	import axios from 'axios';
	import {eventBus} from '../../main.js';
	export default{
		components: {
			appNav: nav,

		},
		data(){
			return {
				plats:[],
				boissons:[],
				entrees:[],
				desserts:[],
				id: this.$route.params.id

			}
		},
		created(){
			this.getEntrees(),
			this.getPlats(),
			this.getBoissons(),
			this.getDesserts(),
			this.getIdTable()



		},
		methods: {


			checkpapy(){
				const cats = ["plats", "boissons", "entrees", "desserts"]; //devrait venir de la bdd
				const res = {};
				const id = this.id;
				var tabNom = [];
				var total = 0;
				var ordered = null

				cats.forEach(cat => {
					 ordered = this[cat].filter(item => {
						if (item.qty) {
							tabNom.push(item.nom)
							total += item.qty * item.prix
							return item
						}
					});
					if (ordered.length) res[cat] = ordered;
				})

				total = total.toFixed(2)

				if (!Object.keys(res).length)

				return;

				// pas de commande si pas de produit choisis


				var resOK = JSON.stringify(res)

			window.localStorage.setItem('total',total)
				window.localStorage.setItem('id', id)
				window.localStorage.setItem('resOK', resOK)


		this.$router.push({name: 'confirme', params: {total,resOK,id}})

			},
			getPlats(){
				axios.get('http://localhost:3000/plat')
				.then((res) => {
					this.plats = res.data
				})
			},
			getBoissons(){
				axios.get('http://localhost:3000/boisson')
				.then((res) => {
					this.boissons = res.data
					//console.log(res.data)
				})
			},
			getEntrees(){
				axios.get('http://localhost:3000/entree')
				.then((res) => {
					this.entrees = res.data
					//console.log(res.data)
				})
			},
			getDesserts(){
				axios.get('http://localhost:3000/dessert')
				.then((res) => {
					this.desserts = res.data
					//console.log(res.data)
				})
			},
			getIdTable(){
				axios.get('http://localhost:3000/IdTable/:id')
				.then((res) => {
					// this.tables = res.data
					console.log(res.data)
				})
			}
		}
	}

</script>

<style scoped>


@media only screen and (min-device-width : 1025px) and (max-device-width : 1280px) {


	div.produit{
		    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
	}
	h1{
		font-size: 50px;
	}

	h2{
		font-size: 90px;
		color: orangered;
	}
	h3{
		font-size: 50px;
		color: orangered;
	}
	p{
		font-size: 40px;

	}
	.ctn{

		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;

	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		    height: 50px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;
		position: fixed;
		z-index: 10;

	}
	.ctn_carte{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;

	}
	.titreEtNom{
		width: 75%;
		height: 100%;

	}
	.inputNum{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 45px;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-left: 35px;
		margin-top: 12px;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 100px;
		padding: 20px;
		border: 2px solid #424242;
		-webkit-border-radius: 40px;
		border-radius: 40px;
		font-family: 'Dancing Script', cursive;
		font-size: 40px;
		color: #424242;
		text-align: center;
		-o-text-overflow: clip;
		text-overflow: clip;
		letter-spacing: 1px;
		background: rgba(0,0,0,0);
		-webkit-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-moz-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-o-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
	}
	button:active {
		border: 2px solid #A68565;
		background: #424242;
		color: #E8DCC7;
		-webkit-transition: none;
		-moz-transition: none;
		-o-transition: none;
		transition: none;
	}
	.total{
		color: orangered;
	}

}


@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {



	div.produit{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px;
	}

	h2{
		font-size: 70px;
		color: orangered;
	}
	h3{
		font-size: 50px;
		color: orangered;
	}
	p{
		font-size: 30px;;

	}
	.ctn{

		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;


	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		    height: 50px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;
		position: fixed;
		z-index: 10;

	}


	.ctn_carte{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;

	}
	.titreEtNom{

		width: 75%;
		height:100%;
	}
	.inputNum{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 45px;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-left: 35px;
		margin-top: 12px;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 100px;
		padding: 20px;
		border: 2px solid #424242;
		-webkit-border-radius: 40px;
		border-radius: 40px;
		font-family: 'Dancing Script', cursive;
		font-size: 35px;
		color: #424242;
		text-align: center;
		-o-text-overflow: clip;
		text-overflow: clip;
		letter-spacing: 1px;
		background: rgba(0,0,0,0);
		-webkit-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-moz-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-o-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
	}
	button:active {
		border: 2px solid #A68565;
		background: #424242;
		color: #E8DCC7;
		-webkit-transition: none;
		-moz-transition: none;
		-o-transition: none;
		transition: none;
	}
	.total{
		color: orangered;
	}


}

@media only screen and (min-device-width : 425px) and (max-device-width : 767px) {


	div.produit{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px;
	}

	h2{
		font-size: 50px;
		color: orangered;
	}
	h3{
		font-size: 38px;
		color: orangered;
	}
	p{
		font-size: 20px;

	}
	.ctn{

		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;


	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		    height: 50px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;
		position: fixed;
		z-index: 10;

	}
	.ctn_carte{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;

	}
	.titreEtNom{

		width: 60%;
		height:100%;
	}
	.inputNum{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 45px;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-left: 35px;
		margin-top: 12px;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 100px;
		padding: 10px;
		border: 2px solid #424242;
		-webkit-border-radius: 40px;
		border-radius: 40px;
		font-family: 'Dancing Script', cursive;
		font-size: 25px;
		color: #424242;
		text-align: center;
		-o-text-overflow: clip;
		text-overflow: clip;
		letter-spacing: 1px;
		background: rgba(0,0,0,0);
		-webkit-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-moz-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-o-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
	}
	button:active {
		border: 2px solid #A68565;
		background: #424242;
		color: #E8DCC7;
		-webkit-transition: none;
		-moz-transition: none;
		-o-transition: none;
		transition: none;
	}
	.total{
		color: orangered;
	}



}

@media only screen and (min-device-width : 320px) and (max-device-width : 424px) {


	div.produit{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px;
	}


	h2{
		font-size: 35px;
		color: orangered;
	}
	h3{
		font-size: 38px;
		color: orangered;
	}
	p{
		font-size: 17px;

	}
	.ctn{

		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 100%;


	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		    height: 50px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;
		position: fixed;
		z-index: 10;

	}
	.ctn_carte{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;

	}
	.titreEtNom{

		    width: 70%;
		height:100%;
	}
	.inputNum{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 45px;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-left: 35px;
		margin-top: 12px;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
		margin-top: 12px;
	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 50px;
		    padding: 10px;
    border: 2px solid #424242;
    -webkit-border-radius: 40px;
    border-radius: 40px;
    font-family: 'Dancing Script', cursive;
    font-size: 20px;
		color: #424242;
		text-align: center;
		-o-text-overflow: clip;
		text-overflow: clip;
		letter-spacing: 1px;
		background: rgba(0,0,0,0);
		-webkit-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-moz-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		-o-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
		transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
	}
	button:active {
		border: 2px solid #A68565;
		background: #424242;
		color: #E8DCC7;
		-webkit-transition: none;
		-moz-transition: none;
		-o-transition: none;
		transition: none;
	}
	.total{
		color: orangered;
	}


}
</style>
