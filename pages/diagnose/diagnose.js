// pages/diagnosis/diagnosis.js

const app = getApp();
Page({
  /** 
   * 页面的初始数据
   */
  data: {
    hospitals: [
      {
          id: 0,
          images: "../../images/华西医院.png",
          title: "华西医院",
          detail: "四川大学华西医院，是位于中国四川省成都市国学巷的一座著名大型三级甲等医院。"
      },
      {
          id: 1,
          images: "../../images/四川省医院.png",
          title: "四川省医院",
          detail: "四川省医学科学院·四川省人民医院，始建于1941年，是一所三级甲等综合性医院。"
      },
      {
        id: 2,
        images: "../../images/瑞金医院.png",
        title: "瑞金医院",
        detail: "上海交通大学医学院附属瑞金医院是位于中国上海市黄浦区瑞金二路197号的一所三级甲等医院。"
    }
  ],
    Patient:{}
  },
  Patient:function (name,department,date) {
    var userInfo = wx.getStorageSync('userInfo');
    this.setData({ 
      Name:name,
      Deparment:department,
      Date:date,
    })
      
    },
    
  //上传音频事件处理
  bindViewTap:function(){
    // wx.navigateTo({
    //   url: '/pages/audio/audio'
    // })
    wx.chooseMessageFile({
      count: 1,
      type:'file',
      success(res){
        // tempFilePath可以作为临时路径
        const tempFilePaths = res.tempFilePaths
        // console.log('选择',res);
        wx.showModal({
          title:'您的文件已上传成功！',
          content:'点击“确定”即可查看详情',
          success:function(res){
            if(res.confirm){  //用户点击确定后
              // console.log("userInfo是否有缓存",wx.getStorageSync('userInfo'))
              wx.navigateTo({
                url: '../diagnose/check/check'
              })
            }else{  //用户点击取消后

            }
          }
        })
        }
    })

  },
// 跳转到个人页面
  goToPerson:function(){
    wx.navigateTo({
      // 跳转个人页面
      // url: '../Person/person',
      // 测试案例
      url: '/pages/diagnose/check/check'
    })
  },
  goToDetail:function(){
    wx.navigateTo({
      // 跳转到历史记录页面
      url:'/pages/diagnose/check/check'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Patient('张玉','精神科室','2021-11-20')
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
  phoneCall:function(){

  }
})
