<template>
  <div>
    <el-input v-model="postTitle" placeholder="文章标题"></el-input>
    <!-- <el-input
      id="simplemde"
      type="textarea"

      :rows="8"
      v-model="postContent">
    </el-input> -->
    <textarea id="simplemde"></textarea>
    <div class="btn">
      <el-button @click="publishPost" type="info">{{ btnName }}</el-button>
    </div>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import marked from 'marked';
import highlight from 'highlight.js';
export default {
  data() {
    return {
      postTitle: '',
      postContent: '',
      btnName: '发布文章'
    }
  },
  mounted() {
    let self = this;
    let simplemde = new SimpleMDE({
        element: document.getElementById('simplemde'),
        autofocus: true,
        autosave: true,
        previewRender: function(plainText) {
            return marked(plainText,{
                renderer: new marked.Renderer(),
                gfm: true,
                pedantic: false,
                sanitize: false,
                tables: true,
                breaks: true,
                smartLists: true,
                smartypants: true,
                highlight: function (code) {
                    return highlight.highlightAuto(code).value;
                }
            });
        }
    });
    simplemde.codemirror.on("change", function(){
        var value = simplemde.value();
        self.postContent = value;
    });
    if(this.$route.params.id) {
      const id = this.$route.params.id;
      this.$http.get(`/api/${id}`)
      .then(
        res => {
          this.postTitle = res.data.title;
          this.btnName = '更新文章';
          console.log(res.data.content);
          simplemde.value(res.data.content);
        }
      )
    } else {
      simplemde.value('快来创建你的新博客吧~');
    }
  },
  methods: {
    publishPost: function() {
      const obj = {
        title: this.postTitle,
        content: this.postContent,
        state: 'publish'
      };
      if(this.$route.params.id) {
        const id = this.$route.params.id;
        this.$http.put(`/api/${id}`,{
            title: this.postTitle,
            content: this.postContent,
            state: 'publish'
        })
        .then(
          res => {
            this.$notify({
              title:'成功',
              message:"文章更新成功",
              type:'success'
            });
            this.$router.push('/admin');
          }
        )
      } else {
        this.$http.post('/api', {
          postInformation: obj
        })
        .then(
          res => {
            this.$notify({
              title:'成功',
              message:"文章发布成功",
              type:'success'
            });
            this.$router.push('/admin');
          }

        )
      }

    }
  }
}
</script>
