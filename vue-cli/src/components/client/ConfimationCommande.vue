<template>
	<div class="ctn">
		<div class="partie1">
			<div class="ctnNav">
				<app-nav></app-nav>
			</div>

		</div>		
		<div class="ctn_carte">
			<div class="titreEtNom">
				<br><br>	
				
				
				<h2>Entrées</h2>
				<div class="element" v-for="entr in entrees" :key="">
					<p>{{entr.nom}}    <span>x {{entr.qty}}</span> </p>

				</div>

				<h2>Plats</h2>

				<div class="element" v-for="pla in plats" :key="">
					<p>{{pla.nom}}    <span>x {{pla.qty}}</span> </p>

				</div>
				<h2>Desserts</h2>
				<div class="element" v-for="dess in desserts" :key="">
					<p>{{dess.nom}}    <span>x {{dess.qty}}</span> </p>

				</div>
				<h2>Boissons</h2>
				<div class="element" v-for="boiss in boissons" :key="">
					<p>{{boiss.nom}}    <span>x {{boiss.qty}}</span> </p>

				</div>
				<br><br>


				<textarea name="" placeholder="Ecrire a notre chef cuisinier" v-model="commentaire"></textarea>
				<br><br>
				<h3 >Prix total : {{prix}} €</h3>
				<br><br>
				<h3>Table : {{id}}</h3>
				<br><br>
				<button @click="envoiEnCuisine($event)"> Confirmer votre commande</button>
				<br>
				<p @click="retourCarte()">Revenir sur la Carte du Restaurant</p>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import appNav from '../partials/navClient.vue';
	import {eventBus} from '../../main.js';
	export default{
		data(){
			return {
				prix : null,
				nom: null,
				tabNom: [],
				facture: [],
				tab: null,
				id: this.$route.params.id,
				res : null,
				noms:[],


				entrees: null,
				plats: null,
				desserts: null,
				boissons: null,
				date: null,
				commentaire:null,
				
			}
		},
		methods:{
			envoiEnCuisine(evt){

				var id = this.id
				var tabNom = this.tabNom
				var prix = this.prix
				var noms = this.noms
				var res = this.res;
				var commentaire = this.commentaire
				var produits = []
				var date = new Date()
				this.date = date

							noms.forEach(items => {
								items.forEach(item =>{
									produits.push(item.nom +" x "+ item.qty )
							   })
							});
							produits = produits.toString()

						

							
							// var newchar = "\n \n"
							// var newchar = " -- "
							// produits = produits.split(',').join(newchar);

								// console.log(produits)
	
				 evt.preventDefault()

         axios.post('http://localhost:3000/envoiCommandes',{id:id, produits:produits, prix:prix ,date:date , commentaire:commentaire})
          .then(res => console.log(res)) 
          .catch(err => console.log(err))

         this.$router.push({name: 'politesse'})

     }
     ,
     retourCarte(){

     	this.$router.push({name: 'laCarte' })
     	// window.localStorage.setItem(id = this.$route.params.id)

     }
 },
 components:{
 	appNav
 },
 computed:{
 	total(){
 		return this.$store.getters.getTotal; 
 	}
 },
 created(){
 	const cats = ["plats", "boissons", "entrees", "desserts"]


 	this.prix = window.localStorage.getItem('total')
 	this.res = JSON.parse(window.localStorage.getItem('resOK'))

 	var res = this.res;

 	cats.forEach(cat => {
 		if (res[cat]) {
 			this[cat] = res[cat].map(item => item )

 			this.noms.push(this[cat])
 		}


 	});
			// console.log(this.noms, "this.noms")

		}
	}	
</script>
<style scoped>

