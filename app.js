// app.js
import Api from './api/api';
const api = new Api();
const app = getApp();
App({
  globalData: {
    userInfo: null,
    openId: "",
    token:"",
    url: "http://106.13.28.21:8081",
    url_post:"http://106.13.28.21:8081/api/bbs/submit_post"
  },
 
  onShow(){
    this.onLaunch()
  },

  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    
  },
  
})
