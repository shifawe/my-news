<template>
  <div class="login">
    <p><input type="text" class="input" placeholder="用户名"></p>
    <p><input type="text" class="input" placeholder="密码"></p>
    <p><a href="javascript:;" class="btn" @click="save">保存</a></p>
    <a href="javascript:;" class="btn" @click="login">l</a>
    <a href="javascript:;" class="btn">r</a>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    methods: {
      login () {
        this.$router.push('home/list')
      }
    }
  }
</script>
<style lang='less'>
  .login{
    margin:0 auto;
    .btn{
      margin:10px auto;
    }
  }
</style>
