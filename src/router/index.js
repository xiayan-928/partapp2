import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Index from '../components/home/Index'
import Notice from '../components/home/notice'
import Mypart from '../components/home/mypart'
/* 登录页 */
import Login from '../components/user/Login'
/* 首页面中的导航 */
import Newseye from '../components/news/newseye'//新闻眼
/* 掌上组织生活 */
import Life from '../components/life/Life'
/* 掌上组织生活页面下的跳转页面 */
import Study from '@/components/news/Study'//政治学习

/* 党员互动 */
import Interaction from '../components/user/Interaction'
/* 党建一点通 */
import Oneclick from '@/components/news/Oneclick'//一点通
/* 党员亮身份 */
import ShowIdentity from '@/components/news/ShowIdentity'/*亮身份*/
/* 党史上的今天 */
import Today from '@/components/Today'
/* 随时随地学 */
import Anytimestudy from '@/components/news/AnytimeStudy'/*随地学*/
/* 制度建设 */
import System from '@/components/news/System'/*建设*/
/* 随时随地拍 */
import Anytimephoto from '@/components/news/AnytimePhoto'/*随地拍*/
/* 特色活动 */
import Activity from '@/components/news/Activity'/*特色活动*/

/* 我的党建页面的路由 */
/* 个人信息 */
import Info from '@/components/user/Info'
/* 个人量化积分 */
import Score from '@/components/user/Score'
/* 修改密码 */
import Uppass from '@/components/user/Uppass'
/* 缴纳党费 */
import Pay from '@/components/user/Pay'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children:[
      {
        path: 'index',
        component: Index
      },
      {
        path:'notice',
        component:Notice
      },
      {
        path:'mypart',
        component:Mypart
      }
    ]
  },
  /*登录*/
  {
    path: '/login',
    name:'login',
    component: Login
  },
  /*信工新闻眼*/
  {
    path: '/newseye',
    name: 'newseye',
    component: Newseye
  },
  /*掌上组织生活*/
  {
    path: '/life',
    name: 'life',
    component: Life
  },
   /*党员互动*/
   {
    path: '/interaction',
    name: 'interaction',
    component: Interaction,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },
  /*党建一点通*/
  {
    path: '/oneclick',
    name: 'oneclick',
    component: Oneclick
  },
   /*党员亮身份*/
   {
    path: '/showidentity',
    name: 'showidentity',
    component: ShowIdentity
  },
   /*党史上的今天*/
   {
    path: '/today',
    name: 'today',
    component: Today
  },
  /* 随时随地学 */
  {
    path: '/anytimestudy',
    name: 'anytimestudy',
    component: Anytimestudy,
  },
   /*制度建设*/
   {
    path: '/System/',
    name: 'System',
    component: System
  },
  /* 随时随地拍 */
      {
        path: '/anytimephoto',
        name: 'anytimephoto',
        component: Anytimephoto
      },
      /*特色活动*/
    {
      path: '/activity/',
      name: 'activity',
      component: Activity
    },
    /* 我的党建页面的路由 */
     /*个人信息*/
     {
      path: '/info',
      name:'info',
      component: Info,
     /*  meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }, */
    },
    /* 个人量化积分 */
     /*积分*/
     {
      path: '/score',
      name:'score',
      component: Score,
     /*  meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }, */
    },
    /*修改密码*/
    {
      path: '/uppass',
      name:'uppass',
      component: Uppass,
     /*  meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }, */
    },
    /*党费缴纳*/
    {
      path: '/pay',
      name:'pay',
      component: Pay,
     /*  meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }, */
    },
/*政治学习*/
{
  path: '/study',
  name:'study',
  component: Study
},
]
const router = new VueRouter({
  routes
})

export default router
