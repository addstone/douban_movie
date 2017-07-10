<template>
  <div id="top250">
    <h2>豆瓣电影排行榜top250</h2>
    <div class="search-tag" v-for="subject in ranking250.subjects">
      <a class="search-img" @click="showDetail(subject.id)">
        <img class="search-tag-img" :src="subject.images.small">
      </a>
      <div class="search-brief">
        <p class="title" @click="showDetail(subject.id)">{{subject.title}}&nbsp;/&nbsp;{{subject.original_title}}</p>
        <p class="disc">
          {{subject.year}}年<span v-for="cast in subject.casts">&nbsp;/&nbsp;{{cast.name}}</span>
        </p>
        <p class="rate">
          <el-rate v-model="subject.rating.average" disabled text-color="#ff9900"></el-rate>
          <span
            class="rate-value">{{subject.rating.average * 2}}<i>&nbsp;&nbsp;({{subject.collect_count}}人已观看)</i></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import {utils} from '../../src/axios/index'

  export default{

    data () {
      return {
        isLoad: false,
        page: 1,
        totalPage: 0,
        start: 1
      }
    },
    created () {
      this.$store.commit('PAGE_START', {start: 0})
      this.$store.dispatch('getTop250')
      window.onscroll = () => {
        if (!this.isLoad) {
          if (utils.getScrollTop() + utils.getClientHeight() + 400 > utils.getScrollHeight()) {
            let page = this.page + 1
            if (this.page <= this.totalPage) {
              this.isLoad = true
              this.page = page
              this.start = (this.page - 1) * 10
              this.$store.commit('PAGE_START', {start: this.start})
              this.$store.dispatch('getTop250')
            }
          }
        }
      }
    },
    computed: {
      ranking250 () {
        this.isLoad = false
        let ranklist = this.$store.state.movie.ranking250;
        // console.log(ranklist);
//        setTimeout(function () {
//          for (let subject of ranklist.subjects) {
//            subject.rating.average = subject.rating.average / 2;
//          }
//        },1000)
        this.totalPage = ranklist.total;
        return ranklist
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
  #top250 {
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }

  #top250 h2 {
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

  .rate i {
    font-style: normal;
    color: #7e8c8d;
  }
</style>
