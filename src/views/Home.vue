<template>
  <div class="home">
    <div class="nav">
      <router-link to="/home/list">
       <i class="ivu-icon-iconfont icon-qp_icon_more"></i>
       <span>信息列表</span>
      </router-link>
      <router-link to="/home/user">
       <i class="ivu-icon-iconfont icon-qp_icon_actor"></i>
       <span>个人中心</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data () {
      return {
        
      }
    }
  }
</script>
<style scope lang='less'>
  @import '../less/z.less';
  @import '../less/css3.less';

  .nav{
    margin:0 auto;background-color: #fff;.fix;left:0;bottom:0;.tc;z-index: 999;
    width:100%;.flex-box;border-top:1px solid #ddd;.box-shadow(0 0 5px rgba(0,0,0,.05));
    >a{
     .flex-item(1);padding:5px 0;font-size:14px;.rel;
     &:last-child{
       &:after{
         content:'';.abs;width:1px;height:20px;background-color: #ccc;
         left:0;top:50%;margin-top:-10px;
       }
     }
     .ivu-icon-iconfont{
       font-size: 18px;color:#333
     }
     span{
       display: block;color:#333;font-weight: 600;
     }
     &.active{
       .ivu-icon-iconfont,span{
          color:#42b983;
        }
     }
    }
  }
</style>