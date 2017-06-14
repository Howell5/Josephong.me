<template>
  <div class="main">
    <ul>
      <li v-for="post in posts">
        <h3>{{ post.id }}</h3>
        <h2><a href="#">{{ post.head }}</a></h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.getPost();
  },
  name: 'post',
  data() {
    return {
      posts: []
    };
  },
  methods: {
    // 获取所有post数据
    getPost() {
      this.$http.get('/post').
      then(res => {
        console.log(res.body);
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
    font-size: 20px;
    letter-spacing: 1px;
    margin-left: 120px;
}

.main h2, .main h3 {
    letter-spacing: 1px;
    margin: 0;
    text-transform: uppercase;
}

.main h2 a {
    color: #444;
}
a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease, border-color 0.2s ease;
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

a {
  color: #42b983;
}
</style>
