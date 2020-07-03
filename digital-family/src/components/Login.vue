<template>
  <el-row class="login-page" :style="{background: url}">
    <el-row class="pagewrap" >
        <el-row class="regsiter-title">
            <p>族谱管理系统</p>
            <span>为高效管理族谱而生~</span>
        </el-row>
        <el-divider class="line"></el-divider>
        <el-row class="msgbox">
         <el-form ref="form" :model="loginForm" label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="loginForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
            <el-input v-model="loginForm.password" show-password></el-input>
          </el-form-item>
        </el-form>
        </el-row>
        <div class="regis">
          <el-radio v-model="radio" label="1">记住密码</el-radio>
          <span @click="dialogFormVisible = true">注册账号</span>
        </div>
        <el-button class="loginbtn" type="primary" @click="login">登陆</el-button>
        <div class="foot">
           <p>copyright@2020 西柚之"鑫"制作</p>
        </div>
        <!-- 注册页面-->
        <el-dialog title="注册账号" :visible.sync="dialogFormVisible">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="age">
            <el-input v-model.number="ruleForm.user"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="regisUser">提交</el-button>
            <el-button @click="dialogFormVisible = false" >取消</el-button>
          </el-form-item>
        </el-form>
        </el-dialog>
  </el-row>
  </el-row>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      url: 'url(' + require('@/assets/picture/img1.png') + ')',
      radio: '',
      dialogFormVisible: false,
      loginForm: {
        name: '',
        password: ''
      },
      regForm: {
        name: '',
        password: ''
      },
      userList: [{name: 'tandake', passwd: '123456'}],
      formLabelWidth: '120px',
      ruleForm: {
        pass: '',
        checkPass: '',
        user: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    regisUser () {
      this.dialogFormVisible = false
      let useritem = {}
      useritem.name = this.ruleForm.user
      useritem.passwd = this.ruleForm.pass
      this.userList.push(useritem)
      this.ruleForm.user = ''
      this.ruleForm.pass = ''
      this.ruleForm.checkPass = ''
    },
    login () {
      let isRight = false
      this.userList.forEach((item, index) => {
        if (item.name === this.loginForm.name && item.passwd === this.loginForm.password) {
          isRight = true
        }
      })
      if (!isRight) {
        this.$message({
          message: '密码错误或账号不存在',
          type: 'warning'
        })
        this.loginForm.password = ''
      } else {
        this.$router.push({
          path: '/Index/mainInfo'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
@import "@/assets/css/login.scss";
</style>
