

<script>
	export default{
		functional:true,
		props:{
			row:Object,
			render:Function,
			index:Number,
			column:{
				type:Object,
				default:null,
			}
		},
		// render 本身有的  h  
		// 将虚拟dom转换为真实的dom
		render:(h,ctx)=>{
			const params={
				row:ctx.props.row,
				index:ctx.props.index
			}
			if(ctx.props.column) params.column=ctx.props.column
			return ctx.props.render(h,params)
		}
	}
</script>

<style>
</style>