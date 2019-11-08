<template>
	<div>


   <h2>Pour quelles raison appelez vous le Serveur ?</h2>


    <div>
    <input v-model='appel.msg' type="radio" id="contactChoice1 "
     name="contact" value="Appel de la table : Soucis avec une commande" >
    <label for="contactChoice1">Soucis avec ma commande</label>
    <br>
    <input v-model='appel.msg' type="radio" id="contactChoice3"
     name="contact" value= "Appel de la table   : L'addition s'il vous plaît">
    <label for="contactChoice2">Demander l'addition</label>
    <br>
     <input v-model='appel.msg' type="radio" id="contactChoice4"
     name="contact" value= "Appel de la table   : Autres">
    <label for="contactChoice2">Autres</label>
    <br>
    <br>
    <button @click="appelServeur">Appeler le Serveur</button>
  </div>
  <hr>
  <!-- <router-link to="/table/:id/laCarte">Revenir sur la Carte du Restaurant</router-link> -->
  <p><span class="link" @click="retourCarte()">Revenir sur la Carte du Restaurant</span> <br></p>

</div>

</template>

<script>

  export default{
    data(){
      return{
        appel: {

          msg: null,
          id: this.$route.params.id,

        },




      }
    },
    methods :{
      appelServeur(){


        this.$store.commit("pushWaiterCalls", {
          id: this.appel.id,
          msg: this.appel.msg
        })

        let appelsLocaux = JSON.parse(localStorage.getItem('appel'));
        if (!appelsLocaux) appelsLocaux = [];

        const storedWaiterCalls = this.$store.getters["getWaiterCalls"]

        storedWaiterCalls.forEach(call => {
          appelsLocaux.push(call)
        });

				alert("Nous avons informé le serveur veuillez patienter svp ")

      localStorage.setItem('appel', JSON.stringify(appelsLocaux));



      },
       retourCarte(){

      this.$router.push({name: 'laCarte' })
     },
     // retourConfirm(){
		 //
     //  this.$router.push({name: 'confirme' })
     // }


    }
  }

</script>
<style scoped>

@media only screen and (min-device-width : 1025px) and (max-device-width : 1280px){

  a{ font-size: 3.5rem;
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

  input{
    width: 20px;
  }
  label{
    font-size: 50px;
  }
  h2{
    font-size: 90px;
  }
  .link{
        font-size: 30px;
        color: orangered;
  }


}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px){

  a{ font-size: 1.5rem;
    text-decoration: none;
    color: #424242;
    transition: color 0.3s ease;
  }
/*a:hover{
  color: tomato;
  }*/



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

  input{
    width: 20px;
  }
  label{
    font-size: 50px;
  }
  h2{
    font-size: 70px;
  }
  .link{
        font-size: 30px;
        color: orangered;
  }


}
@media only screen and (min-device-width : 580px) and (max-device-width : 767px){


  a{ font-size: 2.5rem;
    text-decoration: none;
    color: #424242;
    transition: color 0.3s ease;
  }
/*a:hover{
  color: tomato;
  }*/



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
    font-size: 30px;
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

  input{
    width: 20px;
  }
  label{
    font-size: 35px;
  }
  h2{
    font-size: 50px;
  }
  .link{
        font-size: 30px;
        color: orangered;
  }


}
@media only screen and (min-device-width : 425px) and (max-device-width : 579px){

  a{

    font-size: 1.4rem;
    text-decoration: none;
    color: #424242;
    transition: color 0.3s ease;
  }
/*a:hover{
  color: tomato;
  }*/


  button{

    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    cursor: pointer;
    margin: 0 auto;
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
  input{
    width: 20px;
  }
  label{
    font-size: 25px;
  }
  h2{
    font-size: 30px;
  }
   .link{
        font-size: 30px;
        color: orangered;
  }

  button:active {
   font-size: 25px;
   margin: 30px;
   border: 2px solid #A68565;
   background: #424242;
   color: #E8DCC7;
   -webkit-transition: none;
   -moz-transition: none;
   -o-transition: none;
   transition: none;
 }
 button{
  font-size: 30px;
  margin: 30px;
}
}
@media only screen and (min-device-width : 320px) and (max-device-width : 424px){






  a{

    font-size: 1.4rem;
    text-decoration: none;
    color: #424242;
    transition: color 0.3s ease;
  }
/*a:hover{
  color: tomato;
  }*/


  button{

    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    cursor: pointer;
    margin: 0 auto;
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
  input{
    width: 20px;
  }
  label{
    font-size: 25px;
  }
  h2{
    font-size: 30px;
  }
   .link{
        font-size: 20px;
        color: orangered;
  }

  button:active {
   font-size: 25px;
   margin: 30px;
   border: 2px solid #A68565;
   background: #424242;
   color: #E8DCC7;
   -webkit-transition: none;
   -moz-transition: none;
   -o-transition: none;
   transition: none;
 }
 button{
  font-size: 30px;
  margin: 30px;
}




}


</style>
