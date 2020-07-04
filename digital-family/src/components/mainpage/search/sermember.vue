<template>
  <div class="sermember">
      <i class="el-icon-search" @click="addmember"></i><span @click="editmember">查找成</span><span @click="delmember">员信息</span>
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待查找的成员id：">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="请输入待查找的成员名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sermember">查找成员</el-button>
        </el-form-item>
        </el-form>
        <el-dialog title="成员查找结果" :visible.sync="dialogFormVisible">
          <ul class="serinfo">
            <li>成员id：{{nowmember.id}}</li>
            <li>成员姓名：{{nowmember.name}}</li>
            <li>家族名称：{{nowmember.family}}</li>
            <li>性别：{{nowmember.sex}}</li>
            <li>父亲姓名：{{nowmember.father}}</li>
            <li>出生日期：{{nowmember.birth}}</li>
            <li>个人简介：{{nowmember.intro}}</li>
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
      },
      members: [{
        id: '00001',
        name: '苏一杰',
        sex: '男',
        father: '苏武',
        family: '西南苏家',
        birth: '1999-02-01',
        intro: '普普通通的普通人'
      },
      {
        id: '000015',
        name: '苏十五杰',
        sex: '男',
        father: '苏十四杰',
        family: '西南苏家',
        birth: '1999-02-01',
        intro: '普普通通的普通人'
      }],
      nowmember: {

      }
    }
  },
  methods: {
    sermember () {
      let _this = this
      let isF = false
      _this.members.forEach((item) => {
        console.log(item, _this.form.id)
        if (item.id === _this.form.id) {
          isF = true
          _this.nowmember.id = item.id
          _this.nowmember.name = item.name
          _this.nowmember.sex = item.sex
          _this.nowmember.father = item.father
          _this.nowmember.birth = item.birth
          _this.nowmember.intro = item.intro
          _this.nowmember.family = item.family
        }
      })
      if (isF) {
        _this.dialogFormVisible = true
      } else {
        _this.$message('搜索的成员不存在！请重新输入')
      }
    },
    addmember () {
      this.members[1] = ''
    },
    editmember () {
      this.members[1].intro = '西南石油大学计算机科学学院学生'
    },
    delmember () {
      this.members[1].id = ''
    }
  },
  computed: {
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
