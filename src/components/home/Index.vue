<template>
  <div id="page-in" class=" page page-current">
      <!-- 头部start  -->
    <div class="bar bar-header bar-header-Cred">
      <div class="button button-clear"><img src="../../assets/logo.png" style="width: 130px; "/></div>
      <router-link v-show="showLogin" class="button button-clear login-btn" to="/login">登录</router-link>
    </div>
    <!-- 头部end -->
    <div class="scroll-content has-tabs has-header">
        <!-- 轮播图start -->
      <div class="banner">
        <swiper>
          <swiper-slide style="position: relative">
            <a>
              <div class="bg-img">
                <img src="../../assets/banner.png"/>
              </div>
              <div class="slide_text" style=" "></div>
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 轮播图end -->
      <!-- 要闻 -->
      <div class="yaowen">
        
      </div>
      <!-- 导航栏start -->
      <div class="menulist table">
        <div class="table-row">
          <router-link class="table-cell" to="/newseye">
            <img src="../../assets/icon_01.png" alt=""/>
            <div>信工新闻眼</div>
          </router-link>
          <router-link class="table-cell" to="/life">
            <img src="../../assets/icon_03.png"/>
            <div>掌上组织生活</div>
          </router-link>
          <router-link class="table-cell" to="/interaction">
            <img src="../../assets/icon_05.png"/>
            <div>党员云互动</div>
          </router-link>
        </div>
        <div class="table-row">
          <router-link class="table-cell" to="/oneclick">
            <img src="../../assets/icon_04.png"/>
            <div>党建一点通</div>
          </router-link>
          <router-link class="table-cell" to="/showidentity">
            <img src="../../assets/icon_06.png"/>
            <div>党员亮身份</div>
          </router-link>
          <router-link class="table-cell external" to="today">
            <img src="../../assets/icon_02.png"/>
            <div>党史上的今天</div>
          </router-link>

        </div>
      </div>
      <!-- 导航栏end -->
      <!-- 中间图片区域start -->
      <div class="banner banner1">
        <img src="../../assets/banner01.png"/>
      </div>
      <!-- 中间图片区域end -->
      <!-- 底部导航start -->
      <div class="tese table">
        <div class="table-cell">
        </div>
        <div class="table-cell">
          <!-- 随时随地学 -->
          <router-link style="display: block;height: 50%;" to="/anytimestudy"></router-link>
          <!-- 制度建设 -->
          <router-link style="display: block;height: 50%;" to="/System"></router-link>
        </div>
        <div class="table-cell">
          <!-- 随时随地拍 -->
          <router-link style="display: block;height: 50%;" to="/anytimephoto"></router-link>
          <!-- 特色活动 -->
          <router-link style="display: block;height: 50%;" to="/activity"></router-link>
        </div>
      </div>
      <!-- 底部导航end -->
    </div>
  </div>
</template>
<style>
.tese{
  background-image: url("../../assets/tese.png");
} 
  .login-btn {
    color: white !important;
  }

  .bg-img {
    background-size: cover;
    background-position: center;
  }

  .bg-img, .bg-img img {
    width: 100%;
  }
  .slide_text {
    z-index: 11;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .swiper-pagination-bullet {
    opacity: .6 !important;
    background: #c94a4a;
  }
</style>