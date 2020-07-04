<template>
  <div class="sertree">
      <i class="el-icon-search"></i>查找树形图信息
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待查找的族谱id：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="请输入待查找的族谱名：">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sermap">查看树形图</el-button>
        </el-form-item>
        </el-form>
         <el-dialog title="树形图绘制结果" :visible.sync="dialogFormVisible">
          <img src="../../../assets/picture/tree.png" alt="">
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
      labelClassName: 'bg-white',
      dialogFormVisible: false,
      form: {
        name: '',
        id: ''
      }
    }
  },
  methods: {
    sermap () {
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
.treemap{
  position: relative;
  width: 700px;
  border: 1px solid black;
  top: -180px;
  left: 600px;
  height: 250px;
}
img{
  width: 930px;
}
</style>
