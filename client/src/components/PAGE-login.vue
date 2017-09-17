<template>
  <div>
    <div>
      <Header></Header>
    </div>

    <div style="position:relative;left:10%;width:300px;float:left;">
      <login-frame></login-frame>
    </div>
    <div style="position:relative;left:20%;width:200px;top:80px;overflow: hidden;">
      <login-link></login-link>
    </div>


  </div>

</template>

<script>


  import Header from '../components/header.vue';
  import LoginFrame from '../components/loginFrame.vue';
  import LoginLink from '../components/loginLink.vue';

  export default{


    components: {
      'Header': Header,
      'login-frame': LoginFrame,
      'login-link': LoginLink
    },

    data(){

    },

    mounted(){

    }
  }


</script>

<style scoped>

</style>
