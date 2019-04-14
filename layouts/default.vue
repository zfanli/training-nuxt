<template>
  <div>
    <blog-header />
    <nuxt class="top-wrapper" />
    <blog-footer />
  </div>
</template>

<script>
import BlogHeader from '~/components/BlogHeader.vue'
import BlogFooter from '~/components/BlogFooter.vue'
export default {
  components: {
    BlogHeader,
    BlogFooter
  }
}
</script>

<style lang="less">
@import '~assets/common.less';

.top-wrapper {
  margin-top: 3rem;
}
</style>
