<template>
  <div class="add-form">
   <p>
     <span class="label">标题:</span>
     <input type="text" name="标题" id="" v-model="title" class="input" placeholder="标题">
    </p>
   <p>
     <span class="label">内容:</span>
    <textarea class="input inp-area" v-model="content" placeholder="内容"></textarea>
    </p>
   <p><a href="javascript:;" class="btn" @click="add">添加</a></p>
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
      }
    }
  }
</script>
<style scope lang='less'>
@import '../less/z.less';
  .label{
    .tl;.db;.bc-d(258px);padding:5px 0;font-size: 14px;font-weight: 700
  }
</style>