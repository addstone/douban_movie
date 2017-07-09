<template>
  <div class="search-list">
    <searchTag v-for="(subject,index) in searchList.subjects" :subject="subject" :key="index"></searchTag>
  </div>
</template>

<script>
  import searchTag from './child_components/searchTag'

  export default{
    data () {
      return {}
    },
    components: {
      searchTag
    },
    computed: {
      searchList () {
        return this.$store.getters.searchList
      }
    }
  }
</script>
<style>
  .search-list {
    width: 950px;
    min-height: 500px;
    margin: 30px auto;
  }
</style>
