<template>
  <div id="app">
    <v-head></v-head>
    <keep-alive exclude="moviesDetail,celebrityDetail"><!--要想moviesDetail不使用keep-alive 必须在moviesDetail组件js部分添加name: 'moviesDetail' -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import vHead from './components/header'

  export default {
    name: 'app',
    components: {
      vHead
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
