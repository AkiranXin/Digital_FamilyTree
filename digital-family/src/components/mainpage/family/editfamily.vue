<template>
  <div class="editfamily">
      <i class="el-icon-setting"></i>修改家谱
      <el-divider></el-divider>
      <div class="editform">
        <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待编辑的族谱id：">
          <el-input v-model="editform.id"></el-input>
        </el-form-item>
        <el-form-item label="请输入待编辑的族谱名：">
          <el-input v-model="editform.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
        </el-form-item>
        </el-form>
      </div>
      <el-dialog title="编辑新的族谱信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="族谱名" :label-width="formLabelWidth">
            <el-input v-model="form.familyName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="族谱id" :label-width="formLabelWidth">
            <el-input v-model="form.familyid" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="族谱姓氏" :label-width="formLabelWidth">
            <el-input v-model="form.familyX" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="家训" :label-width="formLabelWidth">
            <el-input v-model="form.familySay" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="族谱简介" :label-width="formLabelWidth">
            <el-input v-model="form.familyIntro" autocomplete="off"></el-input>
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
      dialogFormVisible: false,
      editform: {
        id: '',
        name: ''
      },
      form: {
        familyName: '四川谭氏',
        familyX: '谭',
        familySay: '天行健，君子以自强不息',
        familyIntro: '一个默默无闻的家族',
        familyid: '0001'
      },
      formLabelWidth: '80px'
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
.editfamily{
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
