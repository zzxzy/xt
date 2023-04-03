<template>
	<div>
		{{name}}
		{{age}}
		
		{{sayhi}}
		
		<button @click="changeName">改变minxins中的name</button>
		
		<div class="block">
					<span class="demonstration">完整功能</span>
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
						:current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
						layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</div>
	</div>
</template>

<script>
	import minxins from "@/plugins/minxins.js"
	export default{
		mixins:[minxins],
		data(){
			return {
				
			}
			
		},
		created(){
			console.log("组件中的created");
			// this.sayhello()
		},
		mounted(){
			console.log("组件中的mounted");
		},
		methods:{
		
			sayhello(){
				console.log("组件中的sayhello")
			},
			changeName(){
				console.log(this.name);
				this.name="jill";
			}
		}
	}
</script>

<style>
</style>