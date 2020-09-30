<!--掌上生活-->
<template>
  <div id="page-zzzzsh" class="page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left  button-clear button-calm" to="../index" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">掌上组织生活</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content has-header">
      <div class="banner">
        <img src="../../assets/timg.jpg"/>
        <!--<img src="../../assets/banner1.png"/>-->
      </div>
      <div class="wzkmenu clearfix">
        <router-link class="menu-item fleft" to="/study">
          <img src="../../assets/icon1.png"/>
          <div>政治学习</div>
        </router-link>
        <div class="menu-item fleft " to='/tought'>
          <img src="../../assets/icon2.png"/>
          <div> 思想汇报</div>
        </div>
        <div class="menu-item fleft " to="/summary" >
          <img src="../../assets/icon3.png"/>
          <div>心得总结</div>
        </div>
       <!-- <router-link to="/discuss" class="menu-item fleft mzpy">
          <img src="../assets/icon4.png"/>
          <div>民族评议</div>
        </router-link>-->
        <div class="menu-item fleft mzpy" to="/discuss">
          <img src="../../assets/icon4.png"/>
          <div>民主评议</div>
        </div>
        <router-link class="menu-item fleft" to="/findorg">
          <img src="../../assets/icon5.png"/>
          <div>流动党员找组织</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
