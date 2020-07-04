<template>
  <div class="serfamily">
      <i class="el-icon-search" @click="addfamily" ></i><span @click="xiugaifamily"  >查询族</span><span @click="delfamily">谱信息</span>
      <el-divider></el-divider>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="请输入待查找的族谱id：">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="请输入待查找的族谱名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="sermember">查找族谱</el-button>
        </el-form-item>
        </el-form>
        <el-dialog title="族谱查找结果" :visible.sync="dialogFormVisible">
          <ul class="serinfo">
            <li>族谱id：{{nowfamilys.id}}</li>
            <li>族谱名：{{nowfamilys.name}}</li>
            <li>族谱姓氏：{{nowfamilys.familyname}}</li>
            <li>家训：{{nowfamilys.saying}}</li>
            <li>介绍：{{nowfamilys.intro}}</li>
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
      familys: [{
        id: '000001',
        name: '西南苏家',
        familyname: '苏',
        saying: '天行健，君子以自强不息',
        intro: '西南的苏氏家族'
      },
      {
        id: '000002',
        name: '西南谭家',
        familyname: '谭',
        saying: '己所不欲，勿施于人',
        intro: '西南的谭氏家族'
      },
      {
        id: '000003',
        name: '西南沈家',
        familyname: '沈',
        saying: '厚德载物',
        intro: '西南的沈氏家族'
      }],
      nowfamily: {

      },
      editfamily: {
        id: '000002',
        name: '西南谭家',
        familyname: '谭',
        saying: '岁寒，然后知松柏之后凋也',
        intro: '西南的谭氏家族'
      }
    }
  },
  methods: {
    sermember () {
      let _this = this
      let isF = false
      _this.familys.forEach((item) => {
        console.log(item, _this.form.id)
        if (item.id === _this.form.id) {
          isF = true
          _this.nowfamily.id = item.id
          _this.nowfamily.name = item.name
          _this.nowfamily.familyname = item.familyname
          _this.nowfamily.saying = item.saying
          _this.nowfamily.intro = item.intro
        }
      })
      if (isF) {
        _this.dialogFormVisible = true
      } else {
        _this.$message('搜索的家族不存在！请重新输入')
      }
    },
    xiugaifamily () {
      this.familys[1].saying = '岁寒，然后知松柏之后凋也'
      console.log(1)
    },
    delfamily () {
      this.familys[2] = ''
    },
    addfamily () {
      this.familys[2] = ''
    }
  },
  computed: {
    nowfamilys () {
      return this.nowfamily
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
