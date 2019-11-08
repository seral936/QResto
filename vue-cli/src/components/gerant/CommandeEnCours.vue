

<template>
  <div>
    <navGerant></navGerant><br>
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


          <button @click="annulCmd(laCommande.id , $event)">annuler la commande</button></span>


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
 import navGerant from '../partials/navGerant.vue';
  export default{
    components: {
      navGerant: navGerant
    },
    data(){
      return{

        lesCommandes: null,

        entrees : null,
        plats : null,
        desserts : null,
        boissons : null,
        id_table : null,
        prix : null,
        res : null,
        commentaire: null,
        idCmd: null,







      }

    },
    methods:{
      getCommandes(){
        axios.get('http://localhost:3000/getCommandes')
        .then((res) => {

         res = res.data

         console.log(res)


         this.lesCommandes = res

               })
      },
      annulCmd(id,event){
        var id;
        event.preventDefault()
        axios.delete('http://localhost:3000/annulerCmd',{data: {id:id}})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      },
    },
    created(){
      this.getCommandes()

    },
  }
</script>
<style scoped>
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

  margin-bottom: 20px;
}
h3{
  font-size: 38px;
}
h2{
  font-size: 38px;
  color: orangered;
}

p{
  font-size: 25px;
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

</style>
