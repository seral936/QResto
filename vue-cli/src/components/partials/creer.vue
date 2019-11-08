<template>

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

  <button @click="onSubmit($event)" class="btnCreer" id="btnEnvoi"  type="Submit">Creer </button>
        </form>

	
  <div>
  </div>

</template>

<script>
	
</script>
<style>

</style>