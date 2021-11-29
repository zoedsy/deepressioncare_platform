// pages/tipDetail/tipDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_liked:false,
    article:{ 
    "articleId":123,     //文章id(int)
    "articletitle":"抑郁中的年轻人：我们如何冲出阴霾",//文章标题
    "cat_id":1,          //文章分类id(int)
    "cat_name":"生活",    //分类名称
    "summary":"xxxxxxxxxx", //文章摘要
    "content":"xxxxx",   //文章内容
    "is_recommend":1,    //是否推荐，1推荐，0不推荐(int)
    "author":"猫咪咪",    //文章作者
    "add_time":"2021-11-05", //文章添加时间
    "look_count":100,     //文章浏览量(int)
    "video_url":"",        //文章视频地址
    "articles":[],      //关联文章
    "comments":100,     //评论量(int)  
    "likes":10          //点赞量(int)},
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let index = options.index;
    console.log(index)
    //请求文章数据
    // wx.request({               
    //   url:'http://127.0.0.1/Knowledge/index',
    //   data:{
    //     article_id:index
    //   },
    //   success: (res) => {
    //     this.setData({ 
    //       article:res.data.data
    //     })
    //   }
    // })  
  },

  changeCollect:function(){
    console.log(this.data.is_liked)
      // 添加用户点赞文章
      if(!this.data.is_liked){
        wx.request({               
          url:'http://127.0.0.1/post/info/like_article',
          data:{
            //article_id:index
          },
          method:POST,
          success: (res) => {
            this.setData({ 
              is_liked:true
            })
          }
        })  
      }
      // 删除点赞
      else{  
        wx.request({               
          //url:'http://127.0.0.1/post/info/like_article',
          data:{
            //article_id:index
          },
          method:POST,
          success: (res) => {
            this.setData({ 
              is_liked:false
            })
          }
        })  
      }
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