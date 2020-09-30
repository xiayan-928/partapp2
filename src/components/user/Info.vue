<template>
  <div id="page-grdjxx" class=" page page-current">
    <div class="bar bar-header bar-header-Cred">
      <router-link class="button iconfont icon-fa-left button-clear button-calm"
                   to="/user" style="color: white;"></router-link>
      <div class="h1 title" style="color: white;">个人信息</div>
      <router-link class="button button-clear button-calm" to="/updateInfo" style="color: white;">编辑</router-link>
    </div>
    <div class="scroll-content has-header">
      <div class="yaowen"></div>
      <div  class="list ">
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          头像
                      </span>
          <img class="icon" style="padding: 10px 0; " :src="objs.header"/>
          <!--<input type="text" name="" hidden="hidden" id="" value=""/>-->
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          姓名
                      </span>
                      <span class="icon" style="font-size: 14px;">
                        wyy
                          <!--<input type="text" disabled="disabled" name="" id="" :value="objs.username"/>-->
                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          身份证
                      </span>
                      <span class="icon" style="font-size: 14px;">
                        1001
                          <!--<input type="text" name="" id="" value=""/>-->

                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          家庭住址
                      </span>
                      <span class="icon" style="font-size: 14px;">
                       北京
                          <!--<input type="text" name="" id="" value=""/>-->

                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          工作地址
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                              北京

                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          民族
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                                                汉族

                      </span>

        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          微信号
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                       140
                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          qq号
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                                               11111

                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          性别
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                        女
                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          最高学历
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                       博士
                      </span>

        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          职称
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                        导师
                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          薪资水平
                      </span>
                      <span class="icon" style="font-size: 14px;">
                       3000
                          <!--<input type="text" name="" id="" value=""/>-->
                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          入党时间
                      </span>
                      <span class="icon" style="font-size: 14px;">
                        2017.9
                          <!--<input type="text" name="" id="" value=""/>-->
                      </span>
        </div>
        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          党费最后缴纳时间
                      </span>
                      <span class="icon" style="font-size: 14px;">
                          <!--<input type="text" name="" id="" value=""/>-->
                       2020.8
                      </span>
        </div>

        <div class="item item-icon-left  item-icon-right" style="height: 50px;" href="#">
                      <span class="icon" style="font-size: 14px;">
                          当前身份
                      </span>
                      <span class="icon" style="font-size: 14px;">
                        老师
                      </span>

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
        objs:{}
      }
    },

  }

</script>

