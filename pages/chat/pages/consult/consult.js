// pages/zixun/zixun.js
Page({
    //跳转到医生列表
    goto_doctorlist: function(){ wx.navigateTo({ url: '../doctor_list/doctor_list', }) },
    goto_question: function(){ wx.navigateTo({ url: '../quickquestion/quickquestion', }) }
  
} 
)