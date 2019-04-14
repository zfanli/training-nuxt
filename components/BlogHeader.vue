<template>
  <header class="header">
    <div class="header-home">
      <nuxt-link to="/"
        ><Icon type="ios-bowtie-outline" />假装是 Logo</nuxt-link
      >
    </div>
    <div class="header-links">
      <nuxt-link to="/about"> <Icon type="ios-leaf-outline" />关于 </nuxt-link>
      <div class="i18n">
        <label for="language"><Icon type="md-globe"/></label>
        <Select id="language" name="i18n" size="small" :value="displayLang">
          <Option v-for="item in lang" :key="item.value" :value="item.value">{{
            item.label
          }}</Option>
        </Select>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      displayLang: 'zh',
      lang: [
        {
          value: 'zh',
          label: 'ZH'
        },
        {
          value: 'en',
          label: 'EN'
        },
        {
          value: 'ja',
          label: 'JA'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '~assets/common.less';

.header {
  height: 3rem;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100vw;
  box-shadow: 0px 3px 5px -5px rgba(0, 0, 0, 0.4);
  .transition();
  &:hover {
    box-shadow: 0px 3px 26px -5px rgba(0, 0, 0, 0.4);
    .hover-trans();
  }

  .header-home,
  .header-links {
    position: absolute;
    display: flex;
    margin: 0.75rem;
    line-height: 1.5rem;

    a {
      display: block;
      color: #333;
      .transition();
      &:hover {
        .hover-trans();
      }
      // Todo text shadow?
    }

    .i18n {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      .transition();
      &:hover {
        .hover-trans();
      }

      #language {
        width: 4rem;
        margin-left: 0.5rem;
      }
    }
  }

  .header-links {
    right: 0;
  }
}
</style>
