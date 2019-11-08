<template>
	<div>
		<h1>Appels en Salle</h1>
		<navServeur></navServeur>
    <div class="ctn">

        <br>
      <div class="clear" @click="clearLocalStorage"><h2>Effacer les appels</h2></div>
      <div class="liste">
       <ul v-for="call in waitercCalls">
        <li> Table : {{call.id}} {{call.msg}}</li>
       </ul>


      </div>
      <br>
    </div>
  </div>


</template>

<script>
	import navServeur from '../partials/navServer.vue';
  export default{
  	data(){
  		return{
        localstored : null,


      }
    },
    components: {
      navServeur
    },
    methods:{

     clearLocalStorage() {
    localStorage.clear();
},
loadPage(){

  const xhr = new XMLHttpRequest();

},

    },
    computed: {

     waitercCalls(){


      const stored = this.$store.getters["getWaiterCalls"];
      const localstored = JSON.parse(window.localStorage.getItem("appel"));
      // console.log("stored", stored)

      // console.log("localstored", Object.values(localstored))
              return stored && stored.length ? stored : localstored; // si le srore existe et a une len, il est retourné, sinon il prend le localstorage... à affiner si tu veux afficher le localstorage ET les données du store

            }

          },
          created(){

}
}


</script>
<style scoped>

a{ font-size: 1.5rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}
a:hover{
  color: tomato;
}
h1{
      font-size: 50px;
    margin-top: 30px;

}

ul:nth-child(odd) {
  background: #424242;
  color: #E8DBC6;

}
li{
      list-style: none;
      font-size: 35px;
    margin-top: 6px;
}

.ctn{
      margin-top: 60px;
      align-items: center;
    display: flex;
    flex-direction: column;

}
div.clear{
      display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 10%;
    height: 30px;
    margin-bottom: 2rem;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    border: 5px solid #A68565;
    -webkit-border-radius: 0 50px;
    border-radius: 0 50px;
    background: #E8DBC6;
    -webkit-box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4);
    box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4);

}

div.clear:active {
    border: 2px solid #A68565;
    background: #424242;
    color: #E8DCC7;
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none;
  }


div.liste{
       display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 70%;
    height: 100%;
    margin-bottom: 2rem;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    border: 5px solid #A68565;
    -webkit-border-radius: 0 50px;
    border-radius: 0 50px;
    background: #E8DBC6;
    -webkit-box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4);
    box-shadow: 3px 3px 4px 0 rgba(0,0,0,0.4);
}



</style>
