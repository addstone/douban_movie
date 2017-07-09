<template>
  <div class="search-tag">
    <a class="search-img">
      <img class="search-tag-img movieImg" :src="subject.images.small">
    </a>

    <div class="search-brief">
      <p class="title">{{subject.title}}</p>
      <p class="disc">
        {{subject.year}}年<span v-for="cast in subject.casts">/{{cast.name}}</span>
      </p>
      <p class="rate">
        <el-rate v-model="subject.rating.average" disabled text-color="#ff9900"></el-rate>
        <span class="rate-value">{{subject.rating.average * 2}}</span>
      </p>
    </div>
  </div>
</template>

<script>

  export default{
    props: {
      subject: {
        type: Object
      }
    },
    data () {
      return {}
    }
  }
</script>
<style>
  .search-tag {
    padding: 10px;
    border-top: 1px dashed #e3ebec;
  }

  .search-img {
    width: 80px;
    height: 110px;
    overflow: hidden;
    display: inline-block;
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
