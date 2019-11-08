<template>
	<div>
		<navCuisine></navCuisine><br>
    <h1>Liste des commandes</h1>

    <div class="cmds">

      <div class="ticketCmd" v-for="laCommande in lesCommandes"  >

        <h2>Commande Tables :  {{laCommande.id_table}}</h2>

        <p id="test"></p>
        <br>
        <p>{{laCommande.produits }}</p>
        <br>
        <h3>Commentaire : </h3>
        <br>
        <p><span class="comm">{{laCommande.commentaire}}</span></p>
        <br><br>


         <span onclick="this.parentNode.style.display = 'none';"> <button>Commande prête</button></span>


        <h5>{{laCommande.date}}</h5>


      </div><br>

    </div>

  </div>
</div>

</div>
</div>
</template>

<script>
  import axios from 'axios';
  import navCuisine from '../partials/navCuisine.vue';
  export default{
    components: {
      navCuisine: navCuisine
    },

    data(){
      return{

        lesCommandes: null,


        // entrees : null,
        // plats : null,
        // desserts : null,
        // boissons : null,
        // id_table : null,
        // prix : null,
        // res : null,
        // commentaire: null,
        // test: null


      }

    },
    methods:{
      getCommandes(){
        axios.get('http://localhost:3000/getCommandes')
        .then((res) => {

         res = res.data

         this.lesCommandes = res
               })
      },
    },
    created(){
      this.getCommandes()


    },
  }
</script>
<style scoped>

@media only screen and (min-device-width : 1025px) and (max-device-width : 1280px) {


.cmds{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


}
.comm{
  color: orangered;
}
.ticketCmd{
  padding: 20px;
  width: 60%;
  height: 100%;
  margin-bottom: 2rem;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: 5px solid #A68565;
  -webkit-border-radius: 0 50px;
  border-radius: 0 50px;
  background: #E8DBC6;
  -webkit-box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4) ;
  box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4) ;



}

h1{
font-size: 60px;
  margin-bottom: 20px;
}
h3{
  font-size: 45px;
}
h2{
  font-size: 45px;
  color: orangered;
}
h5{
  font-size: 25px;

}

p{
  font-size: 43px;
}
a{ font-size: 1.5rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}


button{

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  cursor: pointer;
  margin: 0 auto;
  margin: 10px;
  padding: 10px;
  border: 2px solid #424242;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
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


.cmds{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;


}
.comm{
  color: orangered;
}
.ticketCmd{
  padding: 20px;
  width: 60%;
  height: 100%;
  margin-bottom: 2rem;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: 5px solid #A68565;
  -webkit-border-radius: 0 50px;
  border-radius: 0 50px;
  background: #E8DBC6;
  -webkit-box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4) ;
  box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4) ;



}

h1{
font-size: 60px;
  margin-bottom: 20px;
}
h3{
  font-size: 45px;
}
h2{
  font-size: 45px;
  color: orangered;
}
h5{
  font-size: 25px;

}

p{
  font-size: 43px;
}
a{ font-size: 1.5rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}


button{

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;

  cursor: pointer;
  margin: 0 auto;
  margin: 10px;
  padding: 10px;
  border: 2px solid #424242;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
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
