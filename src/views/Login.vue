<template>
  <div class="login">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
      <FormItem prop="name">
        <Input v-model="formValidate.name" placeholder="用户名" prefix="iconfont icon-qp_icon_actor"/>
      </FormItem>
      <FormItem prop="password">
        <Input :password="!typePwd" type="password" v-model="formValidate.password" placeholder="密码" prefix="iconfont icon-password"/>
      </FormItem>
      <FormItem>
        <Button type="primary" long @click="handleSubmit('formValidate')">登录</Button>
      </FormItem>
    </Form>
    <div class="footer">
      <span long @click="reg" class="link-blue">没账号去注册 > </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        formValidate:{
          name: '',
          password: ''
        },
        ruleValidate:{
          name: [
            { required: true, message: '请输入用户名！', trigger: 'blur' },
            { type: 'string', min: 2, message: '用户名至少有2位', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码！', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码至少有6位', trigger: 'blur' }
          ]
        },
        typePwd:false
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid && this.formValidate.name == localStorage.getItem('name') && this.formValidate.password == localStorage.getItem('password')) {
            this.$router.push('home/list') 
          } else {
            this.$Message['error']({
              background: true,
              content: '用户名或密码不正确！'
            });
          }
        })
      },
      reg () {
        this.$router.push('/reg')
      }
      //login () {
      //  if(this.name !=='' && this.password !== ''){
      //    if(this.name == localStorage.getItem('name') && this.password == localStorage.getItem('password')){
      //     this.$router.push('home/list')
      //    }else{
      //     this.$Message['error']({
      //         background: true,
      //         content: '用户名或密码不正确！'
      //     });
      //    }
      //  }else{
      //    this.$Message['error']({
      //         background: true,
      //         content: '用户名或密码不能为空！'
      //     });
      //  } 
      //},
      // reg () {
      //   if(this.name !== '' && this.password !== '' && this.repeatword !== ''){
      //     if(this.password === this.repeatword){
      //       localStorage.setItem('name',this.name)
      //       localStorage.setItem('password', this.password)

      //       this.name = ''
      //       this.password = ''

      //       this.isReg = true
      //     }else{
      //       this.$Message['error']({
      //         background: true,
      //         content: '两次输入密码不一致！'
      //       });
      //     }     
      //   }else{
      //     this.$Message['error']({
      //         background: true,
      //         content: '信息不能为空！'
      //     });
      //   }
        
      // }
    }
  }
</script>
<style lang='less'>
  .login{
    margin:0 auto;padding:2rem;
    .footer{text-align: center}
    .link-green{color:#19be6b;font-size: 12px}
    .link-blue{color:#2d8cf0;font-size: 12px}
  }
</style>
