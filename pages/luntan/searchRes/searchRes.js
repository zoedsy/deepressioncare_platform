// pages/luntan/luntan.js
import Api from "../../../api/api.js"
const api = new Api();
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    page:0,
    inputValue:'',
    hasMore:true,
    posts:[],
    none:true
  },
  
  entrySearch(e) {
    wx.navigateTo({
      url: '/pages/luntan/searchbar/searchbar',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //搜索值
    console.log(options)
    this.setData({
      inputValue:options.value
    })
    console.log(this.data.inputValue)
    //请求结果
    var that =this;
    wx.setNavigationBarTitle({
      title: '帖子搜索结果',
    })
    api.getRequestData(app.globalData.url_search_post,{keyWords:this.data.inputValue,content:this.data.inputValue,page:this.data.page},"GET",false).then(res=>{
      console.log("res.data.data",res.data.data)
      that.setData({posts:res.data.data.data});
      if(this.data.posts.length>0){
        this.setData({
          none:false
        })
      }
    }).catch(err=>{
      console.log("catch error")
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
  
  },

  lookDetail:function(event){
    console.log("event",event);
    app.globalData.post=event.currentTarget.dataset.item;
    wx.navigateTo({
      // 直接把item传到detail页面
      // url: '../../pages/luntan/detail/detail?post='+event.currentTarget.dataset.post,
      url: '/pages/luntan/detail/detail'
    })
  }
})
