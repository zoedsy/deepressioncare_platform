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
  },

  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    
    // 如果有本地缓存的openid，就直接登录
    if(wx.getStorageSync('openid')){
      app.globalData.openid = wx.getStorageSync('openId')
      app.globalData.token = wx.getStorageSync('token')
      wx.reLaunch({
        url: '/pages/home/home',
      })
    }
    //登录
    wx.login({
      success (res) {
        if (res.code) {
          
          // 请求 openid,token
          api.getRequestData('api/wx/wx_login',{code: res.code},'POST',false).then((res)=>{  
            console.log("login",res.data)
            app.globalData.openId = res.data.openId,
            app.globalData.token = res.data.token,
            wx.setStorageSync('openId', res.data.openId) // 缓存openid
            wx.setStorageSync('token', res.data.token) // 缓存token
            wx.reLaunch({  // 跳转到首页界面
              url: '/pages/home/home',
            })
          }).catch((err)=>{
              console.log(err)
          })
         
        }
      }
  })

  },
  
})
