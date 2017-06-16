<template lang='html'>
  <div class="main">
    <div class="post">
      <h3 class="date">{{ post.date }}</h3>
      <h1>{{ post.title }}</h1>
      <div class="content" v-html="compiledMarkdown">
        {{ post.content }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import objectidToTimestamp from 'objectid-to-timestamp';
import marked from 'marked';
import highlight from 'highlight.js';
export default {
  created() {
    this.getPostDetail()
  },
  data() {
    return {
      post: {}
    }
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.post.content, {
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight: function(code) {
          return highlight.highlightAuto(code).value;
        }
      });
    }
  },
  methods: {
    getPostDetail() {
      let id = this.$route.params.id;
      this.$http.get(`/api/${id}`)
      .then(res => {
        this.post = res.data;
        this.post.date = moment(objectidToTimestamp(this.post._id)).format('YYYY-MM-DD');
      })
    }
  }
  // directives: {
  //   compiledMarkdown: {
  //     bind: function(el) {
  //       marked.setOptions({
  //         renderer: new marked.Renderer(),
  //         gfm: true,
  //         tables: true,
  //         breaks: false,
  //         pedantic: false,
  //         sanitize: false,
  //         smartLists: true,
  //         smartypants: false
  //       });
  //       console.log(el.innerText);
  //       el.innerHTML = marked(el.innerText);
  //     }
  //   }
  // }
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
blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: .25em solid #dfe2e5;
}
pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}
</style>
