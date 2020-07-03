<template>
  <div class="editmemeber">
      <i class="el-icon-s-tools"></i>编辑成员信息
      <el-divider></el-divider>
      <div class="editform">
        <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待编辑的成员id：">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="请输入待编辑的成员名：">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
        </el-form>
      </div>
      <el-dialog title="编辑新的成员信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="成员姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="成员id" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="成员性别" :label-width="formLabelWidth">
            <el-input v-model="form.sex" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="成员父亲" :label-width="formLabelWidth">
            <el-input v-model="form.father" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="成员生日" :label-width="formLabelWidth">
            <el-input v-model="form.birth" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmedit">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      dialogFormVisible: false,
      form: {
        name: 'hhh',
        id: 'hhh',
        sex: 'hhh',
        father: 'hhh',
        birth: '2020-5-14'
      }
    }
  },
  methods: {
    onSubmit () {
      this.dialogFormVisible = true
    },
    confirmedit () {
      this.dialogFormVisible = false
      this.$message({
        type: 'success',
        message: '修改成功!'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.editmemeber{
  i{
    font-size: 30px;
    color: #409EFF;
    margin-right: 10px;
  }
  .editform{
    width: 400px;
  }
  .el-form{
    width: 400px;
  }
}
</style>
