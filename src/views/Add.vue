<template>
<div>
  <Header :title="title" :type="skin">
    <span slot="left" @click="back">
      <Icon type="ios-arrow-back" />
    </span>
  </Header>
  <div class="add-form">
    <Form ref="formValidate" label-position="top" hide-required-mark :model="formValidate" :rules="ruleValidate">
      <FormItem prop="title" label="标题:">
        <Input v-model="formValidate.title" placeholder="请输入标题"/>
      </FormItem>
      <FormItem prop="content" label="内容:">
        <Input type="textarea" :rows="4" v-model="formValidate.content" placeholder="请输入内容..."/>
      </FormItem>
      <FormItem>
        <Button type="info" long @click="add('formValidate')">发布</Button> 
      </FormItem>
    </Form>
  </div>
</div>
</template>
<script>
  import store from '@/store'
  import Header from '@/components/Header'

  export default {
    name: 'Add',
    components: { Header },
    store,
    data () {
      return {
        title:'添加新闻',
        skin: 'blue',
        formValidate:{
          title:'',
          content: ''
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
    methods: {
      add (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
              store.commit('addItem', {
                title: this.formValidate.title,
                content: this.formValidate.content,
                user: '0'
              })
               this.$router.push('/home/list')
            } else {
              this.$Message['error']({
                background: true,
                content: '发布失败!'
              });
            }
        })
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scope lang='less'>
  .ivu-form-item-label{
    font-size: 14px;font-weight: 700;text-indent: 2px;
  }
</style>