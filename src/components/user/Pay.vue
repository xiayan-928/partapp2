<!--党费缴纳-->
<template>
  <div id="page-pay" class=" page page-current">
    <!--头部开始-->
    <div class="bar bar-header bar-header-Cred">
      <router-link to="/user" class="button  iconfont icon-fa-left  button-clear button-calm" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">缴纳党费</div>
      <!--<button class="button button-clear login-btn">登录</button>-->
    </div>
    <!--头部结束-->
    <!--中间内容-->
    <div class="scroll-content  has-header" style="">
      <!--<input type="text" name="money" placeholder="请输入缴费金额" id="money" value="" />-->
      <div class="choice">请选择支付方式</div>
      <div class="list">
        <div  class="item item-icon-left payItem item-icon-right" href="#">
          <i class="left-icon icon iconfont icon-iconfontweixin"></i>
          微信
          <i class="icon right-icon iconfont icon-arrow-right"></i>

        </div>
        <div   class="item  item-icon-left item-icon-right" href="#">
          <i class="left-icon icon iconfont icon-zhifubao"></i>
          <div>支付宝</div>
          <i class="icon right-icon iconfont icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div  v-show="showPayWrap" class="payWrap">
      <div class="payImgWrap">
        <div class="payText">支付多少钱</div>
        <img v-show="showAlipay" src="../../assets/alipay.png" alt="">
        <img v-show="showWechat" src="../../assets/wechat.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
  export default{
      data(){
        return {
          isplay:false,
          payText:"",
          showWechat:false,
            showAlipay:false,
          showPayWrap:false
        }
      },
      methods:{
        
      }
    }
</script>
<style scoped>
  #page-pay .item{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .payText{
    font-size: 20px;
    line-height:2;
    width: 100%;
    text-align: center;
    /*margin-bottom: 10px;*/
  }
  .payWrap{
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 10;
  }
  .payImgWrap{
    width: 300px;
    height: 300px;
    /*padding: 20px;*/
    background: white;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
  .payImgWrap img{
    width: 100%;
  }
</style>

