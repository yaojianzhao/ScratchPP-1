<template>
  <div class="cLoginFormDiv">
    <InputBlock
      v-bind:promptText="'用户名'"
      v-bind:name="'l_userName'"
      v-bind:innerText="'请输入用户名'"
    ></InputBlock>
    <div>
      <div style="float:right">
        <a v-on:click="sendStateMsg('findPassword')">忘记密码？</a>
      </div>
      <div>
        <InputBlock
          v-bind:promptText="'密码'"
          v-bind:name="'l_password'"
          v-bind:innerText="'请输入密码'"
          v-bind:contentVisible="false"
        ></InputBlock>
      </div>

    </div>

<p>{{stateMsg}}</p>
  </div>

</template>

<script>

  import GlobalInputBlock  from '../globalComponents/global-inputBlock.vue';

  export default{
    props: {

    },
    components: {
      'InputBlock': GlobalInputBlock
    },
    methods:{
      sendStateMsg:function(state){
          this.$emit('stateMsg',state);
      }
    },
    data(){
      return {

      }
    }
  }
</script>

<style>
  .cLoginFormDiv{
    width:230px;

  }
a{
  font-size:10px;
  color:blue;
}
  a:hover{
    cursor:pointer;
  }
</style>
