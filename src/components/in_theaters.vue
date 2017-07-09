<template>
  <div class="moving">
    <div class="tit">
      <h1>电影票 - {{city}}</h1>
      <div id="" class="locat">
        <el-dropdown trigger="click" @command="changeCity">
          <span class="el-dropdown-link">[切换城市]</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="city in citys" :command="city.name">
              {{city.name}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="moviesList">
      <div class="status">正在上映</div>
      <div class="movie-container">
        <div class="movieTag" v-for="(subject,index) in movingList.subjects" v-if="index < maxNum">
          <ul>
            <li class="film-pic">
              <a @click="showDetail(subject.id)">
                <img class="movieImg" :src="subject.images.large" alt="">
              </a>
            </li>
            <li class="film-name">
              <a @click="showDetail(subject.id)">{{subject.title}}</a>
            </li>
            <li class="film-rate">
              <el-rate
                v-model="subject.rating.average"
                disabled>
              </el-rate>
              <span class="rateNum">{{subject.rating.average * 2}}</span>
            </li>
            <li class="film-button">
              <span>
               <a href="">选座购票</a>
              </span>
            </li>
          </ul>
        </div>
        <div class="load-more" @click="maxNum = movingList.subjects.length" v-if="maxNum < movingList.subjects.length">
          显示全部影片
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        citys: [
          {
            name: '北京'
          },
          {
            name: '上海'
          },
          {
            name: '广州'
          },
          {
            name: '深圳'
          },
          {
            name: '成都'
          },
          {
            name: '武汉'
          },
          {
            name: '杭州'
          },
          {
            name: '重庆'
          }
        ],
        maxNum: 12
      }
    },
    created () {
      this.$store.dispatch('getIn_theaters')
    },
    methods: {
      changeCity (command) {
        this.$store.commit('MOVIE_CITY', {city: command})
        this.$store.dispatch('getIn_theaters')
      },
      showDetail (id) {
        this.$router.push({path: '/moviesDetail', query: {id: id}})
      }
    },
    computed: {
      movingList () {
        return this.$store.getters.movingList
      },
      city () {
        return this.$store.state.movie.city
      }
    }
  }
</script>

<style scoped>
  .moving {
    margin-bottom: 20px;
  }

  .moving .tit {
    width: 950px;
    margin: 0 auto;
    text-align: left;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .tit h1 {
    display: inline-block;
    font-size: 26px;
    font-weight: 600;
    color: #000;
  }

  .tit .locat {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .tit .locat span {
    color: #1082c9;
    font-size: 12px;
    vertical-align: top;
  }

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

  .film-rate {
    display: inline-block;
    margin: 4px auto 2px;
    height: 19px;
  }

  .film-rate .el-rate {
    display: inline-block;
    width: 128px;
  }

  .film-rate .el-rate .el-rate__icon {
    font-size: 12px;
  }

  .rateNum {
    font-size: 12px;
    color: #ffac2d;
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
  }
</style>
