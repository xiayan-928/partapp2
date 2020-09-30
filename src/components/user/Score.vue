<template>
  <div id="page-grjf" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left  button-clear button-calm"
         to="/user" style="color: white;"></router-link>

      <div class="h1 title" style="color: white;">个人量化积分</div>

    </div>
    <div class="scroll-content has-tabs has-header">
      <div class="banner" style="position: relative;">
        <img class="header" src="../../assets/jifen.png" />
					<span style="font-size: 16px; position: absolute; top: 50%; left: 50%; color: white; -webkit-transform: translate(-50%,-50%);" id="">
					60
					</span>
      </div>
      <router-link class="item item-icon-left item-icon-right" to="/scoredetail">
        <img class="icon" style="padding: 10px 0;" src="../../assets/lxjf.png" /> 积分明细
        <img class="icon" style="padding: 20px 0;" src="../../assets/right.png" />
      </router-link>

      <div class="item item-icon-left item-icon-right" style="background: #EEEEEE" href="#">
        <span class="icon" style="font-size: 14px; ">积分规则</span>
        <span class="icon"><img src="../../assets/wenhao.png"/></span>
      </div>
      <div class="list ">
        <div  class="item item-icon-left item-icon-right">
          <!-- 循环把每个人的分循环出来 -->
          <span class="icon " style="font-size: 14px;color: #999999; ">张三</span>
          <span class="icon" style="font-size:14px; color: red;">50</span>
        </div>
         <div  class="item item-icon-left item-icon-right">
          <!-- 循环把每个人的分循环出来 -->
          <span class="icon " style="font-size: 14px;color: #999999; ">李四</span>
          <span class="icon" style="font-size:14px; color: red;">70</span>
        </div>
        <div  class="item item-icon-left item-icon-right">
          <!-- 循环把每个人的分循环出来 -->
          <span class="icon " style="font-size: 14px;color: #999999; ">王可</span>
          <span class="icon" style="font-size:14px; color: red;">80</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Config from '../../config'
  export default{
      data(){
        return {
          totalScore:0,
          rules:rules
        }
      },
      methods:{

      }


    }
</script>

