<template>
  <div class="home">
    <div class="nav">
      <router-link to="/home/list">信息列表</router-link> |
      <router-link to="/home/user">个人中心</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'Home'
  }
</script>
<style scope>
  .nav{
    margin:0 auto;
  }
</style>