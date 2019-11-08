import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{

		 // appel:{

      //   id: this.$route.params.id,
  //       msg: null,

    //  },
  	waiterCalls: [],


		total : 0,
		tabNom : []


	}, 
	mutations:{
		pushWaiterCalls(state, callinfos){
			state.waiterCalls.push(callinfos);
		},
		setTotal(state,newValue){
			state.total = newValue
		},
		setTotal(state,newValue){
			state.tabNom = newValue
		} 
	},
	getters:{
		getTotal(state){
			return state.total
		} ,
		getTabNom(state){
			return state.tabNom
		},
		getWaiterCalls(state) {
			return state.waiterCalls

		}
	}

});