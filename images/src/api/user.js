import request from "@/util/request.js"

export function loginByUserInfo(data) {

	return request({
		url: "/login",
		method: "post",
		data
	})

}

export function getMenuList(){
	return request({
		url:"/menus"
	})
	
}

export function getUserList(params){
	return request({
		url:"/users",
		params
	})
}

export function delUserList(id){
	return request({
		url:`users/${id}`,
		method:"delete"
	})
}


