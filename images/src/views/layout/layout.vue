<template>
	<div>
		<el-container>
			<el-header>
				<NavBox></NavBox>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<SideBox></SideBox>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import NavBox from "./component/NavBox.vue"
	import Content from "./component/Content.vue"
	import SideBox from "./component/SideBox.vue"

	export default {
		components: {
			NavBox,
			Content,
			SideBox
		}


	}
</script>

<style scoped>
	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>
