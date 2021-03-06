// pages/person/index.js
const {
  APIURL,
} = require('../../api/config.js');
const app = getApp()
import Api from '../../api/api';
const api = new Api();
Page({
 


  data:{
    userInfo: {},
    hasUserInfo: false,
    code:"",
    state:false,
  },

  getUserProfile(e) {
    //先login，再getUserProfile
    wx.login({
      success: (res) => {
        // console.log("code",res)
        this.setData({
          code:res.code
        })
      }
    })
    wx.getUserProfile({
      desc: '用户登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (file) => {
        // console.log(file)
        this.setData({
          userInfo: file.userInfo,
          hasUserInfo: true
        })

        // 请求 openid,token
        wx.request({
          // url: 'http://106.13.28.21:8081/api/wx/wx_login',
          url:`${APIURL}/api/wx/wx_login`,
          data: {
            "code": this.data.code,
            "rawData": file.rawData,
            "signature": file.signature,
            "encrypteData": file.encryptedData, //用户敏感信息
            "iv": file.iv //解密算法的向量
          },
          method: 'POST',
          header: {
            'content-type': 'application/json'
          },
          success:(res)=>{  
            console.log(res.data)
            app.globalData.openId = res.data.data.id;
            app.globalData.token = res.data.data.token;
            console.log("登录后的返回-----------",res.data.data);
            console.log("登录后的返回id-----------",res.data.data.id)
            wx.setStorageSync('openId', res.data.data.id) // 缓存openid
            wx.setStorageSync('token', res.data.data.token) //缓存token
            wx.setStorageSync('userInfo', res.data.data.usefInfo)
            this.onShow()
          },fail:(err)=>{
            console.log("request err",err)
          }
        })
      },
      fail:(err)=>{
        console.log("userprofile err",err)
      }
    })

    
    
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    // wx.getUserProfile({
    //   desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    //   success: (res) => {
    //     // console.log(res),
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
      
    // })
    // wx.setStorageSync('userinfo', 'userInfo'),
    
    // wx.navigateBack({
    //   delta: 1
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //session是否过期
    wx.checkSession({
      success: (res) => {
        console.log("session",res)
        // 本地缓存没过期，就直接登录
        if(wx.getStorageSync('token')){
          this.setData({
            userInfo:wx.getStorageSync('userInfo')
          })
          api.getRequestData('healthy/get_healthy_record/isfinish',{},'GET',false).then((res)=>{
            console.log("state",res.data)
            this.setData({
              state:res.data.data
            })
          })
        }
      },
      fail:(err)=>{
        console.log("session err",err)
        //过期重新登陆
        if(wx.getStorageSync('token')){
          wx.showToast({
            title: '用户登录已过期，请重新登录',
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载中',
    })
    wx.checkSession({
      success: (res) => {
        console.log("session",res)
        api.getRequestData('healthy/get_healthy_record/isfinish',{},'GET',false).then((res)=>{
          console.log("state",res.data)
          this.setData({
            state:res.data.data
          })
        })
      },
      fail:(err)=>{
        console.log("session err",err)
        
      },
      complete:()=>{
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
    // if(wx.getStorageSync('token')){
    //   api.getRequestData('healthy/get_healthy_record/isfinish',{},'GET',false).then((res)=>{
    //     console.log("state",res.data)
    //     this.setData({
    //       state:res.data.data
    //     })
    //   })
      
    // }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})