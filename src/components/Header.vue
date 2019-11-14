<template>
  <div class="header-box">
    <div class="header" :class="type">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        default: () => {
          return '主页'
        }
      },
      type: {
        type: String,
        default: () => {
          return 'default'
        }
      }
    },
    data () {
      return {
        
      }
    }
  }
</script>
<style lang="less">
  @import '../less/z.less';
  @import '../less/css3.less';
  .header-box{
    .fix;z-index: 99;width:100%;left: 0;top:0;
  }
  .header{
    .flex-box;.just-content;color:#fff;.txt-ver(42px);
    .title{
      .ellipsis-basic;font-size: 14px;font-weight: bold;
    }
    &.default{
      background-color: #19be6b;border-bottom:1px solid #12a75c; .box-shadow;
    }
    &.blue{
      background-color: #2db7f5;border-bottom:1px solid #239fd8; .box-shadow;
    }
    .left{
      .ivu-icon{font-size: 18px}
    }
  }
</style>