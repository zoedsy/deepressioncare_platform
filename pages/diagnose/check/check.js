Page({
  data: {
    // percent:25 percent:50   percent:75 percent: 100
    percent: 100
    // probability:80%,


  },
  Patient:function (name,date) {
    this.setData({
      Name:name,
      // Type:audio_Type,
      Date:date,
    })
      
    },
  goToeva_result:function(){
    wx.navigateTo({
      url: '../eva_result/eva_result',
    })
  },
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo');
    console.log("诊断这里的userInfo",userInfo);
    this.Patient(userInfo.nickName,'2021-11-28 09：35：45')
  },
})


 
