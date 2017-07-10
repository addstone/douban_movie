import axios from 'axios'
const configPath = '/api';

export const utils = {
  get(url, data = {}){
    url = configPath + url;
    return new Promise((resolve, reject) => {
      axios.get(url, data).then((response) => {
        resolve(response.data)
      })
    })
  },
  getScrollTop () {
    let scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }
    return scrollTop
  },
  // 获取当前可是范围的高度
  getClientHeight () {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
  },
  // 获取文档完整的高度
  getScrollHeight () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  }
};


