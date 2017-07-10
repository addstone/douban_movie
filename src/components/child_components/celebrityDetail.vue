<template>
  <div class="container-moving">
    <div class="content">
      <h1>
        <span class="title">{{celebrityDetail.name}} {{celebrityDetail.name_en}}</span>
      </h1>
      <div class="detail">
        <div class="left-side">
          <div class="actor-list">
            <div class="subject">
              <div class="mainpic">
                <a>
                  <img class="movieImg" :src="celebrityDetail.avatars.medium" title="点击看大图">
                </a>
              </div>
              <div class="info">
                <span class="p1">性别: </span>
                <span class="attrs">{{celebrityDetail.gender}}</span><br>
                <span class="p1">出生地: </span>
                <span class="attrs">{{celebrityDetail.born_place}}/</span><br>
                <span class="p1">职业: </span>
                <span v-for="item in celebrityDetail.works[0].roles" class="attrs">{{item}}</span><br>
                <span class="p1">更多外文名: </span>
                <span v-for="item in celebrityDetail.aka_en" class="attrs">{{item}}&nbsp/&nbsp</span><br>
                <span class="p1">更多中文名: </span>
                <span v-for="item in celebrityDetail.aka" class="attrs">{{item}}&nbsp/&nbsp</span><br>
              </div>
            </div>
          </div>
          <div class="insterest-people">
            <div class="top">
              <a href="">
                <button>收藏</button>
              </a>
              <span>分享到</span>
            </div>
          </div>
          <div class="summary">
            <p class="summary-title">最近的作品  ·  ·  ·  ·  ·  ·</p>
            <ul>
              <li class="casts_details" v-for="work in celebrityDetail.works" @click="showDetail(work.subject.id)">
                <a><img :src="work.subject.images.small" alt=""></a>
                <span class="casts_name">{{work.subject.title}}</span>
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
    name: 'celebrityDetail',
    data () {
      return {}
    },
    mounted () {
      let id = this.$route.query.id
      this.$store.commit('CELEBRITY_ID', {id});
      this.$store.dispatch('getCelebrityDetail')
    },
    computed: {
      celebrityDetail () {
        return this.$store.state.movie.celebrityDetail
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
