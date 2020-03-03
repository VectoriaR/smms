<template>
  <el-row :gutter="20" class="bak">
    <el-col :span="12" :offset="6">
      <div class="grid-content bg-purple login">
        <h1>系统登陆</h1>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input class="input" type="text" v-model="ruleForm.username" autocomplete="off">
              <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input class="input" type="password" v-model="ruleForm.pwd" autocomplete="off">
              <i slot="prefix" class="el-input__icon el-icon-view"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="input" type="primary" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        pwd: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/home");
    }
  }
};
</script>
<style lang="less" scoped>
.bak {
  padding: 10% 0;
  color: #ffffff;
  position: fixed;
  height: 100%;
  width: 100%;
  background: #2d3a4b;
  .login {
    padding: 10px 20px;
    text-align: center;
    h1 {
      text-align: center;
      margin: 0 0 50px 0;
    }

    .el-form-item__content {
      .el-input {
        width: 80%;
        height: 50px;
        line-height: 50px;
      }
      .el-button--primary {
        width: 80%;
      }
    }
  }
}
</style>