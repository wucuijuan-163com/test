<template>
  <div class="mine">
    <NavigationBar></NavigationBar>
    <div class="main">
      <van-cell-group>
        <van-cell title="支付密码" is-link />
      </van-cell-group>
    </div>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import { NavigationBar, FooterTabbar } from "@components/index";
export default {
  name: "mine",
  components: { NavigationBar, FooterTabbar },
  data(){
    return{
      passwordState:'set'   //支付密码状态：set：设置， modify：修改，forget：忘记
    }
  }
};
</script>
