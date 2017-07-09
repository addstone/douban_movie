<template>
  <div class="moviesList">
    <div class="status">即将上映</div>
    <div class="movie-container">
      <div class="movieTag" v-for="subject in upcomBody.subjects">
        <ul>
          <li class="film-pic">
            <a @click="showDetail(subject.id)">
              <img class="movieImg" :src="subject.images.large">
            </a>
          </li>
          <li class="film-name">
            <a @click="showDetail(subject.id)">{{subject.title}}</a>
          </li>
          <li class="film-time">
            <span>即将上映的电影</span>
          </li>
          <li class="film-button">
            <span>
              <a href="">选座购票</a>
            </span>
          </li>
        </ul>
      </div>
      <div class="load-more" v-on:click="moredata()" v-show="!pageload && !nodata">
        <el-button type="text">显示更多影片</el-button>
      </div>
      <div class="load-more"  v-show="pageload">
        <el-button type="text">加载更多影片中...</el-button>
      </div>
      <div class="load-more"  v-show="nodata">
        <el-button type="text">没有更多影片了</el-button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        nodata: false
      }
    },
    created () {
      this.$store.dispatch('getComing_soon')
    },
    computed: {
      upcomBody () {
//        console.log(this.$store.state.movie.upcomBody)
        return this.$store.state.movie.upcomBody
      },
      pageload () {
        return this.$store.state.movie.pageload
      }
    },
    methods: {
      moredata () {
        this.$store.commit('PAGE_LOAD', {pageload: true});
        this.$store.dispatch('getComing_soon');
        let up = this.$store.state.movie.upcomBody;
        if (up.start * up.count > up.total) {
          this.nodata = true
        }
      },
      showDetail (id) {
        this.$router.push({path: '/moviesDetail', query: {id: id}})
      }
    }
  }
</script>

<style scoped>
  .moviesList {
    width: 950px;
    margin: 10px auto 0;
    min-height: 500px;
  }

  .moviesList .status {
    width: 592px;
    text-align: left;
    margin-bottom: 16px;
    color: #007722;
  }

  .movie-container {
    width: 592px;
    border-top: 1px dashed #ccc;
    padding-top: 10px;
  }

  .movieTag {
    width: 128px;
    height: 280px;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    margin: 0 20px 20px 0;
  }

  .film-pic {
    height: 180px;
    margin-bottom: 12px;
    overflow: hidden;
  }

  .film-pic a img {
    width: 128px;
    cursor: pointer;
  }

  .film-name {
    font-size: 14px;
    height: 22px;
    white-space: nowrap;
    width: 128px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .film-name a {
    color: black;
  }

  .film-time {
    display: inline-block;
    margin: 4px auto 2px;
    height: 19px;
  }

  .film-button span {
    display: block;
    margin: 4px auto;
    text-align: center;
    width: 110px;
    height: 26px;
    line-height: 26px;
    background-color: #f0f0f0;
    border-radius: 2px;
  }

  .film-button span a {
    color: #494949;
  }

  .load-more {
    cursor: pointer;
    width: 580px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #eee;
    color: #336699;
    font-size: 12px;
    margin-bottom: 40px;
  }

</style>
