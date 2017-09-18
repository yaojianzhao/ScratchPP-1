<template>
  <div class="cEntity">
    <div v-if="(frameState=='login'||frameState=='register')" style="margin-bottom:30px;">
      <div v-on:click="setState('register')" style="float:right;">
        <login-label
          v-bind:isChosen="(frameState=='register')"
          v-bind:text="'注册'"
          v-bind:position="'topRight'"
        ></login-label>
      </div>
      <div v-on:click="setState('login')">
        <login-label
          v-bind:isChosen="(frameState=='login')"
          v-bind:text="'登录'"
          v-bind:position="'topLeft'"
        ></login-label>
      </div>
    </div>

    <div v-if="(frameState=='findPassword')" style="margin-bottom:20px;">
      <find-password-label v-on:stateMsg="getStateMsg"></find-password-label>
    </div>


    <form>
      <div v-if="(frameState=='login')">
        <login-form v-on:stateMsg="getStateMsg"></login-form>

      </div>
      <div v-if="(frameState=='register')">
        <register-form></register-form>
      </div>
      <div v-if="(frameState=='findPassword')">
        <find-password-form ></find-password-form>
      </div>
      <div style="margin-top:20px;margin-bottom:20px;padding-left:50px;">
        <submit-button></submit-button>
      </div>

    </form>

  </div>

</template>

<script>

  import LoginFrameLoginLabel from './loginFrame-loginLabel.vue';
  import LoginFrameFindPasswdLabel from './loginFrame-findPasswdLabel.vue';
  import LoginFrameFindPasswdForm from './loginFrame-findPasswdForm.vue';
  import LoginFrameLoginForm from './loginFrame-loginForm.vue';
  import LoginFrameRegisterForm from './loginFrame-registerForm.vue';
  import LoginFrameSubmitButton from './loginFrame-submitButton.vue';

  export default{

    //使组件的高度随中间图片大小的变化而变化

    props: {
      frameState: {type: String, default: 'login'},
      stateMsg:{type:String,default:''}
    },
    watch:{
        stateMsg:function(newMsg){
            this.frameState=newMsg;
            this.message='';
        }
    },

    components: {
      'login-label': LoginFrameLoginLabel,
      'find-password-label':LoginFrameFindPasswdLabel,
      'find-password-form': LoginFrameFindPasswdForm,
      'login-form': LoginFrameLoginForm,
      'register-form': LoginFrameRegisterForm,
      'submit-button': LoginFrameSubmitButton,
    },
    methods:{
      getStateMsg(msg){
          this.stateMsg=msg;
      },

      setState:function(newState){
        this.frameState=newState;
      }
    },
    data(){

    },
    mounted(){

    },

  }


</script>

<style scoped>
  div {
    margin: 0px;
    padding: 0px;
  }
.cEntity{

  width:284px;
  border: #f7d85f solid 2px;
  border-radius:27px;
  box-shadow: 0 0 4px 4px rgba(0,0,0,.2);
}
  form{
    padding-left:25px;
    margin:0 auto;
  }
</style>
