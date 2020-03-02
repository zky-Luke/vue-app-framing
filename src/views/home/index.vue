<template>
  <div class="home">
    <!-- <img src="../../assets/logo.png" /><br /> -->
    {{ msg }}
    <svg-icon icon-class="earth"/>
    <br>
    <br>
    <van-button disabled type="primary">禁用状态</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/test">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/test">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/test">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js Frame',
      active: 0
    }
  },

  mounted() {
    console.log(process.env)
    // 模拟数据
    setTimeout(() => {
      this.dataInteractionResponse('{"msgType":"0x0002","age":15}')
    }, 5000)
    // 接口请求
    this.dataInteractionRequest({
      msgType: '0x0001'
    })
    // 接口返回
    this.dataInteractionResponse(data => {
      console.log('data', data)
      switch (data.msgType) {
        case '0x0002':
          break
      }
    })
  }
}
</script>

<style scoped lang="less">
.home {
  // .fs;
  height: 100%;
  background-color: #fff;
  img {
    width: 160px;
    height: 160px;
    margin: 100px 0 50px 0;
  }
}
</style>
