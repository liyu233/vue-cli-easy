<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{ assets }}</h4>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        assets: state => state.example.assets
      }),
    },
  }
</script>
