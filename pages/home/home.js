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
    inputValue:"",
    bannerList:[
      {
        bannerID: "1",
        pic: "https://img.zcool.cn/community/0156ec58a15143a8012060c81d371e.png@1280w_1l_2o_100sh.png",
      },
      {
        bannerID: "2",
        pic: "https://tse3-mm.cn.bing.net/th/id/OIP-C.WVlVYwnSfrRDmoPHcH9aEgHaDn?w=342&h=170&c=7&r=0&o=5&dpr=1.75&pid=1.7",
      },
      {
        bannerID: "3",
        pic: "https://1.s91i.faiusr.com/4/AFsIABAEGAAg_Pnr7wUovInOyQUwhAc4-wI!800x800.png.webp?v=1576729849160",
      },
      {
        bannerID: "4",
        pic: "https://1.s91i.faiusr.com/4/AFsI3eekARAEGAAgsvuW8wUo5JTLjAIwhAc4-wI!800x800.png.webp?v=1583742654425",
      },
      {
        bannerID: "5",
        pic: "https://tse3-mm.cn.bing.net/th/id/OIP-C.LuRFccbwzqTbeKDjOlHr7gHaEH?pid=ImgDet&rs=1",
      },
      {
        bannerID: "6",
        pic: "https://tse1-mm.cn.bing.net/th/id/R-C.e0e7d8d0444ba9487ab1e20c7bab4855?rik=Sfy8uTRaDWhSOw&riu=http%3a%2f%2fpic.5tu.cn%2fuploads%2fallimg%2f2011%2fpic_5tu_big_2020010111320097153.jpg&ehk=pIy19leO3ZNNXDOslba%2b4ziBwQdrJWuRNXpigQniUHU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
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
    //请求文章数据
    api.getRequestData('knowledge/first_page',{},'GET',false).then((res)=>{
      console.log(res)
      this.setData({ 
        article_list:res.data.data
      })
      console.log(this.data.article_list)
    })
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

  //搜索框文本内容显示
  inputBind: function(event) {
    this.setData({
        inputValue: event.detail.value
    })
    console.log('bindInput' + this.data.inputValue)

  },
 /**
 * 搜索执行按钮
 */
query: function(event) {
  //跳转搜索知识结果页面
  wx.navigateTo({
    url: '/pages/home/searchTips/searchTips?value='+this.data.inputValue,
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

  }
})