<template lang="html">
  <div class="list">
    <el-row>
      <el-col :span='24' >
          <el-table
             style='width:100%'  align="center" :data="posts"v-loading="listLoading" element-loading-text="拼命加载中">
              <el-table-column type='index' width="60" ></el-table-column>
              <el-table-column  prop="date" width="180" label="创建时间" ></el-table-column>
              <el-table-column  prop="title" width="320" label="文章标题" ></el-table-column>
              <el-table-column  label="操作" >
                <template scope='scope'>
                  <!--这里点击查看进入具体页面但是路径中必须带有admin,这时具体页面里会出现评论的删除选项  -->
                  <el-button size="small" @click="read(scope.row._id)">查看</el-button>
                  <el-button size="small" type='primary' @click="editArticle(scope.row._id)">编辑</el-button>
                  <el-button size="small" type='danger' @click="remove(scope.row._id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from 'moment';
import objectidToTimestamp from 'objectid-to-timestamp';
export default {
  created() {
    this.listLoading = true;
    this.getPost();
  },
  data() {
    return {
      posts: [],
      listLoading: false
    }
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
        this.listLoading = false;
      });
    },
    read(id) {
      this.$router.push({
        name: 'postDetail',
        params: { id: id }
      });
    },
    editArticle(id) {
      this.$router.push({
        name: 'EditArticle',
        params: { id: id }
      })
    },
    remove(id) {
      this.$confirm('确认要删除吗?','提醒',{
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type:'waring'
    })
    .then(()=>{
      this.listLoading = true;
      this.$http.delete(`/api/${id}`)
          .then(()=>{
            this.listLoading = false;
            this.$notify({
              title:'成功',
              message:"删除成功",
              type:'success'
            })
            this.getPost()
          })
    }).catch((err) => {
      console.log(err);
    })
    }
  }
}

</script>
