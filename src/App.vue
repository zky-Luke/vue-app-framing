<template>
  <div id="app">
    <transition :name="$transition">
      <keep-alive :include="['home']">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  computed: {
    key() {
      // 由于路由组件的复用问题, 相同路由切换, 是不会出现动画效果的, 比如从 /article/1 切换到 /article/2
      // return this.$route.path.replace(/\//g, '_')
      return ''
    }
  },
  mounted() {},
  watch: {
    $route(to, from, next) {
      this.dataInteractionResponse(data => {
        // console.log(data)
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
