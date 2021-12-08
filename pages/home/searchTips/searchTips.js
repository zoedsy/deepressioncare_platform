// pages/home/tips/tips.js
import Api from '../../../api/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    inputValue:'',
    hasMore:true,
    article_list: [],
  },


toDetail:function(e){
  let index=e.currentTarget.dataset.index;
  wx.navigateTo({
    url: '/pages/home/tipDetail/tipDetail?index='+index,
  })
},

// 上拉刷新
scrolltolower() {
  if (!this.data.hasMore) {
    wx.showToast({
      title: '已经到底了！',
      icon: 'none'
    })
    return
  }
  this.data.page++
    
    //查询
    this.query()

},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      inputValue:options.value
    })
    console.log(this.data.inputValue)
    this.query()
   
  },

  //搜索框文本内容显示
  inputBind: function(event) {
    this.setData({
        inputValue: event.detail.value
    })
    console.log('bindInput' + this.data.inputValue)

  },
 /**
 * 搜索执行按钮
 */
query: function(event) {
  // wx.showLoading({
  //   title: '正在加载中...',
  // })
  //请求搜索知识结果
  // api.getRequestData('search/knowledge',{keyWords:this.data.inputValue,content:this.data.inputValue,page:this.data.page},'GET',false).then((res)=>{
  //     console.log(res)
  //     if (!res.data.hasMore) {
  //       wx.hideLoading()
  //       wx.showToast({
  //         title: '已经到底了！',
  //         icon: 'none'
  //       })
  //       this.setData({
  //         hasMore: false
  //       })
  //       return
  //     }
  //     wx.hideLoading()
  //     var tmpList = [...this.data.article_list, ...res.data.data]    //取数组里的一个值，后再赋值到一个新数组里
  //     this.setData({
  //       article_list: tmpList
  //     }) 
  //     console.log(this.data)
  //   })
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