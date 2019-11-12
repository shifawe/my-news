<template>
  <div>
    <ul class="list">
      <li
      v-for="(item, index) in pageList"
      :key="index"
      >
        <div class="title">
          {{item.title}}
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="options">
          <span class="btn-option btn-del" :plain="true" @click='del'>
            <i class="iconfont icon-qp_icon_close"></i>
          </span>
        </div>
        <div class="details">
          <span>
            <i class="iconfont icon-hide gray"></i>{{item.user}}
          </span>
          <span class="btn-edit" @click="thisInfo(index)">
            <i class="iconfont icon-edit green"></i> 编辑
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

import store from '@/store'

  export default {
    name: 'List',
    store,
    computed: {
      pageList() {
        return store.state.list
      } 
    },
    methods: {
      thisInfo (idx) {     
        this.$router.push('/info/'+idx);
        store.commit({
          type:'userTotal',
          index: idx
        })   
      },
      del () {
        
      }
    }
  }
</script>
<style scope lang="less">
  @import '../less/css3.less';
  .list{
    .title{
      font-weight: bold;
    }
    .content{
      font-size: 14px;padding:7px 0;color:#464646
    }
    .details{
      .flex-box;margin-top: 5px;
      >span{
        font-size: 12px;color:#999;display:block;line-height: 18px;
      }
      .btn-edit{
        margin-left: 20px;color:#42b983;
      }
      .iconfont{
        float: left;
      }
      .green{color:#42b983}
      .gray{color:#999}
    }
    li{
      list-style:none;background-color: #fff;border-top: 1px solid #ddd;
      padding:13px 25px;text-align: left;
    }
    border-bottom:1px solid #ddd
  }
</style>
<style lang="less">
  @import '../less/z.less';
  .list{
    li{
      .rel;
    }
  }
  .options{
    .btn-option{
      .abs;right:10px;top:8px;.db;
      &.btn-del{
       .iconfont{
          color:#ed4014;
        }
      }
    }
    .iconfont{
      font-size: 18px;
    }
  }
</style>