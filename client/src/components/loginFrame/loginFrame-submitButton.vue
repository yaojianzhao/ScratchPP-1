<template>
  <div class="cSubmitDiv">
    <button class="cSubmitButton" type="submit">确认</button>
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
  .cSubmitDiv {
    margin: 0px;
    padding: 0px;
  }

  .cSubmitButton {

    width:130px;
    height:50px;

    background-color: #fbde5e;
    border-radius: 6px;
    font-size: 20px;
    font-weight: bolder;
    font-family: 微软雅黑;
    color: #433e36;
  }
</style>
