<template>
	<div>
		<TableSk :tableData="tableData" :tableColumn="tableColumn" :isHander="isHander"></TableSk>
	</div>
</template>

<script>
	import TableSk from "@/components/TableSk"
	export default {
		components: {
			TableSk
		},
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}],
				tableColumn: [{
						label: "日期",
						prop: 'date'
					},
					{
						label: "姓名",
						prop: 'name'
					},
					{
						label: "地址",
						prop: 'address'
					},
					{
						label: "操作",
						prop: "operation",
						// render 自定义的
						render: (h, params) => {
							return h('div', [
								h('a', {
									domProps: {
										innerHTML: "查看"
									},
									style: {
										marginRight: "10px",
									},
									on: {
										click: () => {
											alert("查看页面")
										}
									}
								}),
								h('a', {
									domProps: {
										innerHTML: "删除"
									},
									style: {
										marginRight: "10px",
									},
									on: {
										click: () => {
											this.delItems()
											console.log();
										}
									}
								})


							])



						}

					}
				],
				isHander: true
			}
		},
		methods:{
			delItems(){
				alert("delItems")
			}
		}

	}
</script>

<style>
</style>
