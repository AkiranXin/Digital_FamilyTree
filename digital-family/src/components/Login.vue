<template>
  <el-row class="login-page" :style="{background: url}">
    <el-row class="pagewrap" >
        <el-row class="regsiter-title">
            <p>族谱管理系统</p>
            <span>为高效管理族谱而生~</span>
        </el-row>
        <el-divider class="line"></el-divider>
        <el-row class="msgbox">
         <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        </el-row>
        <div class="regis">
          <el-radio v-model="radio" label="1">记住密码</el-radio>
          <span @click="dialogFormVisible = true">注册账号</span>
        </div>
        <el-button class="loginbtn" type="primary">登陆</el-button>
        <div class="foot">
           <p>copyright@2020 西柚之"鑫"制作</p>
        </div>
        <!-- 注册页面-->
        <el-dialog title="注册账号" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="账户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="账号密码" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>
  </el-row>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      url: 'url(' + require('@/assets/picture/img1.png') + ')',
      radio: '',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "@/assets/css/login.scss";
</style>
