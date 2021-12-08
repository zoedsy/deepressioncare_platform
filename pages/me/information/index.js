// pages/information/index.js
const {
  APIURL,
} = require('../../../api/config.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoMess:'',
    na:'',
    se:'',
    height:'',
    weight:'',
    BMI:'',
    illness:'',
    isSmoke:['是', '否'],
    smokeIndex:0,
    date: '1900-01-01'
  },


  

  nameInput:function(e){
    this.setData({
      na:e.detail.value
    })
    wx.setStorageSync('username', this.data.na)
  },

  sexInput:function(e){
    this.setData({
      se:e.detail.value,
      // sex:e.detail.value
    })
    wx.setStorageSync('usersex', this.data.se)
  },

  dateInput:function(e){
    this.setData({
      date:e.detail.value
    })
    wx.setStorageSync('userbir', this.data.date)
  },


  heightInput:function(e){
    let height = e.detail.value;
    this.setData({
      height:height
    })
    wx.setStorageSync('userheight', this.data.height)
  },

  weightInput:function(e){
    this.setData({
      weight:e.detail.value
    })
    wx.setStorageSync('userweight', this.data.weight)
  },

  bmiInput:function(e){
    this.setData({
      BMI:e.detail.value
    })
    wx.setStorageSync('userbmi', this.data.BMI)
  },

  illnessInput:function(e){
    this.setData({
      illness:e.detail.value
    })
    wx.setStorageSync('userill', this.data.illness)
  },

  smokeInput:function(e){
    this.setData({
      smokeIndex:e.detail.value,
    })
    wx.setStorageSync('usersmoke', this.data.smokeIndex)
  },

  // bindPickerChange: function (e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },


  saveBtnClick:function(){
    if(this.data.na.length == 0
      || this.data.se.length == 0 || this.data.date.length == 0){
      wx.showToast({
        title: '温馨提示：必填项不能为空！',
      })
    }else{
        wx.showLoading({
          title: '加载中...',
          mask:true
        })
        var token = wx.getStorageSync("token");
        var openId = wx.getStorageSync("openId");
        var params = {}
        params.cild = openId;
        params.userName = this.data.na;
        if(this.data.se=="男"){
          params.sex = 0
        }
        else if (this.data.se=="女"){
          params.sex = 1
        }
        params.userBirthday = this.data.date
        params.userHeight = parseFloat(this.data.height)
        params.userWeight = parseFloat(this.data.weight)
        params.userBmi = parseFloat(this.data.BMI)
        params.diseaseHistory = this.data.illness
        if(this.data.smokeIndex==0){
          params.smokeHistory = "是"
        }  
        else{
          params.smokeHistory = "否"
        }

        // toekn=encodeURIComponent(token);
        wx.request({
          url: `${APIURL}/healthy/post_healthy_record`,
          data:params,
          method: 'POST',
          header: {
            'Content-Type': 'application/json',
            'token': token
          },
          success: (res) => {
            wx.hideLoading();
            console.log("params:",params)
            console.log("res",res)
            wx.navigateBack({
              delta: 1
            });
          },
          fail: function (err) {
            wx.hideLoading();
            wx.showToast({
              title: "请求失败",
              icon: 'none',
              duration: 1500
            });
          }
        })

  }
},

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    
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
    this.setData({
      na:wx.getStorageSync('username'),
      se:wx.getStorageSync('usersex'),
      date:wx.getStorageSync('userbir'),
      height:wx.getStorageSync('userheight'),
      weight:wx.getStorageSync('userweight'),
      BMI:wx.getStorageSync('userbmi'),
      illness:wx.getStorageSync('userill'),
      smokeIndex:wx.getStorageSync('usersmoke')
    })
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