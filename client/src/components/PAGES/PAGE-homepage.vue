<template>
  <div>
    <Header></Header>
    <homepage-body></homepage-body>
      <Footer></Footer>


  </div>

</template>

<script>


  import Header from '../header/header.vue';
  import HomepageBody from '../homepageBody/homepageBody.vue';
  import Footer from '../footer/footer.vue';
  export default{


    components: {
      'Header': Header,
      'homepage-body': HomepageBody,
      'Footer': Footer
    },

    data(){

    },

    mounted(){

    }
  }


</script>

<style scoped>

</style>
