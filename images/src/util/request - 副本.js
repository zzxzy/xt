import axios from "axios";
// console.log(process.env.VUE_APP_baseURL);
axios.defaults.baseURL=process.env.VUE_APP_baseURL

axios.interceptors.request.use(config=>{
	return config;
},error=>{
	return Promise.reject(error);
})


axios.interceptors.response.use(response=>{
	return response;
},error=>{
	return Promise.reject(error);	
})


// 封装get post 的方法
export function get(url,data={}){
	return new Promise((resolve,reject)=>{
		axios.get(url,{params:data}).then(res=>{
			resolve(res);
		}).catch(err=>{
			reject(err);
		})
	})	
}

//post请求
export function post(url,data={}){
	return new Promise((resolve,reject)=>{
		axios.post(url,data).then(res=>{
			resolve(res);
		}).catch(err=>{
			reject(err);
		})
	})	
}



