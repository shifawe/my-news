<template>
  <div class="add-form">
    <p><input type="text" v-model="title" class="input" placeholder="标题"></p>
    <p>
      <textarea class="input inp-area" v-model="content" placeholder="内容"></textarea>
    </p>
    <p><a href="javascript:;" class="btn" @click="save">保存</a></p>
    <p><a href="javascript:;" class="btn btn-gray" @click="back">返回</a></p>
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
        this.title = store.state.list[this.$route.params.id].title
        this.content = store.state.list[this.$route.params.id].content
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
