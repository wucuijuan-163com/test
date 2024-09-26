<template>
  <div class="home">
    <NavigationBar></NavigationBar>
    <div class="main">
      两数之和：
      <!-- {{nums}} -->
    </div>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import {NavigationBar,FooterTabbar,} from "@components/index";
export default {
  name: 'Home',
  components: {NavigationBar,FooterTabbar},
  data(){
    return{
      nums:[2,7,11,15],
      target:9
    }
  },
  mounted(){
    for (let i = 0; i < this.nums.length; i++) {
      const element = this.nums[i];
      
    }
  },
  methods:{

  }

}
</script>
