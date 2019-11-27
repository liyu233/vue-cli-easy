<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p style="width: 100px;margin: 0 auto">
      便捷开发
    </p>
    <p style="width: 500px;margin: 0 auto">
      vuex测试，计算属性测试-<span style="color: red">{{ msg }}</span>
    </p>
    <p style="width: 100px;margin: 0 auto">
      <button @click="axiosTest">axios</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

import {mapState} from 'vuex'
export default {
  name: 'home',
  computed:{
    ...mapState({
      msg : state => state.example.msg + "-计算属性生效-",
    })
  },
  methods:{
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
