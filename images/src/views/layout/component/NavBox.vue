<template>
	<div>
		<el-button type="danger" @click="loginOut">退出登录</el-button>
		<div>
			用户名：{{getUserName}}
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			loginOut(){	
				localStorage.removeItem("token");
				this.$router.push({
					path:"/login"
				})
			}
		},
		computed:{
			getUserName(){
				return this.$store.getters.getUserName
			}
		}
	}
</script>

<style>
</style>