// pages/home/tipDetail/tipDetail.js
import {html2json} from '../../../utils/html2json';
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
    "content":'<div class="XvFFhe0M00eU66dhHzH47" style="background-color: rgb(248, 248, 249); border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(242, 242, 242); font-family: arial; font-size: 12px;"><div class="_2j52cNz2l1nejzCrafdFDM" style="padding-bottom: 24px; width: 900px; margin: 0px auto;"><div class="_2akiyyCcJt3GTUofn31jvy " style="font-size: 40px; line-height: 58px; padding-top: 41px; padding-bottom: 21px; text-align: justify; font-weight: 700; font-family: &quot;Microsoft Yahei&quot;, 微软雅黑, 宋体;">感觉自己快要抑郁了？有四种反常表现，及时看医生<div class="_2p8ac0wGmQwvO7JvBsm6Pn " style="position: relative; display: inline-block; top: -6px; margin-left: 12px; width: 90px; height: 28px; padding-top: 6px; line-height: 1; box-sizing: border-box; padding-left: 24px; border-top-left-radius: 17.5px; border-top-right-radius: 17.5px; border-bottom-right-radius: 17.5px; border-bottom-left-radius: 17.5px; border: 1px solid rgba(0, 0, 0, 0.1); color: rgb(98, 102, 117); fill: rgb(98, 102, 117); font-size: 14px; font-weight: 400; -webkit-box-align: center; align-items: center; cursor: pointer;">播报文章</div></div><div class="_7w5ONtCawo-feDOnBTED2" style="margin-right: 250px; display: flex;"><div class="XxtoRkG7yvq0XKZfamzhH" style="position: relative; width: 47px; height: 47px; margin-right: 15px; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%;"><a href="https://author.baidu.com/home?from=bjh_article&amp;app_id=1540266670849636" target="_blank" style="text-decoration: none;"><img src="https://user-center.cdn.bcebos.com/head/raw/uc.101.1fd1f431.WbPX1HYZjOdHhy2u8AcqNA?x-bce-process=image/resize,m_lfit,w_200,h_200&amp;autime=56537" style="border: 0px; width: 47px; height: 47px; border-top-left-radius: 50%; border-top-right-radius: 50%; border-bottom-right-radius: 50%; border-bottom-left-radius: 50%;"></a>',   //文章内容
    "is_recommend":1,    //是否推荐，1推荐，0不推荐(int)
    "author":"猫咪咪",    //文章作者
    "add_time":"2021-11-05", //文章添加时间
    "look_count":100,     //文章浏览量(int)
    "video_url":"",        //文章视频地址
    "articles":[],      //关联文章
    "comments":100,     //评论量(int)  
    "likes":10          //点赞量(int)},
    },
    nodes:[]
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
    const json = html2json(this.data.article.content);
    this.setData({
        nodes: json,
    });
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