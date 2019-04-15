<template>
  <footer class="footer">
    <div>Training of Nuxt.js @Richard</div>
    <div>Current page was displayed in {{ langMap[lang] }}.</div>
    <div class="links">
      <nuxt-link to="/">主页</nuxt-link>
      <nuxt-link to="/about">关于</nuxt-link>
      <nuxt-link to="/dujie">渡劫</nuxt-link>
    </div>
  </footer>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      langMap: {
        en: 'English',
        zh: 'Chinese',
        ja: 'Japanese'
      }
    }
  },
  computed: {
    ...mapState(['lang'])
  }
}
</script>

<style lang="less" scoped>
.footer {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2rem;

  .links {
    a {
      margin: 0 0.25rem;
    }
  }
}
</style>
