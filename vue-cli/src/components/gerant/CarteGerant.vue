<template>
	<div>
		<h1>La carte actuelle </h1>


    <div class="navEtCrudPlus">
      
      <navGerant></navGerant>

      <form  class="crudPlus">

        <p class="titreCrudPlus">Entrer vos produits</p>
        
        <select  v-model="post.table"  class="select" name="tables"  id="inpTable">
          <option value="entree">entree</option>
          <option value="plat">Plat</option>
          <option value="dessert">dessert</option>
          <option value="boisson">boisson</option>
          
          
          
        </select>



        <input v-model="post.nom"  class="log" id="inpNom input " type="text" placeholder="Nom du produit">

        <input v-model="post.prix" class="log" id="inpPrix input " type="number" placeholder="Prix du produit">
        <input v-model="post.description" class="log" id="inpDescr input " type="text" placeholder="Description du produit">

        <button @click="onSubmit($event)" class="btnCreer" id="btnEnvoi"  type="Submit">Creer </button><br>

        <p class="titreCrudPlus">Supprimer vos produits</p>

        <select  v-model="supp.suppTable"  class="select" name="tables"  id="inpTable">
          <option value="entree">entree</option>
          <option value="plat">Plat</option>
          <option value="dessert">dessert</option>
          <option value="boisson">boisson</option>
          
          
          
        </select>

        
        <input v-model="supp.id" class="log" id="inpPrix input " type="number" placeholder="Id du produit">
        <button @click="onSubmitDelete($event)" class="btnCreer" id="btnEnvoi"  type="Submit">Supp</button>
      </form>

      


    </div>

    

    <div class="ctn_carte">

      <div class="titreEtNom">
        <div class="titre_btn" >
          <h2>Entrées</h2>
          
          
          
        </div>
        <div v-for="(entree) in entrees" :key="entree.nom">
          <p>{{entree.id}}.{{entree.nom}}..........{{entree.prix}} €</p>
          
        </div>
        <div class="titre_btn" >
          <h2>Plats</h2> 
          
        </div>
        <div v-for="(plat) in plats" :key="plat.nom">
          <p>{{plat.id}}.{{plat.nom}}..........{{plat.prix}} €</p>

        </div>
        <div class="titre_btn" >
          <h2>Desserts</h2> 
          
        </div>
        <div v-for="(dessert) in desserts" :key="dessert.nom">
          <p>{{dessert.id}}.{{dessert.nom}}..........{{dessert.prix}} €</p>
          
        </div>
        <div class="titre_btn" >
          <h2>Boissons</h2> 
          
        </div>
        <div v-for="(boisson) in boissons" :key="boisson.nom">
          <p>{{boisson.id}}.{{boisson.nom}}..........{{boisson.prix}} €</p>


        </div>
      </div>
    </div>

    <router-link to="/">Revenir a l'accueil</router-link>
  </div>

</template>

<script>
  import navGerant from '../partials/navGerant.vue';
  import axios from 'axios';
  
  export default{
    components: {
      navGerant: navGerant
    },
    data(){
      return {

        id:[],
        plats:[],
        boissons:[],
        entrees:[],
        desserts:[],

        post:{
          table: '',
          nom: '',
          prix: '',
          description: ''
        },

        supp:{
         
          id: '',
          suppTable:''

        }


      }
    },
    created(){
      
      this.getEntrees(),
      this.getPlats()
      this.getBoissons()
      this.getDesserts()
    },
    methods: {

      getPlats(){
        axios.get('http://localhost:3000/plat')
        .then((res) => {
          this.plats = res.data
          console.log(res.data)
        })
      },
      getBoissons(){
        axios.get('http://localhost:3000/boisson')
        .then((res) => {
          this.boissons = res.data
          console.log(res.data)
        })
      },
      getEntrees(){
        axios.get('http://localhost:3000/entree')
        .then((res) => {
          this.entrees = res.data
          console.log(res.data)
        })
      },
      getDesserts(){
        axios.get('http://localhost:3000/dessert')
        .then((res) => {
          this.desserts = res.data
          console.log(res.data)
        })
      },
      onSubmit(evt){
        evt.preventDefault()
        

        console.log(this.post)

        axios.post('http://localhost:3000/post',{table:this.post.table, nom:this.post.nom, prix:this.post.prix, description:this.post.description})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      },
      onSubmitDelete(evt){
        evt.preventDefault()
        

        console.log( "la table : " + this.supp.suppTable + " ,id: "+ this.supp.id)

        axios.delete('http://localhost:3000/delete',{data: {table:this.supp.suppTable, id:this.supp.id}})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      }
    }
  }
  
  


  

</script>
<style scoped>





.navEtCrudPlus{
  position: fixed;
     width: 245px;
  height: 560px;

}
.titreCrudPlus{
 color: #A68565;
 font-size: 40px;

}

form.crudPlus{


       width: 245px;
      height: 600px;
  background-color: #424242;
  z-index: 10;
  border: 5px solid #A68565;
  -webkit-border-radius: 0 50px;
  border-radius: 0 50px;
  padding: 10px;
  padding: 10px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  
  

}

.input{
 border: 2px solid #A68565;
 color: #424242;
 margin-top: 10px;
 

 
}
.log{
  width: 90%;
    height: 30px;
        font-size: 20px;
    text-align: center;

}
.select{
  border: 2px solid #A68565;
  color: #424242;
      width: 50%;
    height: 30px;
  
}
.btnCreer{
 border: 2px solid #A68565;
     width: 50%;
    height: 40px;
      font-family: 'Dancing Script', cursive;
    font-size: 25px;
    color: #434343;


}


img.btnPlus{
  margin-top: 45px;
  margin-left: 45px;


}

div.titre_btn{
  display: flex;
  flex-direction: column;
  
  align-items: center;


}


div.produit{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h1{
      font-size: 60px;
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
  font-size: 35px;
  
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
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
      margin-top: 100px;
  
}
.titreEtNom{

  width: 50%;
  height:100%;
  margin-bottom: 30px;
}
a{ font-size: 1.5rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}
a:hover{
  color: tomato;
}



</style>