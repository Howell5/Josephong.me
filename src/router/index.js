import Vue from 'vue';
import Router from 'vue-router';
import post from '@/components/front/Post';
import postDetail from '@/components/front/postDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'post',
      component: post
    },
    {
      path: '/post/:id',
      name: 'postDetail',
      component: postDetail
    }
  ]
});
