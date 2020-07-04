<template>
  <div class="serrelation">
     <i class="el-icon-search"></i>查找直系亲属关系
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待查找的成员名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="请输入待查找的成员id：">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sermember">查找亲属</el-button>
        </el-form-item>
        </el-form>
        <el-dialog title="亲属信息" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="id" label="成员id" width="150"></el-table-column>
            <el-table-column property="name" label="成员姓名" width="200"></el-table-column>
            <el-table-column property="father" label="成员父亲"></el-table-column>
            <el-table-column property="sex" label="成员性别"></el-table-column>
            <el-table-column property="relation" label="关系"></el-table-column>
          </el-table>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
          </div>
        </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gridData: [{
        ser: '苏十杰',
        name: '苏十四杰',
        id: '000014',
        sex: '男',
        father: '苏十杰',
        relation: '父子'
      }, {
        ser: '苏十杰',
        name: '苏十一杰',
        id: '000011',
        sex: '男',
        father: '苏五杰',
        relation: '兄弟'
      }, {
        ser: '苏十杰',
        name: '叶氏',
        id: '000030',
        sex: '女',
        father: '无记录',
        relation: '夫妻'
      }, {
        ser: '苏十杰',
        name: '苏十三杰',
        id: '000013',
        sex: '男',
        father: '苏五杰',
        relation: '兄弟'
      }, {
        ser: '苏十杰',
        name: '苏五杰',
        id: '00005',
        sex: '男',
        father: '苏四杰',
        relation: '父子'
      }, {
        ser: '苏四杰',
        name: '苏五杰',
        id: '00005',
        sex: '男',
        father: '苏四杰',
        relation: '父子'
      }, {
        ser: '苏四杰',
        name: '苏六杰',
        id: '00006',
        sex: '男',
        father: '苏四杰',
        relation: '父子'
      }, {
        ser: '苏四杰',
        name: '苏三',
        id: '000025',
        sex: '男',
        father: '苏四杰',
        relation: '父女'
      }, {
        ser: '苏四杰',
        name: '苏一杰',
        id: '00001',
        sex: '男',
        father: '苏武',
        relation: '父子'
      }],
      dialogTableVisible: false,
      form: {
        name: '',
        id: ''
      }
    }
  },
  methods: {
    sermember () {
      this.dialogTableVisible = true
      if (this.form.name === '苏十杰') {
        this.gridData = [{
          ser: '苏十杰',
          name: '苏十四杰',
          id: '000014',
          sex: '男',
          father: '苏十杰',
          relation: '父子'
        }, {
          ser: '苏十杰',
          name: '苏十一杰',
          id: '000011',
          sex: '男',
          father: '苏五杰',
          relation: '兄弟'
        }, {
          ser: '苏十杰',
          name: '叶氏',
          id: '000030',
          sex: '女',
          father: '无记录',
          relation: '夫妻'
        }, {
          ser: '苏十杰',
          name: '苏十三杰',
          id: '000013',
          sex: '男',
          father: '苏五杰',
          relation: '兄弟'
        }, {
          ser: '苏十杰',
          name: '苏五杰',
          id: '00005',
          sex: '男',
          father: '苏四杰',
          relation: '父子'
        }]
      } else {
        this.gridData = [{
          ser: '苏四杰',
          name: '苏五杰',
          id: '00005',
          sex: '男',
          father: '苏四杰',
          relation: '父子'
        }, {
          ser: '苏四杰',
          name: '苏六杰',
          id: '00006',
          sex: '男',
          father: '苏四杰',
          relation: '父子'
        }, {
          ser: '苏四杰',
          name: '苏三',
          id: '000025',
          sex: '男',
          father: '苏四杰',
          relation: '父女'
        }, {
          ser: '苏四杰',
          name: '苏一杰',
          id: '00001',
          sex: '男',
          father: '苏武',
          relation: '父子'
        }]
      }
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
</style>
