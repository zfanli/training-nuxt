<template>
  <header class="header">
    <section class="header-home">
      <nuxt-link to="/">假装这是一个 Logo</nuxt-link>
    </section>
    <section class="header-links">
      <nuxt-link to="/about"> <icon type="ios-leaf-outline" />关于 </nuxt-link>
    </section>
  </header>
</template>

<style lang="less">
.header {
  height: 3rem;
  position: relative;
  box-shadow: 0px 3px 13px -5px rgba(0, 0, 0, 0.4);

  .header-home,
  .header-links {
    position: absolute;
    display: block;
    margin: 1rem;

    a {
      color: #333;
    }
  }

  .header-links {
    right: 0;
  }
}
</style>
