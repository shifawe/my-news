<template>
<div>
  <Header :title="title"></Header>
  <div class="list-box">
    <Scroll :on-reach-edge="handleReachEdge" :height="height">
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
          <div class="details">
            <div>
              <span>
                <i class="ivu-icon-iconfont icon-hide"></i> {{item.user}}
              </span>
            </div>
            <div class="br-two">
              <span class="btn-edit" @click="thisInfo(index)">
                <i class="ivu-icon-iconfont icon-edit"></i> 详情
              </span>
            </div>
            <div>
              <span class="btn-del" :plain="true" @click='del(index)'>
                <i class="ivu-icon-iconfont icon-qp_icon_close"></i> 删除
              </span>
            </div>
          </div>
        </li>
      </ul>
    </Scroll>
  </div>
</div>
  
</template>
<script>

  import store from '@/store'
  import Header from '@/components/Header'

  let total = 1;
  export default {
    name: 'List',
    components: { Header },
    store,
    data () {
      return {
        title: '新闻列表',
        height: document.documentElement.clientHeight - 101
      }
    },
    computed: {
      pageList() {
        return store.state.lists
      },
    },
    methods: {
      thisInfo (idx) {     
        this.$router.push('/info/'+idx);
        store.commit({
          type:'userTotal',
          index: idx
        })   
      },
      del (idx) {

        this.$Modal.confirm({
          title: '提示',
          content: '<p>确定删除吗？</p>',
          onOk: () => {
            store.commit({
              type: 'delItem',
              index: idx
            })

            this.$Message["success"]({
                background: true,
                content: '成功删除'
            })
          }
        });
        
      },
      handleReachEdge (dir) {
        return new Promise(resolve => {
          setTimeout(() => {
            if(dir > 0){
              const first = this.pageList[0];
              first.title = '顶部新数据' + total++
              for (let i = 1; i < 3; i++) {
                  this.pageList.unshift(first);
              }
            }
            else{
              const last = this.pageList[this.pageList.length - 1]
              last.title = '下拉新数据' + total++
              for (let i = 1; i < 3; i++) {
                this.pageList.push(last)
              }
            }
            
            resolve()
        }, 2000)
        })
      }
    }
  }
</script>
<style scope lang="less">
  @import '../less/z.less';
  @import '../less/css3.less';
  .list-box{
    .abs;top:42px;bottom:59px;width:100%;left:0;
  }
  .list{
    .title{
      font-weight: bold;font-size: 16px;
    }
    .content{
      font-size: 14px;padding:7px 0;color:#464646
    }
    .details{
      .flex-box;margin-top: 10px;.horizontal;
      >div{
        font-size: 12px;color:#999;.flex-item(1);
        text-align: center;
      }
      .br-two{
        position: relative;
        &:after,&:before{
          content:'';height:10px;margin-top: -5px;width:1px;position: absolute;
          top:50%;background-color: #ddd;
        }
        &:after{right:0}
        &:before{left:0}
      }
      .ivu-icon-iconfont{
        font-size: 12px;line-height: 0;
      }
    }
    li{
      list-style:none;background-color: #fff;border-top: 1px solid #ddd;
      padding:13px 25px;text-align: left;
    }
    border-bottom:1px solid #ddd
  }
</style>
