<template>
	<div class="ctn">
		

   <h1>Effectuer la liste des courses</h1>
   <br>

   <textarea name="ListeDesCourses" placeholder="Veuillez saisir votre liste des courses" v-model="liste" ></textarea>
   <button @click="envoieListe($event)" type="">Valider</button>
   <hr>
   <router-link to="/cuisine">Revenir sur la liste des commandes</router-link>

 </div>

</template>

<script>
  import axios from 'axios';
  export default{
    data(){
      return{
        liste : null,
        date : null 

      }
    },
    methods:{
      envoieListe(evt){

          var liste = this.liste

          var date = this.date

          date = new Date()

         evt.preventDefault()

        axios.post('http://localhost:3000/envoieListe ',{liste :liste, date:date})
        .then(res => alert("Votre liste a bien était Enregistré et Envoyé "))
        .catch(err => alert("Une erreur c'est produite lors de l'enregistrement de da liste"))
        // .catch(err => console.log(err))

         this.$router.push({name: 'cuisine'})

        

      }

    }
  }
	
</script>
<style scoped>
.ctn{

 display: flex;
 flex-direction: column;

 align-items: center;
}
a{ font-size: 1.5rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}
/*a:hover{
  color: tomato;
  }*/

  textarea{
      width: 50%;
    height: 10rem;
    font-family: 'Dancing Script', cursive;
    color: #424242;
    font-size: 25px;
    text-align: center;
}
 


 button{

  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid #424242;
  -webkit-border-radius: 40px;
  border-radius: 40px;
  font-family: 'Dancing Script', cursive;
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
h1{
	
  font-size: 45px;

}
button{
  font-size: 30px;
  margin: 30px;
}
button:active {

  border: 2px solid #A68565;
  background: #424242;
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
}
</style>