<template>
  <div class="login">
    <form action="" v-if="isReg">
      <p>
        <Input v-model="name" placeholder="用户名"/>
      </p>
      <p>
        <Input v-model="password" placeholder="密码"/>
        </p>
      <p>
        <Button type="primary" long @click="login">登录</Button>
        <Divider dashed />
        <Button type="text" long @click="isReg = false" class="link-blue">没账号去注册</Button>
      </p>
    </form>
    <form action="" v-else>
      <p>
        <Input v-model="name" placeholder="用户名"/>
      </p>
      <p>
        <Input v-model="password" placeholder="密码"/>
      </p>
      <p>
        <Input v-model="repeatword" placeholder="确认密码"/>
      </p>
      <p>
        <Button type="info" long @click="reg">注册</Button>
        <Divider dashed />
        <Button type="text" long @click="isReg = true" class="link-green">有账号去登录</Button>
      </p>
    </form>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        isReg: true,
        name: '',
        password:'',
        repeatword: ''
      }
    },
    methods: {
      login () {
       if(this.name !=='' && this.password !== ''){
         if(this.name == localStorage.getItem('name') && this.password == localStorage.getItem('password')){
          this.$router.push('home/list')
         }else{
          this.$Message['error']({
              background: true,
              content: '用户名或密码不正确！'
          });
         }
       }else{
         this.$Message['error']({
              background: true,
              content: '用户名或密码不能为空！'
          });
       } 
      },
      reg () {
        if(this.name !== '' && this.password !== '' && this.repeatword !== ''){
          if(this.password === this.repeatword){
            localStorage.setItem('name',this.name)
            localStorage.setItem('password', this.password)

            this.name = ''
            this.password = ''

            this.isReg = true
          }else{
            this.$Message['error']({
              background: true,
              content: '两次输入密码不一致！'
            });
          }     
        }else{
          this.$Message['error']({
              background: true,
              content: '信息不能为空！'
          });
        }
        
      }
    }
  }
</script>
<style lang='less'>
  .login{
    margin:0 auto;padding:2rem;
    p{padding:10px 0}
    .btn{
      margin:10px auto;
    }
    .link-green{color:#19be6b}
    .link-blue{color:#2d8cf0}
  }
</style>
