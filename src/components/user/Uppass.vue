<!--修改密码-->
<template>
  <div id="page-updatepass" class=" page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link to="/user" class="button  iconfont icon-fa-left button-clear button-calm" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">修改密码</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content  has-header " style="background: white;">

      <form ref="form" class="login-form">
        旧密码：
        <input type="password" v-model="oldPwd" placeholder="旧密码" value="" />
        新密码：
        <input type="password" v-model="newPwd"  placeholder="新密码" value="" />
        确认密码：
        <input type="password" v-model="rePwd"  placeholder="确认密码" value="" />

        <input type="button" class="button button-assertive" name=""  value="确定" />
      </form>

    </div>
    <spinner ></spinner>
  </div>
</template>
<script>
/* 这是一个基于Vue.js的简单、弹性的、只需最少配置的、轻量级的Vue.js旋转器 */
  import Spinner from '../common/Spinner'
  import Config from '../../config'
  export default{
    data(){
      return{
        newPwd:'',
        oldPwd:'',
        rePwd:'',
        show:false
      }
    },
    components: {
      Spinner
    },
    methods: {

    }

  }

</script>
