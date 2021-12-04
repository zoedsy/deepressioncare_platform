// pages/home/tips/tips.js
import Api from '../../../api/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    article_list: [
       {
         "knowledgeId": 1,
         "title":'抑郁中的年轻人：我们如何冲出阴霾',
         "category":'生活',
         "releaseDate":'2021-11-05',
         "coverImageUrl":"https://s.cyol.com/shuzibao/cmsfile/paper/2021/1105/20211105060022796.jpg",
         "readAmount":9999,
         "likes":105
       },
    ],
  },


toDetail:function(e){
  let index=e.currentTarget.dataset.index;
  wx.navigateTo({
    url: '/pages/home/tipDetail/tipDetail?index='+index,
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求文章数据
    // api.getRequestData('api/user/diagnose_history_retrieve',{openId: wx.getStorageSync('openId')},'GET',false).then((res)=>{
    //   this.setData({ 
    //     article_list:res.data.data
    //   })
    // })
    // wx.request({               
    //   url:'http://106.13.28.21:8081/api/user/diagnose_history_retrieve?openId='+ wx.getStorageSync('openId'),
    //   data:{
    //     categoryType:this.data.tabCur+1
    //   },
    //   success: (res) => {
    //     this.setData({ 
    //       article_list:res.data.data
    //     })
    //   }
    // })  
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