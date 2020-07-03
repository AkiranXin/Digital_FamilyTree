<template>
  <div class="addfamily">
      <i class="el-icon-folder-add"></i>添加族谱
      <el-divider></el-divider>
      <div class="addform">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="族谱名">
          <el-input v-model="form.familyName"></el-input>
        </el-form-item>
        <el-form-item label="族谱id">
          <el-input v-model="form.familyid"></el-input>
        </el-form-item>
        <el-form-item label="族谱姓氏">
          <el-input v-model="form.familyX"></el-input>
        </el-form-item>
        <el-form-item label="家训">
          <el-input v-model="form.familySay"></el-input>
        </el-form-item>
        <el-form-item label="族谱简介">
          <el-input v-model="form.familyIntro" type="textarea" :rows="5"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
        familyName: '',
        familyX: '',
        familySay: '',
        familyIntro: '',
        familyid: ''
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
        this.form.familyid = ''
        this.form.familyName = ''
        this.form.familyX = ''
        this.form.familySay = ''
        this.form.familyIntro = ''
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.addfamily{
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
