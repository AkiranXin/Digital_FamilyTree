<template>
  <div class="allfac">
      <ul>
        快捷功能选择
        <el-divider></el-divider>
        <li><router-link :to="{name: 'familyAdd'}" tag='button' type="info"><i class="el-icon-folder-add"></i><span>添加族谱</span></router-link></li>
        <li><router-link :to="{name: 'familyEdit'}" tag='button' type="info"><i class="el-icon-setting"></i><span>修改族谱</span></router-link></li>
        <li><router-link :to="{name: 'familyDel'}" tag='button' type="info"><i class="el-icon-delete"></i><span>删除族谱</span></router-link></li>
        <li><router-link :to="{name: 'memberAdd'}" tag='button' type="info"><i class="el-icon-s-custom"></i><span>添加成员</span></router-link></li>
        <li><router-link :to="{name: 'memberEdit'}" tag='button' type="info"><i class="el-icon-s-tools"></i><span>修改成员</span></router-link></li>
        <li><router-link :to="{name: 'memberDel'}" tag='button' type="info"><i class="el-icon-delete"></i><span>删除成员</span></router-link></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.allfac{
  ul{

    width: 600px;
    cursor: pointer;
    li{
      float: left;
      width: 200px;
      height: 50px;
      margin-top: 20px;
      line-height: 50px;
    }
    button{
      height: 60px;
      width: 110px;
      font-size: 16px;
      i{
        color: royalblue;
        margin-right: 5px;
      }
    }
  }
}
</style>
