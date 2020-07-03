<template>
      <div class="delmember">
      <i class="el-icon-delete"></i>删除成员
      <el-divider></el-divider>
        <div class="delform">
        <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待删除的成员id：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="请输入待删除的成员名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="delmember">删除成员</el-button>
        </el-form-item>
        </el-form>
      </div>
      <el-dialog title="以下是您将要删除的成员信息，请确认是否删除！" :visible.sync="dialogFormVisible">
        <ul class="delinfo">
          <li>成员姓名：123</li>
          <li>成员id：456</li>
          <li>性别：xx</li>
          <li>父亲姓名：xxx</li>
          <li>出生日期：xxxxxxxxx</li>
          <li>个人简介：xxxxxxxxxxx</li>
        </ul>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmdel">删 除</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: ''
      }
    }
  },
  methods: {
    delmember () {
      this.dialogFormVisible = true
    },
    confirmdel () {
      this.dialogFormVisible = false
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.delmember{
  i{
    font-size: 30px;
    color: #409EFF;
    margin-right: 10px;
  }
  .delform{
    width: 400px;
  }
  .delinfo{
     li{
       margin-top: 10px;
     }
  }
}
</style>
