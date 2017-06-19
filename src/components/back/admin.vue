<template lang="html">
  <div>
    <el-row class="panel">
      <el-row class="panel-top">
        <el-col :span='23' class="panel-top" :push="1">
        <!-- push就是相对定位了 -->
        <!--  offset设置的是margin-lef-->
        <el-col :span="20" style='font-size:26px'>
          <span>Howell</span>
        </el-col>
        <el-col :span='4' class='rightbar'>
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;font-weight:700">
              更多操作<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="toHome">博客首页</el-dropdown-item>
              <el-dropdown-item divided @click.native="con">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        </el-col>
      </el-row>
      <el-row  class="panel-center">
        <el-col :span="5">
          <el-menu theme="dark" mode="vertical" default-active="1" class="el-menu-vertical-demo">
            <el-menu-item-group title="管理面板">
              <router-link to="/admin"><el-menu-item index="1"><i class="el-icon-menu"></i>文章管理</el-menu-item></router-link>
              <router-link to="/admin/articleEdit"><el-menu-item index="2"><i class="el-icon-plus"></i>创建文章</el-menu-item></router-link>
            </el-menu-item-group>
          </el-menu>
        </el-col>
          <!-- 左侧导航结束 -->
        <el-col :span='19' class="panel-c-c">
          <router-view></router-view>
        </el-col>
        <!--  面包屑导航结束-->
      </el-row>
    </el-row>
  </div>
</template>

<script>

</script>

<style media="screen">
  .panel{
    position:absolute;
    top:0;
    bottom: 0;
    width:100%;
    background:#1F2D3D;
  }
  .panel-top{
    height: 100px;
    line-height: 100px;
    background: #1F2D3D;
    color: #c0ccda;
  }
  .panel-top .rightbar{
    text-align: right;
    padding-right: 70px;
  }
  .panel-center{
    background: #324057;
    position: absolute;
    top: 100px;
    bottom: 0px;
    width: 100%;
    overflow: hidden;
    /*最外层要hidden*/
    /*这是行，绝对定位之后没有宽度因此必须设置width*/
  }
  .breadcrumb{
    margin-bottom:15px;
  }
  .panel-c-c{
    /*这是列，因为已经有了列的宽度因此无需设置width*/
    background: #f1f2f7;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    overflow-y: scroll;
    /*内层设置滚动*/
    padding: 30px;
  }
</style>
