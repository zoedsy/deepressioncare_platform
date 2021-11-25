// pages/luntan/release/selectCity/selectCity.js
//这一块要注意就是调用的地区的函数
//获取应用实例
var app = getApp()
//获取qq地图的函数
var QQMapWX = require('../../../../utils/qqmap-wx-jssdk.js');
import Api from '../../../../api/api.js';
//导入相应接口
const api = new Api();
//qq地图sdk变量
var qqmapsdk;
Page({
  data: {
  //宽度
   width:394,
   //是否搜索（默认否）
   search:false,
   //
  //  isAuthorization: false,
   //清除按钮隐藏
   clearButtonHidden:true,
  //搜索的输入变量
   seachInputValue:"",
   //目前的城市（定位
   currentCity:"定位中...",
   cityItemWidth:80,
   
   //
   subFixHeight:20,
   toView:"current",
   searchDataList: [],
   dataList:[],
   allCitysList:[],
   indexList:["当前","热门"],

   //主要的城市
   hostCityList:[
     {"name":"北京市"},
     { "name": "上海市" },
     { "name": "广州市" },
     { "name": "深圳市" },
     { "name": "重庆市" },
     { "name": "苏州市" },
     { "name": "杭州市" }, 
     { "name": "南京市" },
     {"name": "天津市" },
     { "name": "成都市" },
     { "name": "合肥市" },
     { "name": "郑州市" },
     { "name": "武汉市" },
     { "name": "长沙市" },
     { "name": "昆山市" },
     { "name": "宁波市" },

   ],
  },

  
// @title    onLoad
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  onLoad: function (options) {
    //创建qqmap 对象
    qqmapsdk = new QQMapWX({
      key: app.qqmapkey
    });

    var width = wx.getSystemInfoSync().windowWidth;
    var w = (width - 40 - 40) / 4.0; 
    this.setData({
      width: width - 20,
      cityItemWidth: w
    });
    this.getLocationRole();
    this.getCitylist();
  },

  
// @title    indexClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  indexClick(e){
    var id = parseInt(e.currentTarget.id+"");
    var that = this;
    var text = that.data.indexList[id];
    var toView = "";
    if (text == "当前") {
      toView = "current";
    } else if (text == "热门") {
      toView = "host";
    } else {
      toView = "to_" + text;
    }
    that.setData({ toView: toView });

  },

  
// @title    searchInput
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  searchInput(e){
    console.log("===" + e.detail.value);
    var value = e.detail.value;
    var hidden = true;
    if (value == "") {
      hidden = true;
    } else {
      hidden = false;
    }
    this.setData({
      seachInputValue: value,
      clearButtonHidden: hidden
    });
    wx.showLoading({
      title: '处理中',
    })
    var arr = this.data.allCitysList.filter(function (str) {
      return str.startsWith(value);
    });
    if (value != "") {
      this.setData({
        searchDataList: arr
      });
    }
    wx.hideLoading();
    console.log(JSON.stringify(arr));

  },

  
// @title    clearSearchInput
// @description
// @auth      shiyidu            
// @param     e
// @return   无
  clearSearchInput(){
    this.setData({
      allCitysList:[],
      seachInputValue: "",
      clearButtonHidden: true
    });
  },

  
// @title    goToSearch
// @description
// @auth      shiyidu            
// @param     e
// @return   无
  goToSeach(){
    this.setData({
      search: true,
    });
  },

  
// @title    cancelClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  cancelClick(){
    this.setData({
      search:false,
    });
  },

  
// @title    currentClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  currentClick(){
    if (this.data.currentCity == "定位中...") {

    } else {
      this.pop(this.data.currentCity);
    }
  },

  
// @title    allCityClick
// @description
// @auth      shiyidu            
// @param     e
// @return   无
  allCityClick(){
    this.pop("全国");
  },

  
