<!--党员云互动-->
<template>
  <div id="page-dyyhd" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left button-clear button-calm" to="/index" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">党员云互动</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div  v-show="isShowPublish" class="publishWrap" >
        <form class="publishForm" action="">
          <textarea v-model="content"></textarea>
          <input  type="button" class="button button-small button-assertive" value="发布">
          <input  type="button" class="button button-small button-default" value="取消">
        </form>
    </div>
    <div  class="fabu">
      <i  class="iconfont icon-iconfontxinzeng"></i>
    </div>
    <div class="scroll-content  has-header" ref="scroll">
     <!-- <div class="search-wrap"><input type="text" name="" id="" value="" placeholder="在党员云互动中搜索" /></div>-->
      <ul class="lxyztlqList" >
        <li  class="item">
          <div class="top clearfix">
            <div class="touxiang fleft"></div>
            <div class="top-center fleft">
              <div class="nickname">张得生</div>
              <div class="time"><i class="iconfont icon-shijian"></i><span></span><i class="iconfont icon-laba1"></i><span>公开</span> </div>
            </div>
            <div class="lxyz  fright">党员互动</div>
          </div>
          <div class="content">祝福2020毕业生前程似锦</div>
          <div class="clearfix"><span class="response fright"><i  class="iconfont icon-xiaoxi2"></i><span>回复</span></span>
          </div>
        </li>
        <infinite-loading>
           <span slot="no-results">
            还没有数据
           </span>
           <span slot="no-more">
            没有更多数据了
           </span>
        </infinite-loading>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .publishWrap{
    position: fixed;
    height: 100%;
    width: 100%;
    z-index:999;
    background: rgba(0,0,0,0.5);
  }
  .publishForm{
    width: 100%;
    position: absolute;
    bottom:0;
    padding: 10px;
    background: #f1f1f1;
  }
  .publishForm textarea{
    width: 100%;
    height: 100px;
    border-radius: 3px;
    padding: 4px;
    margin-bottom: 10px;
  }
  .publishForm  label{
    font-size: 18px;
    color: white;
  }
  .publishForm input:nth-of-type(2){
   float: right;
  }
  .fabu {
    position: fixed;
    right: 10px;
    bottom: 70px;
    z-index: 999999;
  .iconfont {
    font-size: 56px;
    color: red;
  }
  }

</style>

<script>
/* 一个无限加载模块 */
  import InfiniteLoading from 'vue-infinite-loading'
  export default{
    components:{
      InfiniteLoading,
    }
  }
</script>
<style scope>
  .icon-xiaoxi2{
    margin-right: 5px;
  }

</style>
