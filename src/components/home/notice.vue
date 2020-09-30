<template>
  <div id="page-tzzzd" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <div class="h1 title" style="color: white;">通知早知道</div>
    </div>
    <!--中间内容-->
    <div class="scroll-content has-tabs has-header">
      <a  class="row">
        <div class="left-img col col-20">
          <i class="iconfont icon-laba"></i>
        </div>
        <div class="col" >
          <div class="notice-title">关于我院总支最近将举办十九大知识竞争大赛</div>
          <div class="notice-time">信息工程学院组织教工党员展开最佳党日活动</div>
        </div>
      </a>
      <infinite-loading :spinner="'spiral'" :on-infinite="onInfinite" ref="infiniteLoading">
           <span slot="no-more">
            没有数据了
           </span>
      </infinite-loading>
    </div>
  </div>
</template>