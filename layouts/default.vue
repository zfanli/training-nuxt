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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.top-wrapper {
  margin-top: 3rem;
}
</style>
