<template>
  <div class="container-moving">
    <div class="content">
      <h1>
        <span class="title">{{movieDetail.title}} {{movieDetail.original_title}}</span>
        <span class="year">({{movieDetail.year}})</span>
      </h1>
      <div class="detail">
        <div class="left-side">
          <div class="actor-list">
            <div class="subject">
              <div class="mainpic">
                <a href="https://movie.douban.com/subject/25900945/photos?type=R">
                  <img class="movieImg" :src="movieDetail.images.medium" alt="" title="点击查看更多海报">
                </a>
              </div>
              <div class="info">
                <span class="p1">导演: </span>
                <span v-for="item in movieDetail.directors" class="attrs">{{item.name}}</span><br>
                <span class="p1">主演: </span>
                <span v-for="item in movieDetail.casts" class="attrs">{{item.name}}/</span><br>
                <span class="p1">类型: </span>
                <span v-for="item in movieDetail.genres" class="attrs">{{item}}/</span><br>
                <span class="p1">制片国家/地区: </span>
                <span v-for="item in movieDetail.countries" class="attrs">{{item}}</span><br>
                <span class="p1">又名: </span>
                <span v-for="item in movieDetail.aka" class="attrs">{{item}}&nbsp/&nbsp</span><br>
                <span class="p1">IMDb链接: </span><span class="attrs"></span><br>
              </div>
            </div>
            <div class="people-sroce">
              <div>
                <p>豆瓣评分</p>
                <span class="score" v-if="movieDetail.rating.average * 2">{{movieDetail.rating.average * 2}}</span>
                <el-rate v-model="movieDetail.rating.average" disabled></el-rate>
                <p class="no-publish" v-if="!movieDetail.rating.average * 2">尚未上映</p>
                <p class="comment-num" v-if="movieDetail.rating.average * 2">{{movieDetail.ratings_count}}人评价</p>
              </div>
            </div>
          </div>
          <div class="insterest-people">
            <div class="top">
              <a href="">
                <button>想看</button>
              </a>
              <a href="">
                <button>看过</button>
              </a>
              <span class="score-to">评价:
                <el-rate show-text></el-rate>
              </span>
            </div>
          </div>
          <div class="gtleft">
            <ul class="ul">
              <li><img
                src="https://img3.doubanio.com/f/shire/cc03d0fcf32b7ce3af7b160a0b85e5e66b47cc42/pics/short-comment.gif"
                alt=""><a href="">写短评</a></li>
              <li><img
                src="https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif"
                alt=""><a href="">写影评</a></li>
              <li><img
                src="https://img3.doubanio.com/f/shire/61cc48ba7c40e0272d46bb93fe0dc514f3b71ec5/pics/add-doulist.gif"
                alt=""><a href="">提问题</a></li>
              <li><img src="" alt=""><a href="">分享到</a></li>
            </ul>
          </div>
          <div class="summary">
            <p class="summary-title">{{movieDetail.title}}的剧情简介  ·  ·  ·  ·  ·  ·</p>
            <p class="intro">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{movieDetail.summary}}</p>
          </div>
          <div class="summary">
            <p class="summary-title">{{movieDetail.title}}的影人  ·  ·  ·  ·  ·  ·</p>
            <ul>
              <li class="directors_details" v-for="director in movieDetail.directors" @click="showDetail(director.id)">
                <div v-if="!!director.avatars">
                  <a><img :src="director.avatars.small" alt=""></a>
                  <span class="directors_name">{{director.name}}<i>(导演)</i></span>
                </div>
              </li>
              <li class="casts_details" v-for="cast in movieDetail.casts" @click="showDetail(cast.id)">
                <a><img :src="cast.avatars.small" alt=""></a>
                <span class="casts_name">{{cast.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'moviesDetail',
    data () {
      return {}
    },
    created () {
      let id = this.$route.query.id
      this.$store.commit('MOVING_ID', {id});
      this.$store.dispatch('getMovieDetail')
    },
    computed: {
      movieDetail () {
        return this.$store.getters.movieDetail
      }
    },
    methods: {
      showDetail (id) {
        this.$router.push({path: '/celebrityDetail', query: {id: id}})
      }
    }
  }
</script>
<style scoped>
  .container-moving {
    width: 950px;
    margin: 30px auto;
  }

  .container-moving .content {
    min-height: 420px;
  }

  .container-moving .content h1 {
    word-break: break-all;
    display: block;
    font-size: 25px;
    font-weight: bold;
    color: #494949;
    padding: 0 0 5px 0;
    text-align: left;
  }

  .content .year {
    color: #888;
  }

  .detail .left-side {
    float: left;
    width: 610px;
    padding-right: 40px;
  }

  .detail .left-side .actor-list {
    margin-bottom: 30px;
  }

  .subject {
    width: 415px;
    float: left;
  }

  .subject .mainpic {
    margin: 3px 12px 0 0;
    max-width: 155px;
    overflow: hidden;
    text-align: center;
    float: left;
    height: 140px;
  }

  .subject .mainpic a img {
    margin-bottom: 10px;
    max-width: 100px;
  }

  .info {
    float: left;
    max-width: 248px;
    word-wrap: break-word;
    text-align: left;
  }

  .info .p1 {
    line-height: 150%;
    color: #666666;
  }

  .info .attrs {
    color: #37a;
  }

  .people-sroce {
    float: left;
    width: 174px;
    margin: 2px 0 0 0;
    padding: 0 0 0 15px;
    border-left: 1px solid #eaeaea;
    color: #aaa;
    text-align: left;
  }

  .people-sroce .score {
    font-size: 25px;
    margin-right: 10px;
    color: #000;
  }

  .people-sroce .el-rate {
    vertical-align: top;
    display: inline-block;
    margin-top: -40px;
    margin-left: 46px;
  }

  .people-sroce .el-rate i {
    font-size: 14px;
  }

  .people-sroce .comment-num {
    margin-top: -40px;
    margin-left: 45px;
    color: #666699;
  }

  .insterest-people {
    clear: both;
    padding: 20px 0 3px;
    text-align: left;
  }

  .top button {
    display: inline-block;
    width: 50px;
    height: 25px;
    background: #fae9da;
    border: 1px solid #ca6445;
    color: #333;
    margin-right: 10px;
    border-radius: 4px;
  }

  .score-to .el-rate {
    margin-left: 5px;
    display: inline-block;
  }

  .score-to .el-rate__icon {
    font-size: 12px;
  }

  .gtleft {
    padding: 4px 4px 0 0;
    float: left;
  }

  .gtleft .ul {
    padding-top: 6px;
  }

  .gtleft .ul li {
    float: left;
    display: inline;
    line-height: 14px;
    margin-right: 15px;
  }

  .gtleft .ul li img {
    max-width: 100%;
    margin-right: 5px;
  }

  .gtleft .ul li a {
    text-decoration: none;
    color: #37a;
  }

  .summary {
    float: left;
    clear: both;
    margin-top: 20px;
    text-align: left;
  }

  .summary-title {
    color: #007722;
    font-size: 16px;
  }

  .summary ul li {
    float: left;
    margin-right: 30px;
    cursor: pointer;
  }

  .directors_details a img {
    display: block;
  }

  .casts_details {
    width: 70px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .casts_details a img {
    display: block;
  }

  .casts_details .casts_name {
    width: 70px;
    height: 20px;
    line-height: 20px;
  }
</style>
