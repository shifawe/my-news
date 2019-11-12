<template>
  <div>
    <a href="javascript:;" class="btn" @click="add">去添加</a>
  </div>
</template>
<script>
  export default {
    name: 'User',
    methods:{
      add () {
        this.$router.push('/add')
      }
    }
  }
</script>
<style scope>

</style>