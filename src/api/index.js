import Vue from 'vue'
import { NAVIGATOR } from '@/utils/index'

const install = Vue => {
  if (install.installed) {
    return
  }
  install.installed = true

  /**
   * 数据交互请求接口
   * @method dataInteractionRequest
   * @param  {string}   data        需要发送的数据，必选
   */
  Vue.prototype.dataInteractionRequest = function(data) {
    console.log('Request:', data)
    if (process.env.NODE_ENV === 'development') return
    switch (NAVIGATOR()) {
      case 'IOS':
        var obj = {
          data: JSON.stringify(data)
        }
        window.webkit.messageHandlers.dataInteractionRequest.postMessage(obj)
        break
      case 'Android':
        window.Data.dataInteractionRequest(JSON.stringify(data))
        break
    }
  }

  /**
   * 数据交互响应接口
   * @method dataInteractionResponse
   */
  Vue.prototype.dataInteractionResponse = function(fn) {
    switch (NAVIGATOR()) {
      case 'IOS':
      case 'Android':
        window.dataInteractionResponse = function(data) {
          let res = JSON.parse(data)
          console.log('Response:', res)
          fn(res)
        }
        break
    }
  }
}

Vue.use(install)
export default install
