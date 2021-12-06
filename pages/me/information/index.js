// pages/information/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoMess:'',
    name:'',
    na:'',
    sex:'',
    se:'',
    birthday:'',
    bir:'',
    height:'',
    weight:'',
    BMI:'',
    illness:'',
    smoke:'',
    isSmoke:['是', '否'],
    smokeIndex:0,
    date: '1900-01-01'
  },


  

  nameInput:function(e){
    this.setData({
      na:e.detail.value
    })
  },

  sexInput:function(e){
    this.setData({
      se:e.detail.value,
      // sex:e.detail.value
    })
  },

  dateInput:function(e){
    this.setData({
      date:e.detail.value
    })
  },


  heightInput:function(e){
    let height = e.detail.value;
    this.setData({
      height:height
    })
    // this.setData({
    //   heightIndex:e.detail.value,
    //   height:heightList[heightIndex]
    // })
  },

  weightInput:function(e){
    this.setData({
      weight:e.detail.value
    })
  },

  bmiInput:function(e){
    this.setData({
      BMI:e.detail.value
    })
  },

  illnessInput:function(e){
    this.setData({
      illness:e.detail.value
    })
  },

  smokeInput:function(e){
    this.setData({
      smokeIndex:e.detail.value,
      // smoke:isSmoke[smokeIndex]
    })
  },

  // bindPickerChange: function (e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },


  saveBtnClick:function(){
    if(this.data.na.length == 0
      || this.data.se.length == 0 || this.data.bir.length == 0){
      this.setData({
        infoMess:'温馨提示：必填项不能为空！',
        
      })
    }else{
      this.setData({
        infoMess:'',
        name:this.data.na,
        sex:this.data.se,
        birthday:this.data.bir
      })
    }
    wx.navigateBack({
      delta: 1
    });
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
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