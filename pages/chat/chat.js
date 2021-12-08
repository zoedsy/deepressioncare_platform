// socket 连接插件
const io = require('../../utils/weapp.socket.io.js')
// socket 连接地址
// var socketUrl = 'wss://www.贵司服务器地址.com'
var socketUrl = 'http://106.13.28.21:8888'
// const {APIURL} = require('config.js')
// socket 状态更新
var socketMessage = ''
// 上下文对象
var that
const app = getApp()

Page({

  data: {
 
    newslist:[{
      date:"20:00:00",
      nickName:"yes",
      faceImage:"http://www.runoob.com/try/demo_source/paris.jpg"
    },
    {        
      date:"20:00:00",
      nickName:"yes",
      faceImage:"http://www.runoob.com/try/demo_source/paris.jpg"
    },
    {
      date:"20:00:00",
      nickName:"yes",
      faceImage:"http://www.runoob.com/try/demo_source/paris.jpg"
    }],
     
    userInfo: {},
     
    scrollTop: 0,
     
    increase:false,//图片添加区域隐藏
     
    aniStyle: true,//动画效果
     
    message:"",
     
    previewImgList:[],
    userList:[
      {
        nickName:"yes",
        faceImage:"http://www.runoob.com/try/demo_source/paris.jpg"
      },
      {        
        nickName:"yes",
        faceImage:"http://www.runoob.com/try/demo_source/paris.jpg"
      },
      {
        nickName:"yes",
        faceImage:"http://www.runoob.com/try/demo_source/paris.jpg"
      }]
     
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    //获取用户信息
    if (app.globalData.userInfo) {
 
      this.setData({
       
      userInfo:wx.getStorageSync('userInfo') 

      })
       
    }
    //获取历史消息


    // 这里把this改成了that
    this.socketStart();
  },

  /**
   * 启动socket
   */
  socketStart: function () {

    // 设置socket连接地址 socketUrl
    const socket = (this.socket = io(
      socketUrl,
    ))

    // socket连接成功
    socket.on('connect', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接成功 → \n\n' })
      console.log("socket连接成功！！！！！！！！！")
      // 此处修改为与server约定的数据、格式
      var token = wx.getStorageSync("token");
      // var sendMessage = '{"token":"v3jsoc8476shNFhxgqPAkkjt678","client":"发送内容"}'
      var sendMessage = '{"token":token,"client":"发送内容"}'
      this.socketSendMessage(sendMessage);
    })

    //各种失败还有重新连接 
    socket.on('connect_error', d => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接失败 → \n\n' })
    })

    socket.on('connect_timeout', d => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接超时 → \n\n' })
    })

    socket.on('disconnect', reason => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接断开 → \n\n' })
    })

    socket.on('reconnect', attemptNumber => {
      this.setData({ socketMessage: socketMessage += 'SOCKET正在重连 → \n\n' })
    })

    socket.on('reconnect_failed', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET重连失败 → \n\n' })
    })

    socket.on('reconnect_attempt', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET正在重连 → \n\n' })
    })

    socket.on('error', err => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接错误 → \n\n' })
    })
    // 服务器返回数据
    socket.on('message', function (d) {
      this.setData({ socketMessage: socketMessage += '服务器返回数据 → \n\n' })
      that.socketReceiveMessage(d)
    })

  },

  /**
   * 断开socket
   */
  socketStop: function () {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  },

  /**
   * 发送消息
   */
  socketSendMessage: function (sendStr) {
    if (this.socket) {
      this.setData({ socketMessage: socketMessage += '向服务器发送数据 → ' + sendStr + '\n\n'})
      this.socket.emit('message', sendStr);
    }
  },

  /**
   * 接收消息
   */
  socketReceiveMessage: function (receivedStr) {
    this.setData({ socketMessage: socketMessage += '服务器返回数据 → ' + receivedStr + '\n\n'})
    this.socketStop();
  },
  bindChange:function(){

  },
  send:function(){
    socketMessage="49283402384"

  }
},
)
