/*示例模块*/
import axios from 'axios';
export default {
    namespaced: true,
    state: {
        moduleName: 'example',
        msg:"这是在example模块上的信息",
        assets:null,
    },

    getters: {
        /*计算msg返回*/
        msgPlus: state => {
            return state.msg + 'storegetters';
        },
        assetss: state =>{
            return state.assets;
        }
    },

    mutations: {
        /*示例，改变msg为空字符串*/
        chageMsgNoneMutations (state,json) {
            // 变更状态
            state.msg = '';
            state.assets = null;
            console.log(json);
        },
        /*储存异步获取的数值*/
        saveSync(state,res){
            state.assets = res;
        },
    },

    actions: {
        /*示例，改变msg为空字符串*/
        chageMsgNone(context,json){
            console.log(json);
            context.commit('chageMsgNoneMutations',json);
        },
        /*异步请求*/
        getAssets(context,json){
            console.log(json);
            let assetsId = json.id;
            const params = new URLSearchParams();
            params.append('assetsId', assetsId);
            axios.post('/api/assets/getAssetsById',params,
                {
                    headers: {
                        // 'Authorization': token,
                        "Content-Type" : 'application/x-www-form-urlencoded',
                    }
                }
            ).then(res => {
                console.log(res);
                context.commit('saveSync',res.data[0])
            }).catch(err => {
                console.log(err)
            })
        },
    },

}



