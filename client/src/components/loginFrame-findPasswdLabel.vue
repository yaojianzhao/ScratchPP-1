<template>
  <div class="cFindPasswdLabelEntity" >
    <div style="float:right;">
      <span v-on:click="sendStateMsg('login')" class="cCross">X</span>
    </div>
    <div class="cFindPasswdLabel">
      <span class="cHeadline">忘记密码</span>
    </div>
  </div>



</template>

<script>
  export default{
    props: {

    },

    methods:{
      sendStateMsg:function(state){
        this.$emit('stateMsg',state);
      }
    },


  }
</script>

<style scoped>
  .cFindPasswdLabelEntity{
    width:264px;
    height:40px;
    padding:10px;
    background-color: #fee15f;
    text-align:center;
    font-family:微软雅黑;
    font-size:20px;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }
  .cCross{
    font-size:35px;
  }
  .cCross:hover{
    cursor:pointer;
  }
  .cHeadline{
    line-height:40px;
    font-size:24px;
  }


</style>
