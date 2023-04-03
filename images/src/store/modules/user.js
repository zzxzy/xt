import {loginByUserInfo} from "@/api/user.js"


const user={
	namespaced:true,
	state:{
		token:"",
		username:""
	},
	mutations:{
		SET_TOKEN(state,payload){
			state.token=payload;
		},
		SET_USERNAME(state,payload){
			state.username=payload;
		}
	},
	actions:{
		loginByUserInfo({commit},payload){
			return new Promise((resolve,reject)=>{
				loginByUserInfo(payload).then(res=>{
					var {token,username}=res.data.data;
					
					commit("SET_TOKEN",token);
					commit("SET_USERNAME",username);
					 resolve();
					
				})
			})
		}
	}
}

export default user;