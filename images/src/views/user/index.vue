<template>
	<div>
		<TableSk :tableData="tableData" :tableColumn="tableColumn"></TableSk>

		{{name}}
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
	import {
		getUserList,
		delUserList
	} from "@/api/user.js"
	import minxins from "@/plugins/minxins.js"

	import TableSk from "@/components/TableSk"
	import tableColumn from "@/hooks/userListColums.js"
	export default {
		mixins: [minxins], //局部混入
		components: {
			TableSk
		},
		created() {
			this.getUserlist();
		},
		data() {
			return {
				tableData: [],
				tableColumn: tableColumn,
			}
		},
		methods: {
			
			delItems(id) {
				alert("查看页面")
				delUserList(id).then((res) => {
					this.getUserlist();
				})
			},
			getUserlist() {
				getUserList({
					"pagenum": 1,
					"pagesize": 10,
					"query": ""
				}).then(res => {
					this.tableData = res.data.data.users
				})
			}
		}
	}
</script>

<style>
</style>
