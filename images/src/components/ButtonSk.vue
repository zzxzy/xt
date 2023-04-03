<script>
	export default{
		props:{
			"text":{
				type:String,
				default:"查看"
			},
			"BtnList":{
				type:Array
			}
		},
		render(h){
			return h('div',{},"xxx")
		},
		methods:{
			// renderBtns(h){
			// 	var btn=[];
			// 	for(var i=0;i<this.BtnList.length;i++){
			//        btn.push(h('el-button',{
			// 		   'on':{
			// 			   'click':this.HandleDel
			// 		   }
			// 	   },this.BtnList[i].name))	 
			// 	}
			// 	return btn;
			// },
			// HandleDel(){
			// 	console.log("del");
			// }
		}
		
	}
</script>

<style>
</style>