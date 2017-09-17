<template>
  <div>
    <img src="../assets/weChat.png"/>
    <span>微信登录</span>
    <div style="height:30px;"></div>
    <img src="../assets/QQ.png"/>
    <span>QQ登录</span>
  </div>
</template>
<script>
  export default{
    props: {},
    components: {},
    data(){
      return {}
    }
  }
</script>

<style scoped>
  div{
    margin:0px;
    padding:0px;
  }
  img {
    width: 57px;
    height: 57px;
  }

  span {
    line-height: 57px;
    font-size: 20px;
    font-weight: bold;
    font-family: 微软雅黑;
    position: relative;
    top: -23px;
  }
</style>
