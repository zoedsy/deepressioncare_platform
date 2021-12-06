// pages/diagnosis/diagnosis.js
Page({
  /** 
   * 页面的初始数据
   */
  data: {
    untreated_abnormalList: [
      {
          id: 0,
          images: "../../images/baby.png",
          title: "历史记录1",
          detail: "21113222211vvvvvvvvvcccccccccc1"
      },
      {
          id: 1,
          images: "../../images/baby.png",
          title: "历史记录2",
          detail: "2222"
      },
  ],
  },
  Patient:function (name,department,date) {
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
              wx.navigateTo({
                url: '../check/check'
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
      url: '/pages/check/check'
    })
  },
  goToDetail:function(){
    wx.navigateTo({
      // 跳转到历史记录页面
      url:'/pages/check/check'
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

  }
})
