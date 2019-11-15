import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: [
      {
        title:'4.0 已发布', 
        content: '我们已经发布了 4.0 版本，来看看都更新了什么吧！',
        user: 21
      },
      {
        title:'老用户升级', 
        content: '需要将 npm 包 iview 以及任何引用 iview 的地方都替换为 view-design',
        user: 500
      },
      {
        title:'写给 iView 开发者的一封信', 
        content: '你好，亲爱的 iView 开发者（准开发者），很高兴你能使用到我们新上线的 iView 开发者社区。iView 从立项到现在已经经历了两年的时间，7 月 28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了 iView 3.0。',
        user: 324
      },
      {
        title:'iView 2019 新品发布会', 
        content: '我们目前正在筹划发布会的各项细节， 期待与您一起见证 iView 的成长！ iView 2019 新品发布会将在 2019年07月27日14点在首都北京举办。',
        user: 23
      },
      {
        title:'发布 3.4.0 版本，代号 BestLuck', 
        content: '当然，这是很基础的 Webpack 配置，但本文介绍的是 IDE `WebStorm` 能够通过 Command + 点击左键直接进入别名的某个目录下。但在 Vue CLI 3 创建的项目下，默认是不支持的。',
        user: 111
      },
      {
        title:'一路走来，感谢有你', 
        content: '马上就要迎来 2019 年了，在过去的一年里，iView 团队一直不忘初心，砺砺前行...',
        user: 56
      },
      {
        title:'iView 近期的一些更新', 
        content: '春节将至，iView 也带来了戊戌年最后的一些更新。',
        user: 56
      },
      {
        title:'我们在开源项目中是怎样埋彩蛋的', 
        content: '在开源软件中，加彩蛋是一种乐趣，并不为奇，同为知名 UI 组件库的 iView 项目',
        user: 56
      },
    ]
  },
  mutations: {
    addItem (state, value) {
      state.lists.unshift(value)
    },
    saveItem(state, editList){
      state.lists[editList.data.index] = editList.data.item
    },
    userTotal(state, index){
      state.lists[index.index].user ++
    },
    delItem(state, index){
      state.lists.splice(index.index, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
