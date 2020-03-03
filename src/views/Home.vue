<template>
  <el-row>
    <el-col :span="4" id="leftF">
      <div class="grid-content bg-purple">
        <div class="nav">
          <h2>
            <i class="el-icon-dish-1"></i>外卖商家中心
          </h2>
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <router-link to="/orderList">
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品列表</el-menu-item>
              <el-menu-item index="1-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-shopping-bag-1"></i>
            <span slot="title">店铺管理</span>
          </el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <router-link to="/addCount">
                <el-menu-item index="1-1">添加账号</el-menu-item>
              </router-link>
              <el-menu-item index="1-2">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>销售统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">商品统计</el-menu-item>
              <el-menu-item index="1-2">订单统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="20" id="rightF">
      <div class="grid-content bg-purple-light nav">
        <el-col :span="20">
          <el-breadcrumb separator-class="el-icon-arrow-right ">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="4" class="navRight">你好呀，小凋残</el-col>
      </div>
      <div id="show">
        <router-view></router-view>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped  lang="less">
@304: #304156;
@h: 80px;
.el-row {
  #leftF {
    background: @304;
    height: 100%;
    .el-menu {
      border: 0;
    }
    .nav {
      height: @h;
      line-height: @h;
      h2 {
        color: #ffffff;
        background: @304;
      }
      i {
        display: inline-block;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: #1296db;
        text-align: center;
        padding: 5px;
        color: @304;
        font-size: 36px;
        margin-right: 10px;
      }
    }
  }
}
#rightF {
  background: #f0f2f5;
  .nav {
    padding: 0 10px;
    height: @h;
    line-height: @h;
    color: #000000;
    background: #ffffff;
    .el-breadcrumb {
      font-size: 20px;
      line-height: @h;
    }
    a {
      text-decoration: none;
    }
  }
  #show {
    height: 800px;
  }
}
</style>