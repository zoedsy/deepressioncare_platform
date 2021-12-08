// pages/luntan/release/release.js
//获取应用实例
var app = getApp();
import Api from '../../../api/api.js';
// import getDateTime from '../../../wxs/tool.wxs';
const api = new Api();
const {} = require("../../../api/config.js")

Page({
  data: {
    toolList:[{"title":"添加图片","img":"/images/release/addImag.png"}],
    typeSelectIndex:0,
    isShowSave:false,
    textareaHide:false,
    canSave:true,
    textareaText:"",
    inputText:"",
    imageList:[],
    cityName:"添加地点",
    title:"添加标题",
    chooseTye:"video",
    videoUrl:"",
    showMedia:false,
    topIndex:0,
    textList:[],
    headHeigt:44,
    headTop:26,
    headWidht:317,
    navBarHeight:64,
    isChanged:false,
    imageFilePath:""
  },

// @title    onLoad
// @description  点击加载事件
// @auth      shiyidu            
// @param     e
// @return   无
  onLoad: function () {
    var height = wx.getMenuButtonBoundingClientRect().height;
    var top = wx.getMenuButtonBoundingClientRect().top;
    var statausBarHeight = wx.getSystemInfoSync().statusBarHeight;
    var h =  statausBarHeight + height + (top - statausBarHeight) * 2;
    this.setData({
      navBarHeight:h,
      headHeigt: height,
      headTop:top,
    });

  },

  // @title    onShow
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  onShow(){
    var postcontent=this.data.textareaText
    if(wx.getStorageSync('postcontent')){
      postcontent = wx.getStorageSync('postcontent')
    }
    var postimages=this.data.imageList
    if(wx.getStorageSync('postimages')){
      postimages = wx.getStorageSync('postimages')
      this.setData({
        imageFilePath:postimages[0]
      })
    }
    var posttitle = this.data.title
    if(wx.getStorageSync('posttitle')){
      posttitle = wx.getStorageSync('posttitle')
    }
    var postaddr = this.data.cityName
    if(wx.getStorageSync('postaddr')){
      postaddr = wx.getStorageSync('postaddr')
    }
    this.setData({
      textareaText:postcontent,
      imageList:postimages,
      title:posttitle,
      cityName:postaddr
    })
    
  },

  //发送
  send(){
    //检验空
    if(this.data.title==''||this.data.title=='添加标题'){
      wx.showToast({
        title: '标题不能为空',
        icon:'none',
      })
      return
    }
    if(this.data.imageFilePath==''){
      wx.showToast({
        title: '图片不能为空',
        icon:'none',
      })
      return
    }
    if (this.data.textareaText.length == 0) {
      wx.showToast({
        title: '正文不能为空',
        icon:'none',
      })
      return;
    }
    //请求
    var cityName = this.data.cityName;
    if (cityName == "添加地点") {
      cityName = "";
    }
    var type = 1;
    this.data.canSave = false;
    var _this = this;
    var ownerId = wx.getStorageSync('openId');
    console.log("ownerId----获取缓存后的",ownerId);
    var token = wx.getStorageSync('token');
    token = encodeURIComponent(token);
  
    var crateTime = api.getDateTime()
    
    var map={
      "location":cityName,
      "content":this.data.textareaText,
      "title":title,
      "ownerId":app.globalData.openId,
      "createTime":crateTime,
    }
    console.log(JSON.stringify(map));
    console.log("上传文件前ownerid是否有",ownerId);
    console.log("image_file_path路径",this.data.imageFilePath)
    wx.uploadFile({
      filePath:this.data.imageFilePath,
      name: 'file',
      url: app.globalData.url+"/"+app.globalData.url_post,
      header:{
        'content-type':'multipart/form-data',
        'token':token
      },
      formData:{
        "location":cityName,
        "content":this.data.textareaText,
        "title":title,
        "ownerId":ownerId,
        "createTime":crateTime,
        "image":this.data.imageFilePath,

      },
      success(res){
    
      console.log("上传文件大成功！！！！")
      console.log("draft",draft)
      _this.data.canSave = true;
      app.HOMENEEDFRESH = true;
      console.log("errorCode",res.data.errorCode)
      wx.showToast({
        title: '发送成功',
        duration:5000
      })
      console.log("baocunchenggong");
      wx.navigateBack({
        // url: '../../luntan/luntan',
        delta:1
      })
      },
      fail(res){
        console.log("res.fail",res)
        console.log("fialllllllll")
      }
    })


  },

  
// @title    textareaClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  textareaClick(e){
    var value = e.detail.value;
    if (value.length > 500){
      value = value.substring(0,500);
    }
    // this.data.textareaText = value;
    // this.data.inputText = this.data.textareaText;
    var list = value.split("#");
    this.setData({
      textareaText:value,
      inputText:value,
      textList: list
    });
    this.data.isChanged = true;

  },

  // @title    typeClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  typeClick(e){
    var index = e.currentTarget.dataset.key;
    this.setData({
      typeSelectIndex:index
    })
  },

// @title    inputTextClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  inputTextClick(){
    this.setData({
      textareaHide:false,
      textareaText:this.data.inputText

    });
  },

