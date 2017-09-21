<template>
<div>
  <div class="cLoginLabel"
       v-bind:style="{backgroundColor: isChosen?'#fee15f':'white',
         borderTopLeftRadius:(position=='topLeft')?'22px':'0px',
        borderTopRightRadius:(position=='topRight')?'22px':'0px',
        borderLeft:(position=='topLeft')?'0px':'#fee15f solid 2px',
        borderRight:(position=='topRight')?'0px':'#fee15f solid 2px',
        }"

  >
      <span
        v-bind:style="{color: isChosen?'black':'#fee15f'}"
      >{{text}}</span>

  </div>
</div>



</template>

<script>
  export default{
    props: {
      isChosen: {type: Boolean, default: true},
      text: {type: String, default: 'def'},
      position: {type: String, default: 'def'}
    },

    methods:{
      al:function(){
          this.isChosen=!this.isChosen;
      }
    }


  }
</script>

<style scoped>
  .cLoginLabel {
    width: 140px;
    height: 55px;
    border-bottom: #fee15f solid 2px;
    border-left:#fee15f solid 2px;
    border-right:#fee15f solid 2px;
    text-align: center;
    margin:0px;
  }

  span {
    line-height: 55px;
    font-size: 24px;
    font-family: 微软雅黑;

  }


</style>
