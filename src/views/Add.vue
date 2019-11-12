<template>
  <div class="add-form">
   <p>
     <span class="label">标题:</span>
     <Input v-model="title" placeholder="请输入标题"/>
    </p>
   <p>
     <span class="label">内容:</span>
     <Input v-model="content" type="textarea" :rows="4" placeholder="请输入内容..." />
    </p>
   <p>
     <Button type="primary" long @click="add">发布</Button>
    </p>
    <p>
     <Button long @click="back">返回</Button>
    </p>
  </div>
</template>
<script>
  import store from '@/store'

  export default {
    name: 'Add',
    store,
    data () {
      return {
        title:'',
        content: ''
      }
    },
    methods: {
      add () {
        store.commit('addItem', {
          title: this.title,
          content: this.content,
          user: '0'
        })

        this.$router.push('/home/list')
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scope lang='less'>
@import '../less/z.less';
  .label{
    .tl;.db;padding:5px 0;font-size: 14px;font-weight: 700
  }
 
</style>