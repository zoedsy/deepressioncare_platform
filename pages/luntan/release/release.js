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
    zcDict:null,
    bfDict:null,
    voteDict:null,
    textList:[],
    headHeigt:44,
    headTop:26,
    headWidht:317,
    navBarHeight:64,
    needToHome:true,
    post_id:"",
    isChanged:false,
    imageFilePath:""
  },

// @title    onLoad
// @description  点击加载事件
// @auth      shiyidu            
// @param     e
// @return   无
  onLoad: function () {
    wx.removeStorageSync('zcList');
    wx.removeStorageSync('bfList');
    var height = wx.getMenuButtonBoundingClientRect().height;
    var top = wx.getMenuButtonBoundingClientRect().top;
    var statausBarHeight = wx.getSystemInfoSync().statusBarHeight;
    var h =  statausBarHeight + height + (top - statausBarHeight) * 2;
    this.setData({
      navBarHeight:h,
      headHeigt: height,
      headTop:top,
    });
    var post_id = wx.getStorageSync('POST_ID');
    console.log("======",post_id);

    // 基本上没有缓存数据，所以直接跳到onshow
    if (post_id && post_id.length > 0){
      console.log("zero----------")
      this.data.post_id = post_id;
      // 有缓存的帖子 需恢复数据
      // this.getDetailData();
    }

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
  // @title    goToChooseImages
// @description 选择图像
// @auth      shiyidu            
// @param     e
// @return   无
  goToChooseImages(){
    var that =this;
    wx.chooseImage({
      count:9,
      mediaType:['image'],
      sourceType:['album'],
      maxDuration:30,
      camera:'back',
      success(res){
        console.log(res)
        console.log("图片路径",res.tempFilePaths[0]);
        console.log("图片数目",res.size);
        that.imageFilePath=res.tempFilePaths[0];

        // that.setData({imageFilePath:res.tempFilePaths})
      }
    });
    // this.chosseMedia();
  },
  // 返回初始页面


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
    wx.setStorageSync('postcontent', this.data.textareaText)
    wx.setStorageSync('postimages', this.data.imageList)
    wx.setStorageSync('posttitle', this.data.title)
    wx.setStorageSync('postaddr', this.data.cityName)
    wx.showToast({
      title: '保存成功',
    })
    // this.savePostClick(-1);
  },

  

