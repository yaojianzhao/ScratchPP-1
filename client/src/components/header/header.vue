
<template>
  <div>
    <div class="cEntity">
      <div style="width:15%;float:left;">
        <Headline></Headline>
      </div>
      <div style="width:15%;float:left;">
        <Guidance :text="'首页'"></Guidance>
      </div>
      <div style="width:15%;float:left;">
        <Guidance :text="'课程'"></Guidance>
      </div>
      <div style="width:10%;float:left;">
        <Mascot></Mascot>
      </div>
      <div style="width:15%;float:left;">
        <Guidance :text="'作品'"></Guidance>
      </div>
      <div style="width:15%;float:left;">
        <Guidance :text="'课程'"></Guidance>
      </div>
      <div style="width:15%;float:left;">
        <LoginLink></LoginLink>
      </div>
    </div>

    <div id="idBlock" v-bind:style="{height:h}">

    </div>

  </div>



</template>

<script>



  import HeaderGuidance  from './header-guidance.vue';
  import HeaderHeadline  from './header-headline.vue';
  import HeaderLoginLink  from './header-loginLink.vue';
  import HeaderMascot  from './header-mascot.vue';

  export default{

    //使组件的高度随中间图片大小的变化而变化

    components:{
      'Headline':HeaderHeadline,
      'Guidance':HeaderGuidance,
      'LoginLink':HeaderLoginLink,
      'Mascot':HeaderMascot
    },

    data(){
        return{
            h:(document.documentElement.clientWidth*0.1-45)+'px',
        }
    },

    mounted(){
      window.onresize=function(){
        var w=document.documentElement.clientWidth*0.1-45;
        document.getElementById('idBlock').style.height=w+'px';
      }
    }
  }



</script>

<style scoped>
div{
  margin:0px;
  padding:0px;
}
  .cEntity{
    background-color: #fee15f;
    height:60px;
    overflow-y: visible;
  }

</style>
