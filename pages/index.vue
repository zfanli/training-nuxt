<template>
  <section class="index">
    <div>
      <article v-for="item in list" :key="item.title" class="post-list">
        <h2 class="post-title">
          <nuxt-link :to="`/testDynamicRoute/${item.path}`">{{
            item.title
          }}</nuxt-link>
        </h2>
      </article>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['list'])
  },
  transition: 'opacity'
}
</script>

<style lang="less">
@import '~assets/common.less';

.index {
  display: flex;

  .post-list {
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 3px 5px -5px rgba(0, 0, 0, 0.4);
    .transition();

    &:hover {
      box-shadow: 0px 3px 16px -5px rgba(0, 0, 0, 0.4);
      .hover-trans();
    }

    .post-title {
      a {
        color: inherit;
      }
    }
  }
}
</style>
