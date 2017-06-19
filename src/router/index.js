import Vue from 'vue';
import Router from 'vue-router';
import post from '@/components/front/Post';
import postDetail from '@/components/front/postDetail';
import admin from '@/components/back/admin';
import articleList from '@/components/back/articleList';
import articleEdit from '@/components/back/articleEdit';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/post/:id',
      name: 'postDetail',
      component: postDetail
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: '/',
          component: articleList
        },
        {
          path: 'articleList',
          component: articleList
        },
        {
          path: 'articleEdit',
          component: articleEdit
        },
        {
          path: 'articleEdit/?id=:id',
          name: 'EditArticle',
          component: articleEdit
        }
      ]
    }
  ]
});
