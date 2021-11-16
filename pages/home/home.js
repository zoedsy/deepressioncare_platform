// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navID:1,
    first:false,
    second:true,
    third:true,
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
      {
        id: "1",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "Nature子刊：重大发现，抑郁症是与生俱来的",
        read:"7",
        like:"156"
      },
      {
        id: "2",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "Nature子刊：重大发现，抑郁症是与生俱来的",
        read:"7",
        like:"156"
      },
      {
        id: "3",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "Nature子刊：重大发现，抑郁症是与生俱来的",
        read:"7",
        like:"156"
      },
      {
        id: "4",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "Nature子刊：重大发现，抑郁症是与生俱来的",
        read:"7",
        like:"156"
      },
      {
        id: "5",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "Nature子刊：重大发现，抑郁症是与生俱来的",
        read:"7",
        like:"156"
      },
      {
        id: "6",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        date:"2019-8-21",
        address: "Nature子刊：重大发现，抑郁症是与生俱来的",
        read:"7",
        like:"156"
      }
    ],
    doctor_list:[
      {
        id: "1",
        picsource: "https://tse1-mm.cn.bing.net/th/id/OIP.mYBs-T9BgY4bSS17ezfI4QHaE8?w=187&h=125&c=7&o=5&dpr=1.5&pid=1.7",
        name:"杨新华",
        hospital:"华西医院",
        excel:""
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

  },

  changeNav:function(event){
    let navID = event.currentTarget.id;
    this.setData({
      navID:navID*1
    })
    if(navID=="1"){
      this.setData({
        first:false,
        second:true,
        third:true
      })
    }
    else if(navID=="2"){
      this.setData({
        first:true,
        second:false,
        third:true
      })
    }
    else if(navID=="3"){
      this.setData({
        first:true,
        second:true,
        third:false
      })
    }
    //this.getItemList(this.data.navID);
  },

  more:function(){
    if(this.data.navID==1){
      wx.navigateTo({
        url: '/pages/tips/tips',
      })
    }
    else if(this.data.navID==2){
      wx.navigateTo({
        url: '/pages/doctor/doctor',
      })
    }
    if(this.data.navID==3){
      wx.navigateTo({
        url: '/pages/posts/posts',
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