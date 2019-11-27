<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p style="width: 100px;margin: 0 auto">
      便捷开发
    </p>
    <p class="p1">
      vuex测试12，计算属性测试-<span style="color: red">{{ msg }}</span>
    </p>
    <p class="p1">
      vuex测试store计算属性测试-<span style="color: red">{{ msgPlus }}</span>
    </p>
    <p class="p2">
      <button @click="axiosTest">axios</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'home',
  computed:{
    ...mapState({
      msg : state => state.example.msg + "-计算属性生效-",
    }),
    ...mapGetters({
      msgPlus:'example/msgPlus',
  })
  },
  methods:{
    /*提交store action*/
    ...mapActions({

    }),
    /*axios测试*/
    axiosTest(){
      const params = new URLSearchParams();
      params.append('assetsId', 1);
      axios.post('/api/assets/getAssetsById',params,
          {
            headers: {
             // 'Authorization': token,
            "Content-Type" : 'application/x-www-form-urlencoded',
            }
          }
      ).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
  },
  components: {

  }
}
</script>
<style scoped>
  .p1{
    width: 100%;
    margin: 0 auto;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  .p2{
    width: 100px;
    margin: 0 calc((100% - 100px)/2);
  }
</style>
