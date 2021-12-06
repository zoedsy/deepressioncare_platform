// pages/home/home.js
import Api from '../../api/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navID:1,
    first:false,
    second:true,
    bannerList:[
      {
        bannerID: "1",
        pic: "/images/swiper1.png",
      },
      {
        bannerID: "2",
        pic: "/images/swiper2.png",
      },
      {
        bannerID: "3",
        pic: "/images/swiper3.png",
      },
    ],
    article_list: [
   
  ],
    doctor_list:[
      
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求文章数据
    api.getRequestData('knowledge/first_page',{},'GET',false).then((res)=>{
      console.log(res)
      this.setData({ 
        article_list:res.data.data
      })
      console.log(this.data.article_list)
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

  changeNav:function(event){
    let navID = event.currentTarget.id;
    this.setData({
      navID:navID*1
    })
    console.log(this.data.navID)
    if(navID==1){
      //请求文章数据
    api.getRequestData('knowledge/first_page',{},'GET',false).then((res)=>{
      console.log(res)
      this.setData({ 
        article_list:res.data.data,
        first:false,
        second:true,
      })
      console.log(this.data.article_list)
    })
   
    }
    else if(navID==2){
      api.getRequestData('doctor_first_page/list',{},'GET',false).then((res)=>{
        console.log(res)
        this.setData({ 
          doctor_list:res.data.data,
          first:true,
          second:false,
        })
        console.log(this.data.doctor_list)
      })
    }

  },

  toDetail:function(e){
    console.log(e)
    let index=e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/home/tipDetail/tipDetail?index='+index,
    })
  },

  more:function(){
    if(this.data.navID==1){
      wx.navigateTo({
        url: '/pages/home/tips/tips',
      })
    }
    else if(this.data.navID==2){
      wx.navigateTo({
        url: '/pages/doctor/doctor',
      })
    }
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