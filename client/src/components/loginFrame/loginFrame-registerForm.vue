<template>
  <div>
    <InputBlock
      v-bind:promptText="'用户名'"
      v-bind:name="'r_userName'"
      v-bind:innerText="'请输入用户名'"
    ></InputBlock>
    <InputBlock
      v-bind:promptText="'密码'"
      v-bind:name="'r_password'"
      v-bind:innerText="'请输入密码'"
      v-bind:contentVisible="false"
    ></InputBlock>
    <InputBlock
      v-bind:promptText="'密码确认'"
      v-bind:name="'r_passwordConf'"
      v-bind:innerText="'请再次输入密码'"
      v-bind:contentVisible="false"
    ></InputBlock>
  </div>

</template>

<script>

  import GlobalInputBlock  from '../globalComponents/global-inputBlock.vue';

  export default{
    props: {},
    components: {
      'InputBlock': GlobalInputBlock
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>

</style>
