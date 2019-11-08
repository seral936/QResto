<template>
	<div>
  <h2>Pour quelles raison appelez vous le Serveur ?</h2>
  <div>
    <input v-model='appeleCuisine' type="radio" id="contactChoice1 "
     name="contact" value="Appel en cuisine : Soucis avec une commande">
    <label for="contactChoice1">Soucis avec une commande</label>
<br>
    <input v-model='appeleCuisine' type="radio" id="contactChoice2"
     name="contact" value="Appel en cuisine : Raison non Spécifiée">
    <label for="contactChoice2">Autres</label>

  </div>
  <div>
    <br>
    <button @click="appelServeur()">Envoyer</button>
  </div>



  <hr>
  <router-link to="/cuisine">Revenir sur la liste des commandes</router-link>

</div>

</template>

<script>
import push from 'push.js'
  export default{
    data(){
      return{

        appeleCuisine : null

      }
    },
    methods:{
      appelServeur(){

        var appeleCuisine = this.appeleCuisine


//         Push.create(" NOTIFICATION ", {
//         body: "Un appel provenant de la cuisine",
//         icon: 'QResto.png',
//         timeout: 5000,
//         onClick: function () {
//         window.focus();
//         this.close();
//     }
// });


        window.localStorage.setItem('appeleCuisine',appeleCuisine)
        this.$router.push({name: 'cuisine'})
      }

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
    font-size: 90px;
  }


}
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px){

  a{ font-size: 3.5rem;
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
