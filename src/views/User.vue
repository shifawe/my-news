<template>
  <div class="user">
    <Card title="设置" icon="ios-options" :padding="0" shadow>
      <CellGroup>
          <Cell title="发布新消息" to="/add" />
      </CellGroup>
    </Card>
    <Divider dashed />
    <Button @click="out" type="warning" long>退出</Button>
  </div>
</template>
<script>
  export default {
    name: 'User',
    methods:{
      // iview 组件 to 替代
      // add () {
      //   this.$router.push('/add')
      // }
      out () {
        this.$router.push('/')
      }
    }
  }
</script>
<style scope>
 .user{padding:1rem;}
</style>