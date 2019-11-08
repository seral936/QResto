<template>

	<nav role="navigation">
  <div id="menuToggle">
   
    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
   
    <ul id="menu">
      <li><router-link to="/serveur/commandesEnCours">Commandes en cours</router-link></li>
	     <li><router-link to="/serveur/appels">appels</router-link></li>
   
    </ul>
  </div>
</nav>
</template>

<script>
	
</script>
<style scoped>

a{
  text-decoration: none;
  color: #ededed;
  transition: color 0.3s ease;
}
/*a:hover{
  color: tomato;
}*/
#menuToggle{
  display: block;
  position: relative;
  top: 50px;
  left: 50px;
  z-index: 1;
      width: 37px;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input{
  display: block;
    width: 35px;
    height: 25px;
    position: absolute;
    top: -4px;
    left: -4px;
  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #A68565;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2){
  transform-origin: 0% 100%;
}


#menuToggle input:checked ~ span{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #ededed;
}

#menuToggle input:checked ~ span:nth-last-child(3){
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2){
  transform: rotate(-45deg) translate(0, -1px);
}

#menu{
     position: absolute;
    top: 4rem;
        width: 270px;
    margin: -84px 0 0 -70px;
    padding: 20px;
    padding-top: 70px;
  background: #424242;
  opacity: .7;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(-120%, 0);
  transition: transform 0.7s cubic-bezier(0.77,0.2,0.05,1.0);


 -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: 1px solid;
  -webkit-border-radius: 0 50px 50px 0 / 0 50px 50px;
  border-radius: 0 50px 50px 0 / 0 50px 50px;
 
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
 
  -webkit-box-shadow: 4px 4px 6px 1px rgba(0,0,0,0.4) ;
  box-shadow: 4px 4px 6px 1px rgba(0,0,0,0.4) ;
}
#menu li{
  padding: 10px 0;
      font-size: 35px;
}
#menuToggle input:checked ~ ul{
  transform: none;
}
	
</style>