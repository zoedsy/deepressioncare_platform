// pages/mall/mall.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    goods:[
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "香氛有助于缓解心情",
        desc:"1、栀子花香氛精油：能够改善睡眠缓解不安情绪，加强心肌收缩力对衰竭心脏作用更加显著。 2、葡萄柚精油：最具有制怒的作用，香氛可以进一步适当地缓解紧张度。",
        // current_price:"￥89",
        // original_price:"￥138",
        // sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "香氛有助于缓解心情",
        desc:"1、栀子花香氛精油：能够改善睡眠缓解不安情绪，加强心肌收缩力对衰竭心脏作用更加显著。 2、葡萄柚精油：最具有制怒的作用，香氛可以进一步适当地缓解紧张度。",
        // current_price:"￥89",
        // original_price:"￥138",
        // sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "香氛有助于缓解心情",
        desc:"1、栀子花香氛精油：能够改善睡眠缓解不安情绪，加强心肌收缩力对衰竭心脏作用更加显著。 2、葡萄柚精油：最具有制怒的作用，香氛可以进一步适当地缓解紧张度。",
        // current_price:"￥89",
        // original_price:"￥138",
        // sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "香氛有助于缓解心情",
        desc:"1、栀子花香氛精油：能够改善睡眠缓解不安情绪，加强心肌收缩力对衰竭心脏作用更加显著。 2、葡萄柚精油：最具有制怒的作用，香氛可以进一步适当地缓解紧张度。",
        // current_price:"￥89",
        // original_price:"￥138",
        // sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "香氛有助于缓解心情",
        desc:"1、栀子花香氛精油：能够改善睡眠缓解不安情绪，加强心肌收缩力对衰竭心脏作用更加显著。 2、葡萄柚精油：最具有制怒的作用，香氛可以进一步适当地缓解紧张度。",
        // current_price:"￥89",
        // original_price:"￥138",
        // sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      },
      {
        good_img:"https://img.xiaohongshu.com/items/c1a0056ba9ba17b30446a0e040dc9e30@800w_90Q_1x_2o.jpg",
        title: "香氛有助于缓解心情",
        desc:"1、栀子花香氛精油：能够改善睡眠缓解不安情绪，加强心肌收缩力对衰竭心脏作用更加显著。 2、葡萄柚精油：最具有制怒的作用，香氛可以进一步适当地缓解紧张度。",
        // current_price:"￥89",
        // original_price:"￥138",
        // sign_img:"https://img.xiaohongshu.com/seller/0d1b063d887360fc5a3779bd6784a453"
      }
    ]
  },
  
  entrySearch(e) {
    wx.navigateTo({
      url: '../luntan/searchbar/searchbar',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '论坛',
    })
    wx.request({               //请求数据
      // url: 'https://www.easy-mock.com/mock/5b1e17a0d4a14a3247a6cd6b/data',
      success: (res) => {
        this.setData({
          goods: res.data.data
        })
        console.log(this.data.goods)
      }
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
