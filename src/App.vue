<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  mounted() {
    if (window.localStorage.getItem('access_token') !== null) {
      this.$router.push('dashboard')
    } else {
      this.$router.push('setup')
    }
  }
}
</script>

<style lang="less">
@import './styles/main.less';

@color-black: #212121;
@color-grey: #dedede;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6, p, a {
  color: @color-black;
}
#app {
  .full-screen;
}
</style>
