import Vue from 'vue';
import Router from 'vue-router';
import post from '@/components/front/Post';
import postDetail from '@/components/front/postDetail';
import admin from '@/components/back/admin';

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
      component: admin
    }
  ]
});
