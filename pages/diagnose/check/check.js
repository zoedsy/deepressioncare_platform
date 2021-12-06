Page({
  data: {
    // percent:25 percent:50   percent:75 percent: 100
    percent: 50
    // probability:80%,


  },
  Patient:function (name,audio_Type,date) {
    this.setData({
      Name:name,
      Type:audio_Type,
      Date:date,
    })
      
    },
  goToeva_result:function(){
    wx.navigateTo({
      url: '../eva_result/eva_result',
    })
  },
  onLoad: function (options) {
    this.Patient('王小翰','音频','2021-11-28 09：35：45')
  },
})


 
