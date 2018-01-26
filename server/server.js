import Koa from 'koa';
import server from 'koa-static';
import path from 'path';
import router from './router';

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = 'hello human';
  next();
});
app.use(router.routes());
app.listen(3000);
console.log('server running on port: 3000');

module.exports = app;
