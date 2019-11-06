<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn{
  display: block;background-color: #2c3e50;border-radius: 5px;
  text-align: center;color:#fff;height:32px;line-height: 32px;
  width: 252px;text-decoration: none;margin-top: 5px;margin:0 auto;
  &:hover{
    box-shadow: 1px 2px 5px rgba(0,0,0,.2)
  }
}
.input{
  display: block;border:1px solid #666;border-radius: 5px;padding:5px;
  outline: none;margin:0 auto;width:240px;height:18px;line-height: 18px;
  &:focus{
    box-shadow: 0px 1px 3px rgba(0,0,0,.1) inset;
  }
}
</style>