// 选择图像
// @title    beginSave
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  beginSave(){
    this.data.needToHome = true;
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
    this.setData({
      isShowSave:true
    })
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

  // 开始保存post
  beginSavePost(draft){
    var _this = this;
   
  },

  // 点击发送，draft=1
  savePostClick(draft){
    if (draft != -1){
      this.beginSavePost(draft);
      return;
    } 
    this.postDidWorkSave(draft);
  },


  // 可以进行请求了，就是有了标题内容这些
  postDidWorkSave(draft){
    if (this.data.textareaText.length == 0) {
      console.log("请输入正文~")
      return;
    }
    var title = this.data.title;
    if (title == "添加标题") {
      title = "";
    }
    var cityName = this.data.cityName;
    if (cityName == "添加地点") {
      cityName = "";
    }
    // 删除了支持，投票，帮扶，这些杂七杂八的东西，然后默认type=1
    var type = 1;
    this.data.canSave = false;
    var _this = this;
    // var map = {};
    // map.address = "";
    // map.location = cityName;
    // map.content = this.data.inputText;
    // map.draft = draft;
    // map.imgs = JSON.stringify(this.data.imageList);
    // map.kind = this.data.typeSelectIndex + 1;
    // map.title = title;
    // map.type = type;
    // map.userId = app.USER_ID();
    // var ownerId = app.globalData.openId

    var ownerId = wx.getStorageSync('openId');
    console.log("ownerId----获取缓存后的",ownerId);
    var token = wx.getStorageSync('token');
    token = encodeURIComponent(token);
    // if(!map.ownerId){
    //   ownerId=wx.getStorageSync('openId')
    // }

    // var date =new Date();
    // console.log(date)
    // var date = api.getDateTime(date.toString());
    // console.log("date-----------",date)
    // 获取时间，返回时间
    // console.log("date",date)
    var crateTime = api.getDateTime()
    
    var map={
      "location":cityName,
      "content":this.data.textareaText,
      "title":title,
      "ownerId":app.globalData.openId,
      "createTime":crateTime,
      // "image":this.imageFilePath
    }
  
    // map.crateTime = 
    // map.videoUrl = this.data.videoUrl;


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
  // 返回主页
  backHome(){
    wx.navigateBack({
      complete: (res) => {},
    })
    // wx.switchTab({
    //   url: '/pages/index/index',
    // })
  },

  saveAndSend(){
    this.saveDraft();
    this.beginSave();
  },

  // 上传图片
  chosseMedia() {
    this.setData({
      showMedia:true
    });
  },
  hideShareClickView(){
    this.setData({
      showMedia:false
    });
  },
  chooseVideo(){
    this.data.chooseTye = "video";
    this.hideShareClickView();
    var _this = this;
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath)
        var path = res.tempFilePath;
         _this.upLoadimage(path);     

      }
    })
  },

  chooseImages(){
    this.data.chooseTye = "images";
    // this.hideShareClickView();
    var _this = this;
    var count = 9 - this.data.imageList.length;
    if (count <= 0){
      // app.alert("最多上传9张图片~");
      console.log("最多上传9张图片~")
      return;
    }
    wx.chooseImage({
      count: count,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          var tempPaths = res.tempFilePaths;
          var count = _this.data.imageList.length;
          for (var i = 0;i < tempPaths.length;i++){
            var path = tempPaths[i];
            _this.upLoadimage(path);     
          }
        },
      })
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

  beginDelete (index) {
    var _this = this;
    var list = [];
    for (var i = 0; i < _this.data.imageList.length; i++) {
      if (i != index) {
        var url = _this.data.imageList[i];
        list.push(url);
      }
    }
    _this.setData({
      imageList: list
    });
  },


  onUnload: function () {
    wx.removeStorageSync('zcList');
    wx.removeStorageSync('bfList');
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

  
  formatData(dataDict){
    var _this = this;
    var postDict = dataDict.post;
    var kind = postDict.kind;
    if (kind == 4) {
      // 帮扶
      var bangFuDict = dataDict.bases;
      console.log("========", bangFuDict);
      wx.setStorageSync('bfList', JSON.stringify(bangFuDict))
      _this.setData({
        zcDict:null,
        voteDict:null,
        typeSelectIndex:3,
        bfDict:bangFuDict
      });
    } else if (kind == 5) {
      // 种草
      var productId = postDict.productId;
      var skuId = postDict.skuId;
      _this.getGoodDetail(productId,skuId);
    } else {
      var voteList = dataDict.votes;
      if (voteList){
        var voteDict = {};
        voteDict.title = postDict.voteTitle;
        var endTime = postDict.endTime;
        voteDict.endDate = endTime;
        var optionsList = [];
        for(var i = 0;i < voteList.length;i++){
          var dict = voteList[i];
          optionsList.push(dict.vote.content);
        }
        voteDict.options = optionsList;
        _this.setData({
          voteDict:voteDict
        });
      }
    }
    var imgString = postDict.imgs;
    if (imgString){
      if (imgString.length > 0){
        var list = JSON.parse(imgString);
        _this.setData({
          imageList:list
        });
      }
    }
    var videoUrl = postDict.videoUrl;
    if (videoUrl){
      if (videoUrl.length > 0){
        _this.setData({
          videoUrl:videoUrl
        });
      }
    }
    var content = postDict.content;
    if (content){
      var list = content.split("#");
      this.setData({
        textList: list
      });
    }
    _this.setData({
      title:postDict.title.length > 0 ?postDict.title:'添加标题',
      cityName:postDict.city.length > 0 ? postDict.city:'添加地点',
      textareaText:postDict.content,
      inputText:postDict.content,
      detailData: dataDict
    });
  },


  // 获取产品参数
  getGoodDetail(productId,skuId) {
    var _this = this;
    var map = {};
    map.productId = productId;
    api.getRequestData(app.goodsDetailUrl, map, true, "GET").then(res => {
      if (res.data.errorCode == 0) {
        var list = res.data.model.skus;
        var skuDict = null;
        for(var i = 0;i < list.length;i++){
          var dict = list[i];
          if (dict.id == skuId){
            skuDict = dict;
            break;
          }
        }
       _this.setData({
        bfDict:null,
        voteDict:null,
        typeSelectIndex:4,
        zcDict: skuDict
       });
      } 
    });
  },
})
