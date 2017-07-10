<template>
  <div class="douban-header">
    <div class="douban-search">
      <a class="title" href="/">豆瓣电影</a>
      <div class="search-container">
        <el-input placeholder="电影、影人、影院、电视剧" v-model="search_text" @keyup.enter.native="searchMovie">
          <el-button slot="append" icon="search"  @click="searchMovie"></el-button>
        </el-input>
      </div>
    </div>
    <div class="douban-bar">
      <ul>
        <li v-for="list in lists">
          <router-link :to="list.url">{{list.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        search_text: '',
        lists: [{
          title: '首页',
          url: '/'
        }, {
          title: 'Top250',
          url: '/top250'
        }, {
          title: '北美票房榜',
          url: '/us_box'
        }]
      }
    },
    methods: {
      searchMovie () {
        this.$store.commit('SEARCH_TEXT', {searchText: this.search_text});
        this.$store.dispatch('getSearchList');
//        console.log(this.$store.state.movie.searchText);
        this.$router.push({path: '/search', query: {searchText: this.search_text}});
      }
    }
  }
</script>
<style scoped>
  .douban-header {
    background: #f0f3f5;
    width: 100%;
    height: 114px;
    margin-top: -30px;
  }

  .douban-search {
    width: 950px;
    margin: 0 auto;
    height: 75px;
    /*border: 1px solid red;*/
    border-bottom: 1px solid #e3ebec;
  }

  .title {
    color: #208acc;
    font-size: 30px;
    font-weight: 500;
    line-height: 75px;
  }

  .search-container {
    display: inline-block;
    line-height: 75px;
    vertical-align: top;
    width: 500px;
    margin-left: 50px;
  }

  .douban-bar {
    width: 950px;
    margin: 0 auto;
    height: 20px;
  }

  .douban-bar ul li {
    float: left;
    line-height: 20px;
    cursor: pointer;
    margin-right: 10px;
  }

  .douban-bar ul li a {
    display: inline-block;
    padding: 8px;
    font-size: 14px;
    color: #27a;
    text-decoration: none;
  }

  .douban-bar ul li a:hover {
    color: #fff;
    background-color: #1082c9;
  }
</style>
