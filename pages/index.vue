<template>
  <section class="index">
    <div>
      <article v-for="item in list" :key="item.title" class="post-list">
        <h2>{{ item.title }}</h2>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: new Array(3).fill(0).map((_, i) => ({
        title: `假装这是第${i + 1}篇文章`
      }))
    }
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
  }
}
</style>
