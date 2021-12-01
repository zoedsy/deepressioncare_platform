Page({
  data: {
  },
  onLoad: function (options) {
    //获取全局唯一的录音管理器 RecorderManager
    this.recorderManager = wx.getRecorderManager()
    this.recorderManager.onStop((res) => {
      var tempFilePath = res.tempFilePath;// 文件临时路径
      var temp = tempFilePath.replace('.mp3', '')//录音文件的临时路径 (本地路径)
      console.log('获取到文件')
    })
    this.recorderManager.onError((res) => {
      console.log('录音失败了！')
    })
  },
  //开始录音
  btnClick1:function(){
    this.recorderManager.start({
      duration: 60000,//录音的时长，单位为ms，最大值60000ms,10min
      sampleRate: 16000,//采样率，有效值 8000/16000/44100(PC不支持)
      numberOfChannels: 1,//录音通道数，有效值 1/2
      encodeBitRate: 96000,//编码码率
      format: 'mp3',//音频格式，有效值 aac/mp3
      frameSize: 50,//指定帧大小
      audioSource: 'auto'//指定录音的音频输入源，可通过 wx.getAvailableAudioSources() 获取
    })
  },
  //录音暂停
  btnClick2: function () {
    this.recorderManager.pause()
  },
  //录音暂停后继续播放
  btnClick3: function () {
    this.recorderManager.resume()
  },
  //录音提交
  btnClick4: function () {
    this.recorderManager.stop()  
    wx.showModal({
      // 音频上传成功
      title: "您的音频已上传成功！",
      // 提示信息
      content: '点击"确定"查看详细流程',
      
      success: function (res) {
        // 点击确定查看详细信息
        if (res.confirm) {
  
          wx.reLaunch({
            url: '../check/check'
          })
          // 其他取消
        } else {
        }
  
      }
  
    })
  }

})
