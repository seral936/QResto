import Home from './components/Home.vue';


// PARTIE CLIENT
import laCarte from './components/client/laCarte.vue';
import Confirmation from './components/client/ConfimationCommande.vue';
import AppelServeur from './components/client/AppelServeur.vue';
import politesse from './components/client/politesse.vue';

// PARTIE CUISINE

import Cuisine from './components/cuisine/Cuisine.vue';
import AppelServeurEnCuisine from './components/cuisine/AppelServeurEnCuisine.vue';
import ListeDesCourses from './components/cuisine/ListeDesCourses.vue';

// PARTIE SERVEUR
import Serveur from './components/serveur/Serveur.vue';
import appels from './components/serveur/appelsDuClient.vue';
import commandesEnCours from './components/serveur/commandesEnCours.vue';

// PARTIE GERANT
import Gerant from './components/gerant/Gerant.vue';
import CarteGerant from './components/gerant/CarteGerant.vue';
import CommandeEnCours from './components/gerant/CommandeEnCours.vue';
import Liste from './components/gerant/Liste.vue';



export const routes = [
{path: '*', redirect: '/' },
{path: '/', component: Home },



// PARTIE CLIENT
{path: '/table/:id/laCarte',name: 'laCarte' ,component: laCarte },
{path: '/table/:id/laCarte/call',name: 'call', component: AppelServeur },
{path: '/table/:id/laCarte/confirmation',name: 'confirme', component: Confirmation },
{path: '/table/:id/laCarte/politesse',name: 'politesse', component: politesse },

// PARTIE CUISINE
{path: '/cuisine',name:'cuisine',component: Cuisine },
{path: '/cuisine/call', component: AppelServeurEnCuisine },
{path: '/cuisine/courses', component: ListeDesCourses },

// PARTIE SERVEUR
{path: '/serveur', component: Serveur },
{path: '/serveur/commandesEnCours',name: 'cmd', component: commandesEnCours },
{path: '/serveur/appels', component: appels },

// PARTIE GERANT
{path: '/gerant', component: Gerant },
{path: '/gerant/carte', component: CarteGerant },
{path: '/gerant/lesCommandes', component: CommandeEnCours },
{path: '/gerant/Liste', component: Liste },
]
