<template>
  <div>
    <h2>{{ message }}</h2>
    <test-comp2 />
  </div>
</template>

<script>
import TestComp2 from '~/test/test2.vue'

export default {
  data() {
    return {
      message: this.$store.state.lang
    }
  },
  components: { TestComp2 }
}
</script>

<style lang="less">
@import '~assets/common.less';

h2 {
  color: red;
  .transition();
}
</style>
