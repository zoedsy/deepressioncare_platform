// pages/luntan/luntan.js
import Api from "../../api/api.js"
const api = new Api();
const app = getApp();

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
    ],
    posts:[]
  },
  
  entrySearch(e) {
    wx.navigateTo({
      url: './searchbar/searchbar',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    wx.setNavigationBarTitle({
      title: '论坛',
    })
    api.getRequestData(app.globalData.url_post_list,{},"Get",false).then(res=>{
      console.log("look_posts_res",res);
      console.log("res.data.data",res.data.data)
      that.setData({posts:res.data.data});
      // console.log("posts",that.posts);
      console.log("posts",res.data.data[0].ciAvatarturl);
    }).catch(err=>{
      console.log("catch error")
    })

    // wx.request({               //请求数据
    //   // url: 'https://www.easy-mock.com/mock/5b1e17a0d4a14a3247a6cd6b/data',
    //   success: (res) => {
    //     this.setData({
    //       goods: res.data.data
    //     })
    //     console.log(this.data.goods)
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
    var that =this;
    api.getRequestData(app.globalData.url_post_list,{},"Get",false).then(res=>{
      console.log("look_posts_res",res);
      console.log("res.data.data",res.data.data)
      that.setData({posts:res.data.data});
      app.globalData.posts=res.data.data
      console.log("app.global.posts",app.globalData.posts)
      console.log("posts",res.data.data[0].ciAvatarturl);
      // <!-- console.log("item.ciAvatarurl",item.ciAvatarurl) -->
    }).catch(err=>{
      console.log("catch error")
    })
  
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

// @title    addPosts
// @description 发帖
// @auth      shiyidu            
// @param     e
// @return   无
  addPosts:function(){
    wx.checkSession({
      success: (res) => {
        wx.navigateTo({
          url: '/pages/luntan/release/release',
        })
      },
      fail:(err)=>{
        wx.showToast({
          title: '请先登录再发帖',
          icon:'none'
        })
      },
    })
  },
  
  lookDetail:function(event){
    console.log("event",event);
    app.globalData.post=event.currentTarget.dataset.item;
    wx.navigateTo({
      // 直接把item传到detail页面
      // url: '../../pages/luntan/detail/detail?post='+event.currentTarget.dataset.post,
      url: '../../pages/luntan/detail/detail'
    })
  }
})
