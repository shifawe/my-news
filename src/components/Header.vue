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
          return '你好！2020'
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
    .flex-box;color:#fff;.txt-ver(42px);
    .title{
      .ellipsis-basic;font-size: 14px;font-weight: bold;.tc;.flex-item(1);
    }
    &.default{
      background-color: #19be6b;border-bottom:1px solid #12a75c; .box-shadow;
    }
    &.blue{
      background-color: #2db7f5;border-bottom:1px solid #239fd8; .box-shadow;
    }
    &.orange{
      background-color: #f90;border-bottom:1px solid rgb(233, 140, 0); .box-shadow;
    }
    .right,.left{.wh(42px);.tc;}
    .right{.fr}
    .left{
      .ivu-icon{font-size: 18px};.fl;
    }
  }
</style>