import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
import Top250 from '../components/top250'
import Search from '../components/search'
import MoviesDetail from '../components/child_components/MoviesDetail'
import celebrityDetail from '../components/child_components/celebrityDetail'
import us_box from '../components/us_box'


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
    },
    {
      path: '/moviesDetail',
      name: 'moviesDetail',
      component: MoviesDetail
    },
    {
      path: '/celebrityDetail',
      name: 'celebrityDetail',
      component: celebrityDetail
    },
    {
      path: '/us_box',
      name: 'us_box',
      component: us_box
    }
  ]
})
