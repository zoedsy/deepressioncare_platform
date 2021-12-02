// socket 连接插件
const io = require('../../utils/weapp.socket.io.js')
// socket 连接地址
var socketUrl = 'wss://www.贵司服务器地址.com'
// socket 状态更新
var socketMessage = ''
// 上下文对象
var that
const app = getApp()

Page({

  data: {
 
    newslist:[],
     
    userInfo: {},
     
    scrollTop: 0,
     
    increase:false,//图片添加区域隐藏
     
    aniStyle: true,//动画效果
     
    message:"",
     
    previewImgList:[]
     
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    //获取用户信息
    if (app.globalData.userInfo) {
 
      this.setData({
       
      userInfo: app.globalData.userInfo
       
      })
       
    }
    //获取历史消息



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

    socket.on('connect', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接成功 → \n\n' })

      // 此处修改为与server约定的数据、格式
      var sendMessage = '{"token":"v3jsoc8476shNFhxgqPAkkjt678","client":"发送内容"}'
      this.socketSendMessage(sendMessage);
    })

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
})
