// pages/home/tips/tips.js
import Api from '../../../api/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    article_list: [
      
    ],
    record_list:[]
  },


// toDetail:function(e){
//   let index=e.currentTarget.dataset.index;
//   wx.navigateTo({
//     url: '/pages/home/tipDetail/tipDetail?index='+index,
//   })
// },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求诊断记录
    api.getRequestData('/api/diagnose/get_diagnose_history_list',{},'GET',false).then((res)=>{
      console.log("诊断记录的内容：",res)
      this.setData({ 
        record_list:res.data.data
      })
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