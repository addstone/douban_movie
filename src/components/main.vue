<template>
  <div>
    <in_theaters></in_theaters>
    <coming_soon></coming_soon>
  </div>
</template>

<script>
  import in_theaters from './in_theaters'
  import coming_soon from './coming_soon'
  export default {
    data () {
      return {}
    },
    components: {
      in_theaters,
      coming_soon
    }
  }
</script>

<style></style>
