// pages/doctor/doctor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    doctor_list:[
      {
        id: "1", 
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        name:"杨新华",
        title:"副主任医师",
        hospital:"华西医院",
        excel:"运用心理学、发展心理学、人格心理学、变态心理学等理论知识，通过理疗等手段，解决来访者心理障碍"
      },
      {
        id: "2",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        name:"杨新华",
        title:"副主任医师",
        hospital:"华西医院",
        excel:"运用心理学、发展心理学、人格心理学、变态心理学等理论知识，通过理疗等手段，解决来访者心理障碍"
      },
      { 
        id: "3",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        name:"新华",
        title:"副主任医师", 
        hospital:"华西医院",
        excel:"运用心理学、发展心理学、人格心理学、变态心理学等理论知识，通过理疗等手段，解决来访者心理障碍,运用心理学、发展心理学"
      },
      {
        id: "4", 
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        name:"杨新华",
        title:"副主任医师",
        hospital:"华西医院",
        excel:"运用心理学、发展心理学、人格心理学、变态心理学等理论知识，通过理疗等手段，解决来访者心理障碍"
      },
      {
        id: "5",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        name:"杨新华",
        title:"副主任医师",
        hospital:"华西医院",
        excel:"运用心理学、发展心理学、人格心理学、变态心理学等理论知识，通过理疗等手段，解决来访者心理障碍"
      },
      { 
        id: "6",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        name:"新华",
        title:"副主任医师", 
        hospital:"华西医院",
        excel:"运用心理学、发展心理学、人格心理学、变态心理学等理论知识，通过理疗等手段，解决来访者心理障碍,运用心理学、发展心理学"
      }
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
    // let index=e.currentTarget.dataset.index;
    wx.navigateTo({
      // url: '/pages/chat/chat?index='+index,
      url:'/pages/chat/chat'
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