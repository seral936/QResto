<template>
	<div class="ctn">
		<h1>Liste des courses </h1>
		<navGerant></navGerant>
      <br>
<div class="ctn_ctnList" >
    <div class="list">
      <ul  v-for=" item in liste">
        <li>Liste {{item.id}}: {{item.liste}} <span @click="deleteList(item.id, $event)" class="close">x</span> </li>
      </ul>
      </div>
</div>


    <router-link to="/">Revenir a l'accueil</router-link>
	</div>


</template>

<script>
  import axios from 'axios';
		    import navGerant from '../partials/navGerant.vue';
  export default{
    data(){
      return{

        liste : [],

      }
    },
    methods:{

      getPlats(){
        axios.get('http://localhost:3000/getList')
        .then((res) => {
          this.liste = res.data
        })
				// setTimeout(getPlats,1000)
      },
			deleteList(id,event){
        var id;
        event.preventDefault()
        axios.delete('http://localhost:3000/deleteList',{data: {id:id}})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      },

    },
    components: {
      navGerant: navGerant
    },
    created(){
      this.getPlats()
    }



  }


</script>



<style scoped>

.close{
	color: red;
	font-family:fantasy;
}





h1{
      font-size: 60px;
}

ul:nth-child(odd) {
      background: #424242;
      color: #E8DBC6;
      width: 100%;

}
ul:nth-child(even) {
      background: #E8DBC6;
      color: #424242;
      width: 100%;

}
li{
  list-style: none;
  font-size: 30px;
  width: 100%

}


.list{
    padding: 20px;
    width: 75%;
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
a{ font-size: 3rem;
  text-decoration: none;
  color: #424242;
  transition: color 0.3s ease;
}
.ctn{
  display: flex;justify-content: center;
  flex-direction: column;
}
.ctn_ctnList{

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

}




</style>
