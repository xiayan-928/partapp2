<template>
  <div id="page-login" class=" page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <a href="#"  class="button  iconfont icon-fa-left button-clear button-calm"  style="color: white;"></a>
      <div class="h1 title" style="color: white;">登录</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content  has-header" style="">
      <div class="logo">
        <img src="../../assets/logo.png"/>
      </div>
      <form ref="form" class="login-form">
        <input type="text" name="id_card" id="idcard" placeholder="身份证号" value="" />
        <input type="password" name="password" id="password" placeholder="密码" value="" />
        <input type="button" name=""  id="login" value="登录" />
      </form>
    </div>
    <spinner></spinner>
  </div>
</template>
<script>
  import Config from '../../config'
  import Spinner from '../common/Spinner'
  export default{
  components: {
    Spinner
  },
    data(){
      return{
      }
    },
    methods: {
    }
  }
</script>
