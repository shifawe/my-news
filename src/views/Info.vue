<template>
  <div class="add-form">
    <Form ref="formValidate" label-position="top" hide-required-mark :model="formValidate" :rules="ruleValidate">
      <FormItem prop="title" label="标题:">
        <Input v-model="formValidate.title" placeholder="请输入标题"/>
      </FormItem>
      <FormItem prop="content" label="内容:">
        <Input type="textarea" :rows="4" v-model="formValidate.content" placeholder="请输入内容..."/>
      </FormItem>
      <FormItem prop="user" label="浏览人数:">
        <Input disabled  v-model="formValidate.user" placeholder="0"/>
        </FormItem>
      <FormItem>
        <Button type="primary" long @click="save('formValidate')">保存</Button> 
      </FormItem>
      <FormItem>
        <Button long @click="back">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import store from '@/store'
  export default {
    name: 'Info',
    store,
    data () {
      return {
        formValidate:{
          title:'',
          content: '',
          user:''
        },
        ruleValidate:{
            title: [
              { required: true, message: '请输入标题', trigger: 'blur' }
            ],
            content: [
              { required: true, message: '请输入内容', trigger: 'blur' },
              { type: 'string', min: 20, message: '内容必须10个字以上！', trigger: 'blur' }
            ]
        }
      }
    },
    mounted: function() {
      this.$nextTick(function(){
        this.formValidate = store.state.lists[this.$route.params.id]
      })
    },
    methods: {
      save (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
              store.commit({
                type:'saveItem',
                data: {
                  index: this.$route.params.id,
                  item: this.formValidate
                }
              })

              this.$router.push('/home/list')
            } else {
                this.$Message.error('保存失败!');
            }
        })  
      },

      back(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style scope>
  .ivu-form-item-label{
    font-size: 14px;font-weight: 700;text-indent: 2px;
  }
</style>
