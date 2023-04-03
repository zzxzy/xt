const minxins={
	data(){
		return {
			name:"sk",
			age:"35",
			currentPage4: 1
		}
	},
	methods:{
		sayhello(){
			console.log("混入对象中的sayhello");
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	},
	computed:{
		sayhi(){
			return "sayhi"
		}
	},
	created(){
		console.log("混入的created");
	},
	mounted(){
		console.log("混入对象中的mounted");
	}
}


export default minxins;