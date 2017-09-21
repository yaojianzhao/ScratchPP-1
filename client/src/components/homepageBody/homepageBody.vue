<template>
  <div >
    <div style="text-align: center;">
      <head-image></head-image>
    </div>
    <div style="background-color:#fef8de;height:500px;padding-top:20px;">
      <div style="margin-left:20%;">
        <course-list></course-list>
      </div>

      <div style="margin-left:20%;position: relative;top:20px;">
        <works-list></works-list>
      </div>
    </div>
    <div style="margin-left:20%">
      <user-list></user-list>
    </div>
  </div>
</template>

<script>
  import HeadImage from './homepageBody-headImage.vue'
  import CourseList from './homepageBody-courseList.vue'
  import WorksList from './homepageBody-worksList.vue'
  import UserList from './homepageBody-userList.vue'


  export default{
    components:{
      'head-image':HeadImage,
      'course-list':CourseList,
      'works-list':WorksList,
      'user-list':UserList

    },

    props: {
    },
    data(){
      return {}
    }
  }
</script>

<style scoped>

</style>
