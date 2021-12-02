
const appInstance = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    descripnum:0,
    descriptext:null,
    title: null,
    titlenum:0,
    id:null

  },

  title:function(e){
    this.setData({
      title: e.detail.value,
      titlenum: e.detail.value.length
    })
  },

  descrip:function(e){
    this.setData({
      descriptext: e.detail.value,
      descripnum: e.detail.value.length
    })
  },

  submitForm:function(e){
    var self = this
    wx.request({
      url: appInstance.globalData.serverUrl+'/postQuestion',
      data:{
        uid : this.data.id,
        description : this.data.descriptext,
        title : this.data.title
      },
      method: 'POST',
      header: {
        'content-type': 'application/json;charset=UTF-8'
      },
      success(v) {
        var qid = v.data
        if(v.data)
        wx.redirectTo({
          url: '../questionPage/questionPage?qid='+qid +'&id='+ self.data.id
        })
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id : options.id
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