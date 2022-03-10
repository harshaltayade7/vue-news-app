import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import NewsList from "../views/NewsList.vue";
import NewsDetail from "../views/NewsDetail.vue";
import BookMark from "../views/BookMark.vue";

const routes = [
{
  path: '/',
  name: 'news-list',
  component: NewsList,
  meta:{keepAlive:true}
},
{
  path: '/news-detail',
  name: 'news-detail',
  component: NewsDetail,
  params: ['id']
},
{
  path: '/bookmarks',
  name: 'bookmarks',
  component: BookMark,
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
