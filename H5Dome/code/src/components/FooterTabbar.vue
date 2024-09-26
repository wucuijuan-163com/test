<template>
  <footer>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for='(item,index) in tabbars' :key='index' :icon="item.icon" :to='item.name'>{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          icon: "home-o"
        },
        {
          name: "List",
          title: "列表",
          icon: "apps-o"
        },
        {
          name: "Mine",
          title: "我的",
          icon: "friends-o"
        }
      ]
    };
  },
  created() {
    console.log(this.$route)
    if (this.$route.name == '/'||this.$route.name == 'Home') {
      this.active = 0;
    } else if (this.$route.name == 'List') {
      this.active = 1;
    }else if (this.$route.name == 'Mine'){
      this.active = 2;
    }
  }
};
</script>

<style>
</style>
