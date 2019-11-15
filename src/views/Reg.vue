<template>
  <div class="login">
      <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
        <FormItem>
          <span class="title">账号注册</span>
        </FormItem>
        <FormItem prop="name">
          <Input v-model="formCustom.name" placeholder="用户名" prefix="iconfont icon-qp_icon_actor"/>
        </FormItem>
        <FormItem prop="password">
          <Input v-model="formCustom.password" placeholder="密码" prefix="iconfont icon-password"/>
        </FormItem>
        <FormItem prop="repeatword">
          <Input v-model="formCustom.repeatword" placeholder="确认密码" prefix="iconfont icon-password"/>
        </FormItem>
        <FormItem>
          <Button type="success" long @click="handleSubmit('formCustom')">注册</Button>
        </FormItem>
      </Form>
      <div class="footer">
        <span long @click="login" class="link-green">有账号去登录 > </span>
      </div>
  </div>
</template>
<script>
  export default {
    name: 'Reg',
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formCustom.repeatword !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('repeatword');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入确认密码'));
        } else if (value !== this.formCustom.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        formCustom: {
          name: '',
          password: '',
          repeatword: ''
        },
        ruleCustom: {
          name: [
            { required: true, message: '请输入用户名！', trigger: 'blur' },
            { type: 'string', min: 2, message: '用户名至少有2位', trigger: 'blur' }
          ],
          password: [
            { type: 'string', min: 6, message: '密码至少有6位', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          repeatword: [
              { validator: validatePassCheck, trigger: 'blur' }
          ]
        },
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {

            localStorage.setItem('name', this.formCustom.name)
            localStorage.setItem('password', this.formCustom.password)

            this.$Message['success']({
              background: true,
              content: '注册成功!'
            });
            setTimeout(() => {
              this.login();
            }, 1500);
            
          } else {
             this.$Message['error']({
              background: true,
              content: '注册失败!'
            });
          }
        })
      },
      login () {
        this.$router.push('/')
      }
    }
  }
</script>
