<template>
  <div class="allfac">
      <ul>
        快捷功能选择
        <el-divider></el-divider>
        <li><el-button type="info"><i class="el-icon-folder-add"></i><span>添加族谱</span></el-button></li>
        <li><el-button type="info"><i class="el-icon-setting"></i><span>修改族谱</span></el-button></li>
        <li><el-button type="info"><i class="el-icon-delete"></i><span>删除族谱</span></el-button></li>
        <li><el-button type="info"><i class="el-icon-s-custom"></i><span>添加成员</span></el-button></li>
        <li><el-button type="info"><i class="el-icon-s-tools"></i><span>修改成员</span></el-button></li>
        <li><el-button type="info"><i class="el-icon-delete"></i><span>删除成员</span></el-button></li>
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
      height: 50px;
    }
  }
}
</style>
