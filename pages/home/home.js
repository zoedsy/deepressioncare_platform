// pages/home/home.js
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
    //   {
		// 	"categoryName": "生活",
		// 	"knoCardIcon": "https://s.cyol.com/shuzibao/cmsfile/paper/2021/1105/20211105060022796.jpg",
		// 	"knoCardId": 1,
		// 	"knoCardLikes": 105,
		// 	"knoCardRead": 9999,
		// 	"knoCardReleaseDate": "20211101 00:00:000",
		// 	"knoCardTitle": "抑郁中的年轻人：我们如何冲出阴霾"
    // },
  ],
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
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求文章数据
    // wx.request({               
    //   url:'http://127.0.0.1/Knowledge/get_list/first_page',
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

  changeNav:function(event){
    let navID = event.currentTarget.id;
    this.setData({
      navID:navID*1
    })
    if(navID=="1"){
        wx.request({               
          url:'http://127.0.0.1/Knowledge/get_list/first_page',
          success: (res) => {
            this.setData({ 
              article_list:res.data.data,
              first:false,
              second:true,
            })
          }
        })  
    }
    else if(navID=="2"){
      wx.request({               
        url:'http://127.0.0.1/get/consult/doctor_list?page=1',
        success: (res) => {
          this.setData({ 
            doctor_list:res.data.data,
            first:true,
            second:false,
          })
        }
      })  
    }
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