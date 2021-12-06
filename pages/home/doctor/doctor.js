// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    doctor_list:[
      
    ]
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
    //请求医生数据
    // api.getRequestData('doctor_first_page/list',{},'GET',false).then((res)=>{
    //   console.log(res)
    //   this.setData({ 
    //     article_list:res.data.data
    //   })
    //   console.log(this.data.article_list)
    // })
    // wx.request({               
    //   url:'http://127.0.0.1/get/consult/doctor_list?page='+this.data.page,
    //   data:{
    //     //categoryType:this.data.tabCur+1
    //   },
    //   success: (res) => {
    //     this.setData({ 
    //       doctor_list:res.data.data
    //     })
    //   }
    // })  
  },

  // 跳转详细对话框
  toDetail:function(){
    let index=e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/chat/chat?index='+index,
    })
  },

  // 上拉刷新
  scrolltolower() {
    if (this.lock) {
      wx.showToast({
        title: '已经到底了！',
        icon: 'none'
      })
      return
    }
    this.data.page++
      wx.showLoading({
        title: '正在加载中...',
      })
    //   wx.request({               
    //     url:'http://127.0.0.1/get/consult/doctor_list?page='+this.data.page,
    //     data:{
    //       //categoryType:this.data.tabCur+1
    //     },
    //     success: (res) => {
    //       var goodsList = this.data.doctor_list;
    //       const newGoods = res.data.data
    //       if (newGoods.length <= 0) {
    //         //this.lock = true
    //         wx.hideLoading()
    //         wx.showToast({
    //           title: '已经到底了！',
    //           icon: 'none'
    //         })
    //         this.setData({
    //           hasMore: false
    //         })
    //         return
    //       }
    //       wx.hideLoading()
    //       goodsList = [...goodsList, ...newGoods]    //取数组里的一个值，然后再赋值到一个新数组里
    //       this.setData({
    //         doctor_list: goodsList
    //       }) 
    //   }
    // })  
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