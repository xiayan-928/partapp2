<template>
  <div class="page news-page">
    <bar  :title="title"></bar>
    <list :type="type"></list>
  </div>
</template>
<script>
  import Bar from '../common/HeaderBar.vue'
  import List from '../news/Newslist'
  import Config from '../../config'
  export default{
    data(){
      return {
        type:6,
        title:Config.newsType[6]
      }
    },
    components:{
      'bar':Bar,
      'list':List
    }
  }
</script>
