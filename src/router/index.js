import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
import Top250 from '../components/top250'
import Search from '../components/search'


Vue.use(Router);
/**
 * 路由信息配置
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/top250',
      name: 'top250',
      component: Top250
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
