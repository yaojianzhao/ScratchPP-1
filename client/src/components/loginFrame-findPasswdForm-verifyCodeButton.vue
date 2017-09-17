<template>
  <div class="cVCodeDiv">
    <button class="cVCodeButton" type="submit">获取验证码</button>
  </div>

</template>

<script>
  export default{
    props: {

    },
    components: {},
    data(){
      return {}
    }
  }
</script>

<style scoped>
  .cVCodeDiv {
    margin: 0px;
    padding: 0px;
  }

  .cVCodeButton {

    width:80px;
    height:24px;

    background-color: #fbde5e;
    border-radius: 3px;
    font-size: 10px;
    font-weight: bolder;
    font-family: 微软雅黑;
    color: #433e36;
  }
</style>
