// app.js
import Api from './api/api.js';
const api = new Api();
const app = getApp();
App({
  globalData: {
    userInfo: null,
    openId: "",
    token:"",
    posts:[],
    // relies
    post:{},
    // url: "http://106.13.28.21:8081",
    // url: "http://10.132.49.110:8080",
    // chuanyi
    // url = "http://192.168.40.117:8080",
    //dsy
    url: "http://192.168.43.202:8080",
    url_post:"api/bbs/submit_post",
    url_post_list:"api/bbs/look_post_list",
    url_search_post:"api/search/post",
    url_comment:"api/bbs/comments/submit_comment",
    url_comment_get:"api/bbs/comments/list",
    url_sumbit_diagnose_file:"api/diagnose/submit_diagnose_file",
    url_get_diagnose_history_list:'api/diagnose/get_diagnose_history_list',
    message:"",
    comment_list:[]
  },
  
  onShow(){
  },

  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    
  },
  
})
