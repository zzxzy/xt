import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

import login from "@/views/login.vue"
import layout from "@/views/layout/layout"
import welcome from "@/views/main"
import user from "@/views/user"
import roleList from "@/views/role/roleList"
import roleA from "@/views/role/roleA"

import store from "@/store"


const routes = [{
		path: "/",
		redirect: "/login"
	},
	{
		path: "/login",
		component: login
	},
	{
		path:"/main",
		component:layout,
		redirect: "/welcome",
		children:[
			{path:"/welcome",component:welcome},
			{path:"/users",component:user},
			{path:"/roles",component:roleList},
			{path:"/rights",component:roleA}
		]
	}
]

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
// if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
// return originalPush.call(this, location).catch(err => err)
// }

const router = new VueRouter({
	routes,
	mode:"history"
})

const whiteList=['/login'];

router.beforeEach(function(to,from,next){
	// console.log(store.getters.getToken);
	// 判断有没有token（判断有没有登录）
	if(store.getters.getToken){
		// 登录了
		next();
	}else{
		// 没有登录
		// 只要是登录页面或者注册页面 就可以直接访问
		if(whiteList.indexOf(to.path)!==-1){
			next()
		}else{
			// 如果不是登录页面或者注册页面，重新跳转到登录页面
			next('/login');
		}	
	}
	// next();
})


export default router;
