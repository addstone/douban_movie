<template>
  <div class="search-list">
    <h2>搜索结果如下：</h2>
    <div class="search-tag" v-for="subject in searchList.subjects">
      <a class="search-img" @click="showDetail(subject.id)">
        <img class="search-tag-img" :src="subject.images.small">
      </a>
      <div class="search-brief">
        <p class="title" @click="showDetail(subject.id)">{{subject.title}}</p>
        <p class="disc">
          {{subject.year}}年<span v-for="cast in subject.casts">/{{cast.name}}</span>
        </p>
        <p class="rate">
          <el-rate v-model="subject.rating.average" disabled text-color="#ff9900"></el-rate>
          <span class="rate-value">{{subject.rating.average * 2}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    computed: {
      searchList () {
        return this.$store.getters.searchList
      }
    },
    methods: {
      showDetail (id) {
        this.$router.push({path: '/moviesDetail', query: {id: id}})
      }
    }
  }
</script>
<style scoped>
  .search-list {
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }

  h2 {
    margin-bottom: 20px;
    color: #007722;
    text-align: left;
  }

  .search-tag {
    padding: 10px;
    border-top: 1px dashed #e3ebec;
  }

  .search-img {
    width: 80px;
    height: 110px;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
  }

  .search-tag-img {
    width: 80px;
  }

  .search-brief {
    display: inline-block;
    vertical-align: top;
    margin-left: 40px;
  }

  .search-brief p {
    margin-bottom: 20px;
  }

  .title {
    color: #3377aa;
    font-size: 14px;
    cursor: pointer;

  }

  .disc {
    width: 500px;
  }

  .rate .el-rate {
    display: inline-block;
  }

  .rate .el-rate__icon {
    font-size: 14px;
  }

  .rate-value {
    color: #ff9900
  }
</style>
