
// const api = require('../../../utils/api.js');
// pages/luntan/detail/detail.js
// posts.js
// var Api = require('../../../utils/api.js');
// var util = require('../../../utils/util.js');
// import "../../../api/api.js" 

const Api = require("../../../api/api");
const {appid,APIURL,url_post,url_post_list,url_search_post,url_comment,url_comment_get}=require("../../../api/config.js");
// const api = require('../../../api/api.js');
const api = new Api();

const app = getApp();

Page({
  data: {
    title: '话题详情',
    collectText:"收藏",
    detail: {},
    comment_list:{},
    hidden: false,
    modalHidden: true,
    message:""
  },

  onLoad: function (options) {
    var that = this;
    // console.log("options",options)
    wx.setNavigationBarTitle({
      title: '帖子',
    })
    // this.fetchData(options.id);
    that.setData({detail:app.globalData.post})
    var post_id={
      postId:app.globalData.post.pId
    }
    api.getRequestData(url_comment_get,post_id,'GET',false).then((res)=>{
      console.log("get_comment_list",res)
      // app.globalData.comment_list=res.data;
      this.setData({comment_list:res.data.data})
      console.log("comment_list.length>0",this.comment_list)
      
    })
  },

  onShow:function(){
    var that =this;
    that.setData({detail:app.globalData.post})
    console.log(that.detail)
    console.log("app.globalData.post",app.globalData.post)
    var post_id={
      postId:app.globalData.post.pId
    }
    api.getRequestData(url_comment_get,post_id,'GET',false).then((res)=>{
      console.log("get_comment_list",res)
      // app.globalData.comment_list=res.data;
      this.setData({comment_list:res.data.data})
      console.log("comment_list.length>0",this.comment_list)
    })
  },

  // 获取数据
  fetchData: function (id) {
    var that = this;
    var ApiUrl = Api.topic +'/'+ id +'?mdrender=false';
    that.setData({
      hidden: false
    });
    Api.fetchGet(ApiUrl, (err, res) => {
      res.data.create_at = util.getDateDiff(new Date(res.data.create_at));
      res.data.replies = res.data.replies.map(function (item) {
          item.create_at = util.getDateDiff(new Date(item.create_at));
          item.zanNum = item.ups.length;
          return item;
      })
      that.setData({ detail: res.data });
      setTimeout(function () {
        that.setData({ hidden: true });
      }, 300);
    })
  },

  bindChange:function(e){
    // var that =this;
    // console.log("message",e.detail.value);
    app.globalData.message=e.detail.value;
    // this.setData({message:e.detail.value});
    console.log("message",app.globalData.message);

  },

  send:function(){
    var that =this;
    // api.
    var openid = wx.getStorageSync('openId');
    // 评论部分
   var comment={
      "coPostId":app.globalData.post.pId,
      "coText":app.globalData.message,
      "coUserid":openid
    }
    if(comment.coText!=null){
      api.getRequestData(url_comment,comment,'POST',false).then((res)=>{
        console.log("comment",comment)
        console.log("res_comment",res)
        
        //发送评论之后，刷新评论列表 
       this.onShow() 
      })
    }

  }
  // // 收藏文章
  // collect: function(e) {
  //   var that = this;
  //   var ApiUrl = Api.collect;
  //   var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
  //   var id = e.currentTarget.id;
  //   if(!id) return;
  //   if(!accesstoken){
  //     that.setData({ modalHidden: false });
  //     return;
  //   }

  //   Api.fetchPost(ApiUrl, { accesstoken:accesstoken, topic_id:id }, (err, res) => {
  //     if(res.success){
  //         var detail = that.data.detail;
  //         detail.is_collect = true;
  //         that.setData({
  //           collectText: "取消收藏",
  //           detail: detail
  //         });
  //     }
  //   })
  // },

  // // 点赞
  // reply: function(e) {
  //   console.log(e);
  //   var that = this;
  //   var accesstoken = wx.getStorageSync('CuserInfo').accesstoken;
  //   var id = e.currentTarget.id;
  //   var index = e.currentTarget.dataset.index;
  //   var ApiUrl = Api.reply(id);
  //   if(!id) return;
  //   if(!accesstoken){
  //     that.setData({ modalHidden: false });
  //     return;
  //   }

  //   Api.fetchPost(ApiUrl, { accesstoken:accesstoken }, (err, res) => {
  //     if(res.success){
  //       var detail = that.data.detail;
  //       var replies = detail.replies[index];

  //       if(res.action === "up"){
  //         replies.zanNum = replies.zanNum + 1;
  //       }else{
  //         replies.zanNum = replies.zanNum - 1;
  //       }

  //       that.setData({ detail: detail });

  //     }
  //   })

  // },

  // // 关闭--模态弹窗
  // cancelChange: function() {
  //   this.setData({ modalHidden: true });
  // },
  // // 确认--模态弹窗
  // confirmChange: function() {
  //   this.setData({ modalHidden: true });
  //   wx.navigateTo({
  //     url: '/pages/logs/logs'
  //   });
  // }

})
