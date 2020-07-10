<template>
    <div id="app">
        <Tips :isShowTips="isShowTips"></Tips>
        <div class="content">
          <router-view></router-view>
        </div>
        <div class="foot">
          <xfoot></xfoot>
        </div>
    </div>
</template>

<script>
import Tips from "@/components/tips";
import xfoot from "@/components/foot";
export default {
    data() {
        return {
            isShowTips: false
        };
    },
    components: {
        Tips,
        xfoot
    }
};
</script>

<style lang="scss">
html,body{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
*{
  box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    // padding-top: 50px;
    display: flex;
    flex-direction: column;
    .content{
      flex:1;
      width: 100%;
    }
}
</style>
