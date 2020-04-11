<template>
  <div class="home">
    <NavigationBar></NavigationBar>
    <div class="main">
      首页主要内容
    </div>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import {NavigationBar,FooterTabbar,} from "@components/index";
export default {
  name: 'Home',
  components: {NavigationBar,FooterTabbar}
}
</script>