// @title    toolClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  toolClick(e){
    if (this.data.textareaText.length > 0){
      this.setData({
        textareaHide:true,
        inputText:this.data.textareaText
      });
    }
    var index = e.currentTarget.dataset.key;
    this.data.topIndex = index;
    this.goToChooseImages();
    // if (index == 0) {
      
    // } else if (index == 1) {
    //   this.goToTouPiao();
    // } else if (index == 2) {
    //   this.goToBangFuJiDi();
    // } else if (index == 3) {
    //   this.goToZhongCao();
    // }
  },

  // 跳转到相应的页面

  // @title    goToTouPiao
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  goToTouPiao(){
    wx.navigateTo({
      url: '/pages/release/vote/vote',
    })
  },
  
  loadpic: function () {
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log("loadsuccess",res)
        console.log("origin imageList",that.data.imageList,typeof(that.data.imageList))
        that.setData({
          imageList: that.data.imageList.concat(res.tempFilePaths)
        })
        that.setData({
          imageFilePath:that.data.imageList[0]
        })
        console.log(that.data.imageList)
      }
    });

  },

  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    wx.previewImage({
      //当前显示图片
      current: this.data.imageList[index],
      //所有图片
      urls: this.data.imageList
    })
  },

  deleteImg: function (e) {
    var that = this;
    var imgs = that.data.imageList;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imageList: imgs,
    });
  },

// 选择图像
// @title    beginBack
// @description 返回初始页面
// @auth      shiyidu            
// @param     e
// @return   无
  beginBack(){
    if (this.data.isChanged){
      this.setData({
        isShowSave: true
      });
    } else {
      this.backHome();
    }
  },

  // 核验是否需要保存
  // @title    checkNeedSave
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  checkNeedSave(){
    if (this.data.inputText.length > 0){
      return true;
    }
    if (this.data.imageList.length > 0){
      return true;
    }
    if (this.data.cityName.length > 0 && this.data.cityName != '添加地点'){
      return true;
    }
    if (this.data.title.length > 0 && this.data.title != '添加标题'){
      return true;
    }
    if (this.data.zcDict){
      return true;
    }
    if (this.data.bfDict){
      return true;
    }
    if (this.data.voteDict){
      return true;
    }
    return false;
  },


// 选择图像
// @title    floatClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  floatClick(){
    this.setData({
      isShowSave:false
    });
  },



// 选择图像
// @title    saveClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  saveClick(e){
    var index = parseInt(e.currentTarget.dataset.key);
    this.setData({
      isShowSave:false
    });
    if (index == 0) {
      this.data.needToHome = true;
      this.savePostClick(-1);
    } else if (index == 1){
      // wx.removeStorageSync('POST_ID');
      this.beginSave();
      this.backHome();
    }
  },

  // 保存草稿

  

// 选择图像
// @title   saveDraft
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  saveDraft(){
    this.data.needToHome = false;
    this.savePostClick(-1);
  },

  

// 选择图像
// @title    beginSave
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  beginSave(){
    this.data.needToHome = true;
    this.savePostClick(-1);
  },

// 选择城市
// 选择图
// @title    goToSelectionCity
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  goToSelectCity(){
    wx.navigateTo({
      url: '../release/selectCity/selectCity',
    })
  },

  // 添加标题
  goToAddTitle(){
    var title = this.data.title;
    if (title == '添加标题'){
      title = "";
    }
    wx.setStorageSync('post_title', title);
    wx.navigateTo({
      url: '../release/title/title',
    })
  },

  // 返回主页
  backHome(){
    wx.navigateBack({
      complete: (res) => {},
    })
    // wx.switchTab({
    //   url: '/pages/index/index',
    // })
  },

  // 上传图片
  upLoadimage(tempPath) {
    var _this = this;
    wx.showLoading({
      title: '上传中...',
    })

    wx.uploadFile({
      url: app.host + app.upLoadImageUrl,
      filePath: tempPath,
      name: 'file',
      formData: {
        'user': 'test'
      },
      success: function (response) {
        wx.hideLoading();
        if (response.statusCode == 200){
          var string = response.data;
          var dict = JSON.parse(string);
          if (dict.errorMsg){
            // app.alert(dict.errorMsg);
            console.log(dict.errorMsg);
          } else {
            var url = dict.model.fileFullUrl;
            console.log(url);
            if (_this.data.chooseTye == "video"){
              _this.setData({
                isChanged:true,
                videoUrl:url
              });
            } else {
              _this.data.imageList.push(url)
              _this.setData({
                isChanged: true,
                imageList:_this.data.imageList
              });
            }
          }
        }
      },
      fail: function (res) {
        wx.hideLoading();
      }
    })
  },
  

  // 预览图片
  previewImages(e) {
    var index = parseInt(e.currentTarget.dataset.key);
    var url = this.data.imageList[index];
    wx.previewImage({
      current: url,
      urls: this.data.imageList,
    })
  },

  //删除图片
  deleteImage(e){
    var _this = this;
    var index = parseInt(e.currentTarget.dataset.key);
    wx.showModal({
      title: '提示',
      content: '确定要删除这张图片吗?',
      success: function (res) {
        if (res.confirm) {
          _this.beginDelete(index);
        } else if (res.cancel) {
        }
      }
    });
  },

  onUnload: function () {
    
  },

  // 请求数据
  getDetailData() {
    var _this = this;
    var map = {};
    map.id = this.data.post_id;
    // map.userId = app.openid;
    map.userId = app.globalData.openid;
    console.log(app.globalData.url_post)
    api.getRequestData(app.globalData.url_post, map,"GET",false).then(res => {
      if (res.data.errorCode == 0) {
        _this.formatData(res.data.model);
      } else {
        // app.alert(res.data.errorMsg);
        console.log(res.data.errorMsg)
      }
    });
  },

})
