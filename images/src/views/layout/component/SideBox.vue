<template>
	<div>

		<el-row class="tac">
			<el-col :span="24">
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
					background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-submenu v-for="(item,index) in menulist" v-bind:key="item.id" :index="index+''">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{item.authName}}</span>
						</template>
						<el-menu-item v-for="(sub,ids) in item.children" v-bind:key="sub.id" :index="index+'-'+ids">
							 <router-link :to="sub.path">{{sub.authName}}</router-link>
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import {
		getMenuList
	} from "@/api/user.js"
	export default {
		data() {
			return {
				menulist: []
			}
		},
		created() {
			getMenuList().then(res => {
				console.log(res.data.data);
				this.menulist = res.data.data;
			})


		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}


	}
</script>

<style>
</style>
