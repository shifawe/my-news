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
      }
    ]
  },
  mutations: {
    addItem (state, value) {
      state.list.push(value)
    },
    saveItem(state, editList){
      state.list[editList.data.index] = editList.data.item
    },
    userTotal(state, index){
      state.list[index.index].user++;
    }
  },
  actions: {
  },
  modules: {
  }
})
