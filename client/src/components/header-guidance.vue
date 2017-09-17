<template>
  <div class="cGuidance">
    <a>{{text}}</a>
  </div>
</template>

<script>
  export default{
    props:{
        text:String,

    },
    component:{

    },

    data(){
        return{

        }
    }
  }
</script>

<style scoped>
.cGuidance{
  height:60px;
  text-align:center;

}
a{
  height:20px;
  line-height:60px;
  overflow: hidden;
  text-decoration:none;
  font-size:27px;
  color: #605b4e;
  /*font-weight: bold;*/
  font-family: 微软雅黑;

}
a:hover{
  color:black;
  font-size:40px;
}
</style>