// @title    hostCityClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  hostCityClick(e){
    var idString = e.currentTarget.id.replace("host_","");
    var index = parseInt(idString);
    var cityName = this.data.hostCityList[index].name;
    this.pop(cityName);
  },

  
// @title    searchViewClick
// @description
// @auth      shiyidu            
// @param     e
// @return   无
  searchViewClick(e){
    var idString = e.currentTarget.id.replace("search_", "");
    var index = parseInt(idString);
    var cityName = this.data.searchDataList[index];
    this.pop(cityName);
  },

  
// @title    listCityClick
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  listCityClick(e){
    var that = this;
    var idString = e.currentTarget.id;
    var arr = idString.split("_");
    console.log(JSON.stringify(arr));
    var subFix = arr[0];
    var index = parseInt(arr[1]);
    for (var i = 0; i < that.data.dataList.length; i++) {
      var dic = that.data.dataList[i];
      if (subFix == dic.subFix) {
        var citys = dic.citys;
        var cityName = citys[index];
        that.pop(cityName);
        break;
      }
    }
  },

  
// @title    getCityList
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  getCitylist: function () {
    var that = this;
    var map = {};
    api.getRequestData(app.cityListUrl, map, false).then(res => {
      if (res.data.errorCode == 0) {
        var arr = res.data.model;

        for (var i = 0; i < arr.length; i++) {
          var dic = arr[i];
          that.data.indexList.push(dic.subFix);
        }
        var height = wx.getSystemInfoSync().windowHeight;
        var count = that.data.indexList.length;
        that.setData({
          subFixHeight: (height - 50) / count,
          indexList: that.data.indexList,
          dataList: arr
        });
        for (var i = 0; i < arr.length; i++) {
          var dic = arr[i];
          var citys = dic.citys;
          for (var j = 0; j < citys.length; j++) {
            var cityName = citys[j];
            that.data.allCitysList.push(cityName);
          }
        }
      } else {
        wx.showToast({
          title: res.data.errorMsg,
          icon: 'none',
          duration: 1500
        });
      }
    });
  },

  
// @title    getLocationRole
// @description 
// @auth      shiyidu            
// @param     e
// @return   无
  getLocationRole: function () {
    var that = this;
    wx.getSetting({
      success: (res) => {
        console.log(res.authSetting['scope.userLocation']);
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {//非初始化进入该页面,且未授权
          that.setData({
            isAuthorization: true
          });
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          that.getCurrentLoaction();
        } else {
          that.getCurrentLoaction();
        }
      }
    })
  },

  
// @title    openSettinged
// @description
// @auth      shiyidu            
// @param     e
// @return   无
  openSettinged(e) {
    var that = this;
    that.setData({
      isAuthorization: false
    });
    if (e.detail.authSetting["scope.userLocation"]) {//如果打开了地理位置，就会为true
      wx.showToast({
        title: '授权成功',
        icon: 'success',
        duration: 500
      })
      that.getCurrentLoaction();
    } else {
      wx.showToast({
        title: '授权失败',
        icon: 'success',
        duration: 1500
      })
    }
  },

  
// @title    getCurrentLocation
// @description
// @auth      shiyidu            
// @param     e
// @return   无
  getCurrentLoaction: function () {
    var that = this;
    wx.showLoading({
      title: '获取位置...',
    })
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        wx.hideLoading();
        that.data.latidute = res.latitude + "";
        that.data.longitude = res.longitude + "";
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var result = addressRes.result;
            console.log("result=========",result);
            if (result) {
              wx.setStorageSync("currentCity", cityName);
              var cityName = result.address_component.city;
              that.setData({
                currentCity: cityName
              })
            }
          }
        })
      },
      fail(res) {
        wx.hideLoading();
        that.setData({
          currentCity: "定位失败"
        })
      }
    })
  },
  pop(cityName){
    var page = getCurrentPages();
    var upPage = page[page.length - 2];
    upPage.setData({
      isChanged:true,
      cityName: cityName
    });
    wx.navigateBack({});
  },
})
