<template>
  <header>
    <van-nav-bar
      :title="title"
      :right-text="rightText"
      fixed
      placeholder
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "标题",
      rightText: "右侧按钮"
    };
  },
  methods: {
    onClickLeft() {
      console.log("导航左侧点击事件");
    },
    onClickRight() {
      console.log("导航右侧点击事件");
    }
  }
};
</script>

<style>
</style>