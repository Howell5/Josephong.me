import Router from 'koa-router';

const router = new Router();

router.get('/admin', (ctx, next) => {
  ctx.body = {
    userName: 'howell',
    age: '20',
  };
});

module.exports = router;
