<template>
  <div>
   <p><input autocomplete="off" type="text" name="标题" id="" v-model="title" class="input" placeholder="标题"></p>
   <p><input autocomplete="off" type="text" name="内容" id="" v-model="content" class="input" placeholder="内容"></p>
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
          content: this.content
        })

        this.$router.push('/home/list')
      }
    }
  }
</script>
<style scope>

</style>