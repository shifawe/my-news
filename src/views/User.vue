<template>
<div>
  <Header :title="title"></Header>
  <div class="user">
    <Card :padding="5" shadow>
      <CellGroup>
          <Cell to="/add">
            <Icon type="iconfont icon-edit" />
            发布新消息
          </Cell>
          <Cell to="/help">
            <Icon type="iconfont icon-question" />
            反馈与帮助
          </Cell>
      </CellGroup>
    </Card>
    <Divider dashed />
    <Button @click="out" type="success" long>退出</Button>
  </div>
</div>
</template>
<script>
  import Header from '@/components/Header'

  export default {
    name: 'User',
    components: { Header },
    data () {
      return {
        title: '用户中心'
      }
    },
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
 .user{padding:1rem;margin-top:42px;}
 .ivu-icon-iconfont{font-size: 18px}
</style>