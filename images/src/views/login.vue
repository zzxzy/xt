<template>
	<div>
		<el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username">
				<el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			</el-form-item>
		</el-form>

	</div>

</template>

<script>

	export default {
		data() {
			return {
				ruleForm: {
					username: "admin",
					password: '123456'
				}
			};
		},
		methods: {
			submitForm(formName) {
                this.$store.dispatch('user/loginByUserInfo',this.ruleForm).then(()=>{
					this.$router.push({
						path:"/main"
					})
				})

			}
		}
	}
</script>
