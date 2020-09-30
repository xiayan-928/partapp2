<template>
  <div class="scroll-content has-header">
    <div class="news-list">
      <a  class="news-item ">
         <div class="img">
         </div>
         <div class="content">
           <h3 class="overflow-line-2">召开第十三届党章大会，召开事件另行通知</h3>
           <div class="bottom-bar">
							<span >2017-06-15</span>
            <span class="counter">
               <i class="iconfont icon-eye"></i>
            </span>
           </div>
         </div>
      </a>
    </div>
    <!-- 新闻里面显示的图片 -->
   <div class="img-list">
      <a>
        <div  class="bg-img">
          <img src="../../assets/bg4x3.png" />
        </div>
        <div class="overflow-line-2"></div>
      </a>
    </div>  
    <infinite-loading >
           <!-- <span slot="no-results">
            还没有数据
           </span> -->
           <span slot="no-more">
            没有更多数据了
           </span>
    </infinite-loading>
  </div>
</template>

<script>
  import Config from '../../config'
  import InfiniteLoading from 'vue-infinite-loading'
    export default{
      data(){
        return{
          list:[],
          page:1,
        }
      },
      props:['type',"listStyle"],
      created:function () {

      },
      components:{
        InfiniteLoading,
      }
     
    }
</script>

