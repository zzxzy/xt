import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex);
import getters from "./getters"
import user from "./modules/user.js"
import createPersistedState from "vuex-persistedstate";


const store=new Vuex.Store({
	modules:{
		user
	},
	getters,
	plugins:[
		createPersistedState({
			key:'userInfo',
			paths:['user']
		})
	]
	
})

export default store;