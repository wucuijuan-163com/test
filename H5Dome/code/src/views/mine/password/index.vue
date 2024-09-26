<template>
    <div class='password'>
        <NavigationBar title='支付密码' @click-left='onClickLeft'></NavigationBar>
        <div class='container'>
            <van-cell-group>
                <van-field v-model='payPassword' type='password' clearable :placeholder='pageText.pwdPlaceholder' :label='pageText.pwdLabel' maxlength='6' oninput = 'value=value.replace(/[^\d]/g,"")' pattern='\d*'></van-field>
                <van-field v-model='confirmPassword' type='password' clearable :placeholder='pageText.confirmPwdPlaceholder' :label='pageText.confirmPwdLabel' maxlength='6' oninput = 'value=value.replace(/[^\d]/g,"")' pattern='\d*'></van-field>
            </van-cell-group>
            <div v-if='passwordStatus==1' class='forgetPwd' @click='forgetPwd'>忘记密码</div>
        </div>
        <van-button class='confrim' id='confirm' @click='confirmPwd'>确定</van-button>
    </div>
</template>
<script>
import {NavigationBar} from '@components/index';
// import { getPasswordStatus, setPayPassword, updatePayPassword } from '@/api/daysalary';
// import { Toast } from 'vant';
export default {
	name: 'password',
	components: { NavigationBar },
	data() {
		return {
			pageText: {
				title: '设置支付密码',
				pwdPlaceholder: '请输入6位数支付密码',
				pwdLabel: '密码：',
				confirmPwdPlaceholder: '请再次输入6位支付密码',
				confirmPwdLabel: '确认密码：'
			},
			payPassword: '', //支付密码
			confirmPassword: '', //确认支付密码
			passwordStatus: 2 //密码状态
		};
	},
	mounted() {
		//密码设置状态
		// isPassword---0：设置密码，1：修改密码，2：忘记密码
		this.passwordStatus = this.$route.query.isPassword;

		if (this.passwordStatus == 0 || this.passwordStatus == 2) {
			this.pageText = {
				title: '设置支付密码',
				pwdPlaceholder: '请输入6位数字支付密码',
				pwdLabel: '密码：',
				confirmPwdPlaceholder: '请再次输入6位数字支付密码',
				confirmPwdLabel: '确认密码：'
			};
			if (this.passwordStatus == 2) {
				this.pageText.title = '忘记支付密码';
			}
		} else {
			this.pageText = {
				title: '修改支付密码',
				pwdPlaceholder: '请输入旧6位数字支付密码',
				pwdLabel: '旧密码：',
				confirmPwdPlaceholder: '请输入新6位数字支付密码',
				confirmPwdLabel: '新密码：'
			};
		}
	},
	methods: {
		onClickLeft() {
			this.$router.go(-1);
		},
		//确定密码
		confirmPwd() {
			if (this.passwordStatus == 0 || this.passwordStatus == 2) {
				this.setPassword();
			} else {
				this.updatePassword();
			}
		},
		//设置密码
		setPassword() {
			if (this.payPassword == '' || this.payPassword.length < 6 ) {
				Toast('请输入6位数字支付密码');
				return;
			}
			if (this.confirmPassword == '' || this.confirmPassword.length < 6 ) {
				Toast('请再次输入6位数字支付密码');
				return;
			}
			if (this.payPassword != this.confirmPassword) {
				Toast('支付密码不一致，请重新输入');
				return;
			}
			let parameter = {
				payPassword: this.payPassword,
				confirmPassword: this.confirmPassword
			};
			setPayPassword(parameter).then(res => {
				Toast(res.msg);
				if (res.code == 0) {
					if (this.passwordStatus == 2) {
						this.$router.push({ path: '/mine' });
					} else {
						this.$router.go(-1);
					}
				}
			});
		},
		//修改密码
		updatePassword() {
			if (this.payPassword == '' || this.payPassword.length < 6 ) {
				Toast('请输入旧6位数字支付密码');
				return;
			}
			if (this.confirmPassword == '' || this.confirmPassword.length < 6) {
				Toast('请输入新6位数字支付密码');
				return;
			}
			
			let parameter = {
				newPassword: this.confirmPassword,
				oldPassword: this.payPassword
			};
			updatePayPassword(parameter).then(res => {
				Toast(res.msg);
				if (res.code == 0) {
					this.$router.go(-1);
				}
			});
		},
		// 忘记密码
		forgetPwd() {
			this.$router.push({ path: '/forgetpassword' });
		}
	}
};
</script>
<style lang="less" scoped>
.password {
	background-color: #fff;
}
.forgetPwd {
	margin: 30px;
	text-align: right;
	font-size: 28px;
	font-weight: 500;
	color: #6167b9;
}
.confrim {
	width: 550px;
	height: 100px;
	border-radius: 50px;
	background: #6167b9;
	color: #fff;
	font-size: 34px;
	margin: 219px auto;
}
</style>

