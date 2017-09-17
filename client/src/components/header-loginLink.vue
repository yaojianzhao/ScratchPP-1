<template>
  <div class="cEntity">

    <a href="#">注册</a>
    <span>/</span>
    <a href="#">登录</a>
    <img class="cUserPortrait" src="../assets/test.jpg"/>

  </div>
</template>

<script>
  export default{
    component:{

    },

  }
</script>

<style scoped>
.cEntity{
  height:60px;
  overflow: hidden;
}
.cUserPortrait{
  position: relative;
  top:10px;
  height:30px;
  width:30px;
  border-radius: 50%;
}

a,span{
  font-size:16px;
  line-height:60px;

}
a:hover{
  text-decoration: none;
}
</style>
