// pages/eva_result/eva_result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  bindViewTap:function(){
    wx.navigateTo({
      url: '../../check/check',
    })
  },
  goToAsk:function(param){
    wx.navigateTo({
      // 测试，合并时直接跳转到聊天框
      url: '../check/check',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
   Doctor:function (name,admin,position) {
    this.setData({
      Name:name,
      Admin:admin,
      Position:position,
    })
      
    },
    onLoad: function (options) {
      this.Doctor('杨新华','妇科 ',' 副主任医师')
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
