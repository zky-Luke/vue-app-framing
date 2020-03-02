/**
 * 判断设备类型 EQUIPMENT_TYPE
 * @method NAVIGATOR
 */
export const NAVIGATOR = () => {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return 'Wechat'
  } else {
    var u = window.navigator.userAgent
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
      return 'Android'
    } else if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {
      return 'IOS'
    } else {
      return 'NULL'
    }
  }
}
