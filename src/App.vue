<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
body, html {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Noto Serif', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  font-family: "Sofia", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, sans-serif;
  font-weight: 400;
  color: #444;
  letter-spacing: 5px;
  margin: 50px auto 15px;
  text-align: center;
}
.header a {
  font-size: 15px;
  color: #444;
}
.links {
    text-align: center;
    font-family: "Roboto", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, serif;
    color: #999;
    font-size: 24px;
    margin: 0;
}
.links img {
  width: 15px;
  height: 15px;
}
img {
  border: none;
}
.links a {
  cursor: pointer;
  padding: 2px;
  margin: 0 3px;
}
</style>
