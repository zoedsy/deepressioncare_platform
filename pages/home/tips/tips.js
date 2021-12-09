// pages/home/tips/tips.js
import Api from '../../../api/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: "1",
        name: "生活",
      },
      {
        id: "2",
        name: "心理",
      },
      {
        id: "3",
        name: "健康",
      },
      {
        id: "4",
        name: "科学",
      },
      {
        id: "5",
        name: "饮食",
      },
      {
        id: "6",
        name: "知识",
      },
    ],
    tabCur: 0, //默认选中
    article_list: [
      
    ],
    inputValue:"",
  },

  //顶部选择分类条目
  tabSelect(e) {
    this.setData({
        tabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id - 2) * 200
    }, success => {
        this.onLoad()
    })
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
    api.getRequestData('knowledge/get_list',{name:this.data.tabs[this.data.tabCur].name},'GET',false).then((res)=>{
      console.log(res)
      this.setData({ 
        article_list:res.data.data
      })
      console.log(this.data.article_list)
    })
    // wx.request({               
    //   // url:'http://127.0.0.1/Knowledge/get_list/findByCategoryType',
    //   url:'https://www.fastmock.site/mock/2df30e9559935cce6e75510d380b27bd/api/knowledge/get_list',
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
  query: function(event) {
    //跳转搜索知识结果页面
    wx.navigateTo({
      url: '/pages/home/searchTips/searchTips?value='+this.data.inputValue,
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