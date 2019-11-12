<template>
  <div class="add-form">
    <p>
      <Input v-model="title" placeholder="请输入标题"/>
    </p>
    <p>
      <Input v-model="content" type="textarea" :rows="4" placeholder="请输入内容..." />
    </p>
    <p>
      <Button type="primary" long @click="save">保存</Button>
    </p>
    <p>
      <Button long @click="back">取消</Button>
    </p>
  </div>
</template>
<script>
import store from '@/store'
  export default {
    name: 'Info',
    store,
    data () {
      return {
        title: '',
        content: ''
      }
    },
    mounted: function() {
      this.$nextTick(function(){
        this.title = store.state.lists[this.$route.params.id].title
        this.content = store.state.lists[this.$route.params.id].content
      })
    },
    methods: {
      save() {
        store.commit({
          type:'saveItem',
          data: {
            index: this.$route.params.id,
            item:{
              title: this.title,
              content: this.content
            }
          }
        })

        this.$router.push('/home/list')
      },

      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style scope>

</style>
