<template lang='html'>
  <div class="main">
    <div class="post">
      <h3 class="date">{{ post.date }}</h3>
      <h1>{{ post.title }}</h1>
      <div class="content">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {}
    }
  },
  mounted() {
    this.getPostDetail()
  },
  methods: {
    getPostDetail() {
      let id = this.$route.params.id;
      this.$http.get('/api/' + id)
      .then(res => {
        this.post = res.data;
      })
    }
  }
}
</script>

<style>
.main {
    max-width: 600px;
    margin: 50px auto;
    padding: 0 30px 50px;
    position: relative;
}
.post {
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #e6e6e6;
}
.post .date {
    font-family: "Montserrat", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, sans-serif;
    font-size: 13px;
    color: #999;
    margin: 0 0 30px;
    letter-spacing: 1px;
}
.post h1 {
    font-size: 32px;
    margin: 0 0 45px;
    letter-spacing: 1px;
}
.post h1, .post h2 {
    text-transform: uppercase;
}
.post .content {
    text-align: left;
    line-height: 1.8em;
}
</style>
