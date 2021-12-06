// app.js
import Api from './api/api';
const api = new Api();
const app = getApp();
App({
  globalData: {
    userInfo: null,
    openId: "",
    token:"",
    // url: "http://106.13.28.21:8081",
    url: "http://192.168.43.202:8080",
    url_post:"api/bbs/submit_post",
    url_post_list:"api/bbs/look_post_list"
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
