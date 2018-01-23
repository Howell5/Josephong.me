import koa from 'koa';
import server from 'koa-static';
import path from 'path';

const app = new koa();

app.use(
  server(path.join(__dirname + '../app/admin'), {
    index: 'index.html'
  })
);

app.listen(3000);
console.log('server running on port: 3000');

module.exports = app;
