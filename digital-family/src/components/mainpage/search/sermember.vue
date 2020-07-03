<template>
  <div class="sermember">
      <i class="el-icon-search"></i>查找成员信息
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待查找的成员id：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="请输入待查找的成员名：">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sermember">查找成员</el-button>
        </el-form-item>
        </el-form>
        <el-dialog title="成员查找结果" :visible.sync="dialogFormVisible">
          <ul class="serinfo">
            <li>成员姓名：123</li>
            <li>成员id：456</li>
            <li>性别：xx</li>
            <li>父亲姓名：xxx</li>
            <li>出生日期：xxxxxxxxx</li>
            <li>个人简介：xxxxxxxxxxx</li>
          </ul>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
        name: '',
        id: ''
      }
    }
  },
  methods: {
    sermember () {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
i{
  font-size: 25px;
  color:#409EFF;
  margin-right: 8px;
}
.el-form{
  width: 400px;
}
.serinfo{
  li{
       margin-top: 10px;
     }
}
</style>
