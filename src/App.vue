<template>
  <div id="app">
    <div class="header"></div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import './less/z.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.add-form{
  padding:2em 2em 0;
  p{
    padding:10px 0;
  }
}
</style>
