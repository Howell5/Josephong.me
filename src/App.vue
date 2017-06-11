<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="header">
      <a href="/">洪家伟 HOWELL</a>
    </div>
    <p class="links">
      <a href="https://github.com/howell5" target="_blank"><img src="./assets/github.png"></a>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app {
  font-family: 'Sofia', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
