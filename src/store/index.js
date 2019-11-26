import Vue from 'vue'
import Vuex from 'vuex'

/*导入其他模块*/
import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    example,
  }
})
