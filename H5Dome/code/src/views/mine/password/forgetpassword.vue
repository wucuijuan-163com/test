<template>
    <div class='bg-background'>
        <NavigationBar title='忘记支付密码' @click-left='onClickLeft'></NavigationBar>
        <div class='container'>
            <van-cell-group>
                <van-field v-model='mobile' readonly placeholder=''  >
				  <img slot='left-icon' src="@images/icon/phone.png" class='iconImg'/>
                </van-field>
                <van-field v-model='code' maxlength='6' type='number' placeholder='请输入验证码' >
                  <img slot='left-icon' src="@images/icon/password.png" class='iconPassword'/>
                  <van-button slot='button' @click='getCode' :disabled='isDisabled' >{{tipText}}</van-button>
                </van-field>
            </van-cell-group>
        </div>
		<van-button class='confrim' @click='toNext'>下一步</van-button>
    </div>
</template>
<script>
import {NavigationBar} from '@components/index';
// import { getManagerInfo, sendVerify, verifyCodeSms } from '@/api/daysalary';
// import { Toast } from 'vant';
export default {
	components: { NavigationBar },
	data(){
		return {
			mobile: '1341****4444',
			tipText: '获取验证码',
			code: '',
			paypassword: null,
			showBtn: true, //是否展示重新获取验证码按钮，默认展示，读秒时设为false隐藏，读秒结束设为true再展示
			intervalId: null, //读秒id
			countNum: 60, //倒计时60s
			isDisabled: false 
		}
	},
	mounted(){
		getManagerInfo().then(res => {
			this.mobile = res.data.managerPhoneMask;
		})
	},
	methods: {
		onClickLeft(){
			this.$router.go(-1)
			
		},
		//发送验证码
		getCode(){
			sendVerify().then(res => {
				if (res.code == 0) {
					this.countDown()
				}else{
					Toast(res.msg);
				}
			});
		},
		//启动倒计时
		countDown() {						
			clearInterval(this.intervalId);
			// 设置倒计时
			this.intervalId = setInterval(() => {
				this.countNum--;
				if (this.countNum <= 0) {
					// 清除定时器
					clearInterval(this.intervalId);
					// 重置倒计时状态
					this.countNum = 60;
					this.tipText = '重新获取'
					this.isDisabled = false
				}else{
					this.tipText = this.countNum + 'S'
					this.isDisabled = true
				}
			}, 1000);
		},
		toNext(){
			if(this.code == ''){
				Toast('短信验证码不能为空');
				return
			}
			let parameter = { code: this.code }
			verifyCodeSms(parameter).then(res => {
				if (res.code == 0) {
					this.$router.push({ 
						path: '/password',
						query: { isPassword: 2 }
					})
				}else{
					Toast(res.msg);
				}
			});
			  
		}
		
	}
}
</script>
<style lang="less" scoped>
.bg-background {
	background: white;
	height: 100%;
}
.van-cell{
	height:100px;
	line-height:100px;
	padding:0 16px;
}
.van-field__button .van-button{
  height:64px;
  border:1px solid rgba(235,235,235,1);/*no*/ 
  border-radius:34px;
  line-height: 64px;
}
.iconImg,.iconPassword{
  width:24px;
  height:34px;
  margin:0 20px;
  vertical-align: middle;
}
.iconPassword{
	width:18px;
}
.confrim {
	width: 550px;
	height: 100px;
	margin: 220px auto;
	color: #fff;
	background: #6167b9;
	border-radius: 50px;
	font-size: 34px;
}
</style>

