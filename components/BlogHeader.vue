<template>
  <header class="header">
    <div class="header-home">
      <nuxt-link to="/">假装这是一个 Logo</nuxt-link>
    </div>
    <div class="header-links">
      <nuxt-link to="/about"> <icon type="ios-leaf-outline" />关于 </nuxt-link>
    </div>
  </header>
</template>

<style lang="less">
.header {
  height: 3rem;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100vw;
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
