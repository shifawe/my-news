<template>
  <div>
    <Header :title="title">
      <span slot="left" @click="back">
        <Icon type="ios-arrow-back" />
      </span>
    </Header>
    <div class="help">
      <Scroll class="help-scroll" :height="height">
        <div class="info">
           <h2>最佳实践 </h2>
          <h4>谛听（DMap）</h4>
          <p>
            DMap 是一个专注于位置相关大数据的数据可视化平台。TalkingData 的数据资产乃至大数据行业的数据大部分都是给予位置的数据，DMap 以给予位置的大数据的地理分析为核心，兼顾图表分析等传统数据可视化手段，并在此基础上构建数据报告、大屏应用的能力，可以满足数据分析师和数据科学家的数据分析及可视化需求，并能够在不久的将来以 JS-SDK 的形式提高相似应用的开发效率。
          </p>
          <h4>智选 </h4>
          <p>
            智能选址（Smart Selection，SS）是腾讯云与 TalkingData 联合，依托双方优势，结合经典模型和预测算法，将海量数据与机器学习有机整合，旨在解决实体门店的选址、商圈经营等场景问题，为智慧零售及多元化线下产业助力的数据智能产品。
          </p>
          <h4>App 统计分析</h4>
          <p>
            App 统计分析是 TalkingData 最核心的产品，因历史原因，项目已沉淀很久，开发模式也比较传统，现已全面基于 iView 进行重构，视觉和交互都有极大的提升。
          </p>
        </div>
      </Scroll>
    </div> 
  </div>
</template>
<script>
import Header from '@/components/Header'

export default {
  name: 'Help',
  components: {Header},
  data () {
    return {
      title: '反馈与帮助',
      height: document.documentElement.clientHeight - 42
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="less">
  .help{
    margin-top: 42px;
    .info{
      margin: 0 2rem;
    }
    h2{margin-top: 20px;}
    h4{margin:10px 0;}
    p{color:#444;margin-bottom: 2.5rem;}
  }
</style>