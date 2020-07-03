<template>
  <div class="delfamily">
      <i class="el-icon-delete"></i>删除家族
      <el-divider></el-divider>
            <div class="delform">
        <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待删除的族谱id：">
          <el-input v-model="delform.id"></el-input>
        </el-form-item>
        <el-form-item label="请输入待删除的族谱名：">
          <el-input v-model="delform.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="delfamily">立即删除</el-button>
        </el-form-item>
        </el-form>
      </div>
      <el-dialog title="以下是您将要删除的族谱信息，请确认是否删除！" :visible.sync="dialogFormVisible">
        <ul class="delinfo">
          <li>族谱id：0001</li>
          <li>族谱名：四川谭氏</li>
          <li>族谱姓氏：谭</li>
          <li>家训：天行健，君子以自强不息</li>
          <li>介绍：一个默默无闻的家族</li>
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
      formLabelWidth: '80px',
      familyid: '',
      delform: {
        name: '',
        id: ''
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    delfamily () {
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
.delfamily{
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
