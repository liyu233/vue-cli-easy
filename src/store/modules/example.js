/*示例模块*/
export default {
    namespaced: true,
    state: {
        moduleName: 'example',
        msg:"这是在example模块上的信息"
    },

    getters: {
        /*计算msg返回*/
        msgPlus: state => {
            return state.msg + 'storegetters';
        }
    },

    mutations: {
        /*示例，改变msg为空字符串*/
        chageMsgNoneMutations (state,json) {
            // 变更状态
            state.msg = '';
            console.log(json);
        }
    },

    actions: {
        /*示例，改变msg为空字符串*/
        chageMsgNone(context,json){
            console.log(json);
            context.commit('chageMsgNoneMutations',json);
        },
    },

}



