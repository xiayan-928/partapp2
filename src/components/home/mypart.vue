<!--我的党建-->
<template>
  <div id="page-wddj" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <div class="h1 title" style="color: white;">我的党建</div>
    </div>
    <div class="scroll-content has-tabs has-header">
    <!--   <div v-show="!isLogin" class="banner">
        <div class="" style="width: 100%; height: 1px;">
        </div>
        <div>
          <img class="header" :src="bg1"/>
        </div>
        <div class="noLogin" style="line-height: 1.5;">
          <router-link  to="/login">你还没有登录,请登录</router-link>
        </div>
      </div> -->
      <div  class="banner">
        <div class="" style="width: 100%; height: 1px;">
        </div>
        <div>
          <img class="header">
        </div>
        <div class="noLogin" style="line-height: 1.5;">
          <router-link style="" to="/login"></router-link>
        </div>
      </div>
      <div class="yaowen"></div>
      <div class="list ">
        <router-link class="item item-icon-left item-icon-right" to="/info">
          <img class="icon" style="padding: 10px 0;" src="../../assets/person.png"/>个人信息
          <img class="icon" style="padding: 20px 0;" src="../../assets/right.png"/>
        </router-link>
        <router-link class="item item-icon-left item-icon-right" to="/score">
          <img class="icon" style="padding: 10px 0;" src="../../assets/lxjf.png"/> 个人量化积分
          <img class="icon" style="padding: 20px 0;" src="../../assets/right.png"/>
        </router-link>
        <router-link class="item item-icon-left item-icon-right" to="/uppass">
          <img class="icon" style="padding: 10px 0;" src="../../assets/xgmm.png"/> 修改密码
          <img class="icon" style="padding: 20px 0;" src="../../assets/right.png"/>
        </router-link>
        <router-link class="item item-icon-left item-icon-right" to="/pay">
          <img class="icon" style="padding: 10px 0;" src="../../assets/icon3.png"/> 党费缴纳
          <img class="icon" style="padding: 20px 0;" src="../../assets/right.png"/>
        </router-link>


      </div>
      <div style="padding: 10px;">
        <input  type="button " class="button button-block button-assertive" value="退出登录">
      </div>
    </div>

  </div>
</template>
 