<template>
	<div>
		<el-table
		  :data="tableData"
		  style="width: 100%">
		  <el-table-column  v-for="(item) in tableColumn"
		  :key="item.index"
		    :prop="item.prop"
		    :label="item.label"
		    width="180">
			 <template slot-scope="scope">
				<expandDom v-if="item.render"
				:render="item.render"
				:index="scope.$index"
				:column="item"
				:row="scope.row"
				>
				</expandDom>
				<span v-else>
					
					{{scope.row[item.prop]}}
				</span>
			</template> 
		  </el-table-column>
		</el-table>
	</div>
</template>

<script>
	import expandDom from "./expandDom.vue"
	export default{
		// render函数渲染组件
		components:{
			expandDom
		},
		
		props:{
			tableData:{
				type:Array,
				default:()=>[]
			},
			tableColumn:{
				type:Array,
				default:()=>[]
			},
			isHander:{
				type:Boolean,
				defualt:false
			}
		}
		
		
	}
</script>

<style>
</style>