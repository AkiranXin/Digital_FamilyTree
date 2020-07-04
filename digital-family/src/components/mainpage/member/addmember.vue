<template>
  <div class="addmember">
      <i class="el-icon-s-custom"></i>添加成员信息
      <el-divider></el-divider>
      <div class="addform">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="成员姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="成员id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="家族名">
          <el-input v-model="form.family"></el-input>
        </el-form-item>
        <el-form-item label="父亲名">
          <el-input v-model="form.father"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker
      v-model="form.birth"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
</el-form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        id: '',
        sex: '',
        father: '',
        birth: '',
        intro: '',
        family: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$confirm('确认添加吗？').then(() => {
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
        this.form.name = ''
        this.form.id = ''
        this.form.sex = ''
        this.form.father = ''
        this.form.birth = ''
        this.form.intro = ''
        this.form.family = ''
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.addmember{
  i{
    font-size: 30px;
    color: #409EFF;
    margin-right: 10px;
  }
  .addform{
    width: 400px;
  }
}
</style>
