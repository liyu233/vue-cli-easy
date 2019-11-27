/*示例模块*/
export default {
    namespaced: true,
    state: {
        msg:"这是在example模块上的信息"
    },

    getters: {
        /*计算msg返回*/
        msgPlus: state => {
            return state.msg + 'storegetters';
        }
    },

    mutations: {

    },

    actions: {

    },

}



