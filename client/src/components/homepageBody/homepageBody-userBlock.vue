<template>
  <div>
    <div style="width:160px;height:160px;">
      <img class="cImgBlock" v-bind:src="imgSrc"/>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      imgSrc: {type: String, default: 'static/test.jpg'},
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>
  div {
    padding: 0px;
    margin: 0px;
  }

  .cImgBlock {
    width: 100%;
    height: 100%;

    border-width: 4px;
    border-style: solid;
    border-color: #e7d691;
    border-radius: 50%;

  }


</style>