@media only screen and (min-device-width : 1025px) and (max-device-width : 1280px) {


	a{ font-size: 1.5rem;
		text-decoration: none;
		color: #424242;
		transition: color 0.3s ease;
	}
	textarea{
		padding: 10px;
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		width: 60%;
		width: 80%;
		overflow: scroll;
		border: none;
		-webkit-border-radius: 15px;
		border-radius: 15px;
		font-family: 'Dancing Script', cursive;
		font-size: 40px;
		color: rgb(255, 69, 0);
		text-align: center;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
		-webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
	}
	h1{
		text-align: center;
	}
	span{
		color: orangered;
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
		height: 3%;

	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 140px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;  
		position: fixed;
		z-index: 10;
	}
	.ctn_carte{
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;	
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
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;

	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 50px;
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
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px){

	a{ 
		font-size: 1.4rem;
		text-decoration: none;
		color: #424242;
		transition: color 0.3s ease;
	}
	
	textarea{
		padding: 10px;
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		width: 60%;
		width: 80%;
		overflow: scroll;
		border: none;
		-webkit-border-radius: 15px;
		border-radius: 15px;
		font-family: 'Dancing Script', cursive;
		font-size: 40px;
		color: rgb(255, 69, 0);
		text-align: center;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
		-webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
	}
	h1{
		text-align: center;
	}
	h2{
		font-size: 70px;
		color: orangered;
	}
	h3{
		font-size: 38px;
		color: orangered;
	}
	p{
		font-size: 43px;	
	}
	span{
		color: orangered;
	}
	.ctn{

		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 3%;

	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 140px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;  
		position: fixed;
		z-index: 10;
	}
	.ctn_carte{
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;	
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
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;

	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 50px;
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
	

	
}

@media only screen and (min-device-width : 425px) and (max-device-width : 767px){
	a{ 
		font-size: 1.4rem;
		text-decoration: none;
		color: #424242;
		transition: color 0.3s ease;
	}
	
	textarea{
		padding: 10px;
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		width: 60%;
		width: 80%;
		overflow: scroll;
		border: none;
		-webkit-border-radius: 15px;
		border-radius: 15px;
		font-family: 'Dancing Script', cursive;
		font-size: 40px;
		color: rgb(255, 69, 0);
		text-align: center;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
		-webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
	}
	h1{
		text-align: center;
	}
	h2{
		font-size: 70px;
		color: orangered;
	}
	h3{
		font-size: 38px;
		color: orangered;
	}
	p{
		font-size: 43px;	
	}
	span{
		color: orangered;
	}
	.ctn{

		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 3%;

	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 140px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;  
		position: fixed;
		z-index: 10;
	}
	.ctn_carte{
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;	
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
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;

	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 50px;
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
	
	
}
@media only screen and (min-device-width : 320px) and (max-device-width : 424px){
	a{ font-size: 1.5rem;
		text-decoration: none;
		color: #424242;
		transition: color 0.3s ease;
	}
	textarea{
		padding: 10px;
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		width: 60%;
		height: 40px;
		overflow: scroll;
		border: none;
		-webkit-border-radius: 15px;
		border-radius: 15px;
		font-family: 'Dancing Script', cursive;
		font-size: 15px;
		color: rgb(255, 69, 0);
		text-align: center;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
		text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
		-webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		-o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
		transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
	}
	h1{
		text-align: center;
	}
	h2{
		font-size: 30px;
		color: orangered;
	}
	h3{
		font-size: 38px;
		color: orangered;
	}
	p{
		font-size: 17px;	
	}
	span{
		color: orangered;
	}
	.ctn{

		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 3%;

	}
	.partie1{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 140px;
	}
	.ctnNav{
		width: 14%;
		height: 7%;  
		position: fixed;
		z-index: 10;
	}
	.ctn_carte{
		width: 100%;
		height: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;	
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
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumFirst{
		margin-top: 5px;
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;
	}
	.inputNumLast{
		background-color: transparent;
		text-align: center;
		border: 1px solid #A68565;
		color: orangered;
		width: 20%;
		height: 30px;
		font-size: 20px;
		font-family: 'Dancing Script', cursive;

	}
	button{

		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 50px;
		padding: 20px;
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


