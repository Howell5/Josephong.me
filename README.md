# My Personal website

> 一直就有要做一个前后端完整的个人项目的想法，但因为学校和面试的事一直没开始。两个星期前开始了行动，选定*Vue* + *express* + *mongoDB* 的技术栈。Vue框架的文档还是非常友好易懂的，一个星期看官方文档和写小demo，一个星期开始正式开发。总算完成了主体功能的开发。现在写个文章做个阶段性总结。

## 项目架构图

![个人博客项目架构图.png](http://upload-images.jianshu.io/upload_images/2575359-3cdbc655b2f026e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## client
- 技术框架和基本库：
 - 用了Vue-cli 构建基本项目目录，Vue-Router 做路由控制，用 axios 库做 ajax 操作。
- 前台展示页（/psot 和 /postDetail）
  - 用 Marked.js 和 highlight.js 处理 Markdow 转化为 HTML。从服务器拿到数据进行渲染。
  - UI 借用了[尤雨溪大佬博客](http://blog.evanyou.me/)的风格，因为实在没想好自己的博客风格，后期会改。
- 后台管理页（/admin 和 /admin/articleEdit）
  - 这里用到了嵌套路由。编辑器用了第三方插件 simplemde。
  - UI 用 element-ui 很快能搭建好，毕竟不是展示页，简洁好用就行。

Webpack作为静态资源的打包和发布工具。

## server

服务端部分采用 express 作为开发框架，提供api接口服务给前端ajax调用，后端不做页面模板的渲染和路由的导航工作，这部分都由前端的 vue 来处理，所以该博客其实是一个前后端分离，以 [RESTful api](http://www.ruanyifeng.com/blog/2014/05/restful_api.html) 来通信的单页应用。

因为主要逻辑处理（虽然也没有多少业务逻辑）都放在了前端，所以服务端写的很简单。利用 mongoose 与数据库 MongoDB 建立连接，并写好CURD（增删改查）的接口给前端用就行了。

不得不说这种开发方式很爽，不像以前后端丢一个JSP页面，然后才能进行前端工作。我个人认为 业务进行前后端分离，而个人开发者进行全栈发展。

## 难点
### 跨域
因为在vue-cli中本身就有一个小型服务器（本项目中：localhost:8525）供我们的vue项目跑起来，但我们需要的数据是我们自己搭建的服务器（本项目中：localhost:9999）提供给我们的。因为浏览器的“同源政策”，我们不能直接进行跨域访问，解决方案也有很多。CORS，jsonp，...。详情见文章 [浏览器同源政策及其规避方法---阮一峰](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)。而在本项目中，webpack-dev-server 给我们提供的[proxy](https://webpack.github.io/docs/webpack-dev-server.html#proxy)模块，可以很快解决这个问题。配置如下：
```
** config/index.js **

  dev: {
    env: require('./dev.env'),
    port: 8525,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'http://localhost:9999
        changeOrigin: true
      }
    },
```
### 嵌套路由
一开始在文章管理后台中，我比较头痛组件复用问题，在github看了相似项目的源码，发现他们直接用复制代码解决，显然代码冗余严重。在看Vue-Router的文档中，一开始并没有注意嵌套路由的作用，后面多看几遍就发现嵌套路由可以很完美解决这个问题（果然官方文档还是要反复看的）。我的路由配置：
```
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
```

## 实际演示

![博客前台演示页面.gif](http://upload-images.jianshu.io/upload_images/2575359-a4915b5e97e419ec.gif?imageMogr2/auto-orient/strip)


![后台管理页面演示.gif](http://upload-images.jianshu.io/upload_images/2575359-770cfb9e8898a329.gif?imageMogr2/auto-orient/strip)

## TODO
- [ ] 增加登录/注册功能
- [ ] 前台展示页面UI重新设计，完善细节
- [ ] 部署到云服务器上
- [ ] 移动端适配

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
