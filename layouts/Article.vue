<template>
  <article>
    <nuxt />
    <aside>假装这里是菜单</aside>
    <blog-footer />
  </article>
</template>

<script>
import BlogFooter from '~/components/BlogFooter.vue'

export default {
  components: {
    BlogFooter
  }
}
</script>
