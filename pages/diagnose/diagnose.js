// pages/diagnosis/diagnosis.js
Page({
  /** 
   * 页面的初始数据
   */
  data: {

  },
  Patient:function (name,department,date) {
    this.setData({
      Name:name,
      Deparment:department,
      Date:date,
    })
      
    },
    
  //上传音频事件处理
  bindViewTap:function(){
    wx.navigateTo({
      url: '/pages/audio/audio'
    })
  },
// 跳转到个人页面
  goToPerson:function(){
    wx.navigateTo({
      // 跳转个人页面
      // url: '../Person/person',
      // 测试案例
      url: '/pages/check/check'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Patient('张玉','精神科室','2021-11-20')
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
