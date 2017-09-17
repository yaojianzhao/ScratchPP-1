<template>
  <div class="cSubmitDiv">
    <button class="cSubmitButton" type="submit"  @click="register">确认</button>
  </div>

</template>

<script>
  import Vue          from 'vue'
  import VueResource  from 'vue-resource'
  Vue.use(VueResource)

  export default{
    props: {

    },
    components: {},
    data(){
      return {}
    },methods:{
      register(){
      console.log('hello');
      // this.$http.post('http://localhost:8081/register', {hello:"hello"})
    this.$http.post("http://localhost:3000/register",{myName:"申玉超",myPwd:"123456"},{emulateJSON: true})
            .then(
              (response)=>{
                console.log(response); 
              },
              (error)=>{
                console.log(error);
              }
            );
    }
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
