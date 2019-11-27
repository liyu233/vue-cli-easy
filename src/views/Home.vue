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
    <p class="p1">
      vuex资产-<span style="color: red">{{ assetss }}</span>
    </p>
    <p>
      <button class="p2" @click="axiosTest">axios</button>
    </p>
    <p>
      <button class="p2" @click="changeMsg">置空</button>
    </p>
    <p>
      <button class="p2" @click="getAssetss">获取资产信息</button>
    </p>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'home',
  computed:{
    ...mapState({
      msg : state => state.example.msg + "-计算属性生效-",
    }),
    ...mapGetters({
      msgPlus:'example/msgPlus',
      assetss:'example/assetss'
  })
  },
  methods:{
    /*提交store action*/
    ...mapActions({
      changeMsgNoneMethos:'example/chageMsgNone',
      getAssets:'example/getAssets'
    }),
    /*提交置空*/
    changeMsg(){
      this.changeMsgNoneMethos({
        example:'example',
      })
    },
    getAssetss(){
      this.getAssets({
        id:1,
      })
    },
    /*axios测试*/
    axiosTest(){

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
    height: 30px;
    outline: none;
    color: #ffffff;
    background-color: #42b983;
    border: none;
    border-radius: 3px;
    line-height: 30px;
  }
  .p2:hover{
    background-color: cadetblue;
    /*line-height: 31px;
    width: 101px;
    height: 31px;*/
  }
</style>
