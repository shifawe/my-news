<template>
  <div id="app">
    <div class="header"></div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import './less/z.less';

.reset();

body{background-color: #eaeaea}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.add-form{
  padding-top:2rem;
  p{
    padding:10px 0;
  }
}
.btn{
  display: block;background-color: #4fc08d;border-radius: 5px;border:1px solid #4fc08d;
  text-align: center;color:#fff;height:38px;line-height: 38px;
  width: 252px;text-decoration: none;margin-top: 5px;margin:0 auto;
  &:hover{
    box-shadow: 1px 2px 5px rgba(0,0,0,.2)
  }
  &.btn-gray{
    background-color: #dcdee2;color:#515a6e
  }
}
.input{
  display: block;border:1px solid #666;border-radius: 5px;padding:8px;
  outline: none;margin:0 auto;width:240px;height:18px;line-height: 18px;
  background-color: #fff;
  &:focus{
    box-shadow: 0px 1px 3px rgba(0,0,0,.1) inset;
  }
  &.inp-area{
    height:54px;
  }
}
</style>
