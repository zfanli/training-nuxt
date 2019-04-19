<template>
  <article>{{ post.title }}</article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'default',
  transition: 'opacity',
  computed: {
    ...mapState(['list']),
    post() {
      for (const p of this.list) {
        if (p.path === this.$route.params.id) {
          return p
        }
      }
      return { title: 'No Found' }
    }
  }
}
</script>
