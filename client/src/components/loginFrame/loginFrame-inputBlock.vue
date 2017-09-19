<template>
  <div>
    <p>{{promptText}}</p>
    <input
      v-bind:name="name"
      v-bind:placeholder="innerText"
      v-bind:type="contentVisible ? 'text':'password'"
      v-bind:style="{width:inputBoxLength+'px'}"
    />
  </div>

</template>

<script>
  export default{
    props:{
      promptText:{type:String,default:'def'},
      name:{type:String,default:'def'},
      innerText:{type:String,default:'def'},
      contentVisible:{type:Boolean,default:true},
      inputBoxLength:{type:Number,default:220}
    },

    data(){
      return{

      }
    }
  }
</script>

<style scoped>
  p{
    font-family:微软雅黑;
    margin:5px;
  }
input{
  height:30px;
  border-radius: 6px;
  margin:5px;
  font-size:20px;
}
</style>
