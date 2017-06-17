<template>
  <!-- <img src="./assets/logo.png"> -->

  <div class="main">
    <div class="header">
      <a href="/post">HOWELL</a>
    </div>
    <p class="links">
      <a href="https://github.com/howell5" target="_blank"><img src="../../assets/github.png"></a>
    </p>
    <ul>
      <li v-for="post in posts" :key="post._id">
        <h3>{{ post.date }}</h3>
        <h2 @click="getPostDetail(post._id)">{{ post.title }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment';
import objectidToTimestamp from 'objectid-to-timestamp';
export default {
  created() {
    this.getPost();
  },
  name: 'posts',
  data() {
    return {
      posts: []
    };
  },
  methods: {
    // 获取所有post数据
    getPost() {
      this.$http.get('/api').
      then(res => {
        this.posts = res.data;
        this.posts.forEach(post => {
          post.date = moment(objectidToTimestamp(post._id)).format('YYYY-MM-DD');
        });
      });
    },
    getPostDetail(id) {
      this.$router.push({
        name: 'postDetail',
        params: { id: id }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  max-width: 600px;
  margin: 50px auto;
  padding: 0 30px 50px;
  position: relative;
}
.main ul {
    list-style-type: none;
    padding: 0;
    padding-top: 4px;
}
.main ul li:first-child {
    margin-top: -30px;
}
.main ul li {
    display: block;
    position: relative;
    padding: 30px 0 30px;
    border-bottom: 1px solid #e6e6e6;
}

.main h3 {
    font-size: 13px;
    color: #999;
    position: absolute;
    left: 0;
    top: 33px;
}

.main h2, .main h3 {
    letter-spacing: 1px;
    margin: 0;
    text-transform: uppercase;
}
.main h2 {
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 1px;
    margin-left: 120px;
}
.main h2 a {
    color: #444;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


</style>
