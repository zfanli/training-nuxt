<template>
  <section class="dujie-container">
    <div>
      <h1 class="dujie-title">渡劫</h1>
      <h2 class="dujie-subtitle">何方道友在此渡劫？</h2>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'opacity'
}
</script>

<style>
.dujie-container {
  display: flex;
  justify-content: center;
  text-align: center;
}
.dujie-title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 144px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 4px 4px 0 #333, -2px -2px 0 #333, 4px -2px 0 #333,
    -2px 4px 0 #333, -1px 3px 0 #333;
}
.dujie-subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
