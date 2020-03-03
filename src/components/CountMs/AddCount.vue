<template>
  <div>
    <h1>添加账号</h1>
    <el-form :model="ruleForm" status-icon label-width="100px" class="demo-ruleForm">
      <el-form-item label="账户" prop="acount">
        <el-input type="text" v-model="ruleForm.acount" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户组">
        <el-select v-model="ruleForm.group" placeholder="请选择用户组">
          <el-option label="超级管理员" value="vip"></el-option>
          <el-option label="普通管理员" value="normal"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        acount: "",
        pwd: "",
        group: "超级管理员"
      }
    };
  }
};
</script>
<style lang="less">
</style>