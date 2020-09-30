<template>
  <div class="page news-page">
    <!-- 最后需要换数据 -->
    <bar></bar>
    <list></list>
  </div>
</template>

<script>
  import Bar from '../common/HeaderBar.vue'
  import List from '../news/Newslist'
  export default{
    components:{
      'bar':Bar,
      'list':List
    }
  }
</script>
