<template>
  <div class="cFindPasswdFormEntity">
    <InputBlock
      v-bind:promptText="'邮箱/手机号码'"
      v-bind:name="'f_email'"
      v-bind:innerText="'请输入邮箱或手机号码'"
    ></InputBlock>
    <div>
      <div class="cVCodeDiv" style="float:right;">
        <VerifyCodeButton></VerifyCodeButton>
      </div>
      <div>
        <InputBlock
          v-bind:promptText="'验证码'"
          v-bind:name="'f_verifyCode'"
          v-bind:innerText="'输入验证码'"
          v-bind:inputBoxLength="120"
        ></InputBlock>
      </div>

    </div>
    <InputBlock
      v-bind:promptText="'新密码'"
      v-bind:name="'f_password'"
      v-bind:innerText="'请输入新密码'"
      v-bind:contentVisible="false"
    ></InputBlock>
    <InputBlock
      v-bind:promptText="'确认密码'"
      v-bind:name="'f_passwordConf'"
      v-bind:innerText="'请再次输入密码'"
      v-bind:contentVisible="false"
    ></InputBlock>

  </div>

</template>

<script>

  import GlobalInputBlock  from '../globalComponents/global-inputBlock.vue';
  import LoginFrameSubmitButton from './loginFrame-submitButton.vue';
  import LoginFrameVerifyCodeButton from './loginFrame-findPasswdForm-verifyCodeButton.vue';

  export default{
    props: {},
    components: {
      'InputBlock': GlobalInputBlock,
      'SubmitButton':LoginFrameSubmitButton,
      'VerifyCodeButton':LoginFrameVerifyCodeButton
    },

    data(){
      return {}
    },

  }
</script>

<style scoped>
  .cFindPasswdFormEntity{
    width:220px;
  }

.cVCodeDiv{
  height:80px;
  position: relative;
  top:18px;
}
</style>
