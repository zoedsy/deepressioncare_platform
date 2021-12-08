import Api from '../../api/api';
const api = new Api();
const Config=require("../../api/config")
const util=require("../../utils/util")

// pages/chatlist/chatlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getChatList()
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

  },
  getChatList:function(){
    console.log("获取聊天列表")
    api.getRequestData("api/consult/query_consult_list").then((res)=>{
      console.log(res)
      let items={}
      items=res.data.data;
      for(let i=0;i<items.length;i++){
        items[i].lastTime=util.getDateDiff(items[i].lastTime)
      }
      console.log(items)
      this.setData({
        items:items
      })
    })
  },
  openSession:function(e){
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/chat/chat?id=' + id,
    })
  }
  
})