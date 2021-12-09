// pages/home/tips/tips.js
import Api from '../../../api/api';
const api = new Api();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //滑动
    // startX:0,
    // startY:0,

    none:true,
    article_list: [
      
    ],
    record_list:[]
  },


// toDetail:function(e){
//   let index=e.currentTarget.dataset.index;
//   wx.navigateTo({
//     url: '/pages/home/tipDetail/tipDetail?index='+index,
//   })
// },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求诊断记录
    api.getRequestData('/api/diagnose/get_diagnose_history_list',{},'GET',false).then((res)=>{
      console.log("诊断记录的内容：",res)
      this.setData({ 
        record_list:res.data.data
      })
      if(this.data.record_list.length==0){
          this.setData({
            none:true
          })
      }
      else{
        this.setData({
          none:false
        })
      }
    })
    
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
    //请求诊断记录
    api.getRequestData('/api/diagnose/get_diagnose_history_list',{},'GET',false).then((res)=>{
      console.log("诊断记录的内容：",res)
      this.setData({ 
        record_list:res.data.data
      })
      if(this.data.record_list.length==0){
          this.setData({
            none:true
          })
      }
      else{
        this.setData({
          none:false
        })
      }
    })
    
  },


   // 开始滑动
   touchStart(e) {
    console.log('touchStart=====>', e);
    let record_list = [...this.data.record_list]
    record_list.forEach(item => {
      if (item.isTouchMove) {
        item.isTouchMove = !item.isTouchMove;
        this.setData({
          //videoId: item.videoID
        })
      }
    });
    this.setData({
      record_list: record_list,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  },

  touchMove(e) {
    console.log('touchMove=====>', e);
    let moveX = e.changedTouches[0].clientX;
    let moveY = e.changedTouches[0].clientY;
    let indexs = e.currentTarget.dataset.index;
    let record_list = [...this.data.record_list]

    let angle = this.angle({
      X: this.data.startX,
      Y: this.data.startY
    }, {
      X: moveX,
      Y: moveY
    });

    record_list.forEach((item, index) => {
      item.isTouchMove = false;
      // 如果滑动的角度大于30° 则直接return；
      if (angle > 30) {
        return
      }

      if (indexs === index) {
        if (moveX > this.data.startX) { // 右滑
          item.isTouchMove = false;
        } else { // 左滑
          item.isTouchMove = true;
        }
      }
    })

    this.setData({
      record_list
    })
  },

  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  // 删除
  delItem(e) {
    console.log("删除eeeee",e)
    let id = e.currentTarget.dataset.id;
    let record_list = [...this.data.record_list];
    //console.log('id--->', id);

    for (let i = 0; i < record_list.length; i++) {
      const item = record_list[i];
      item.isTouchMove = false;
      // var getUserId = item.openid;
      if (item.id === id) {
        record_list.splice(i, 1);
        // this.deleteHistory(item._id, getUserId)
        break;
      }
    }
    this.setData({
      record_list
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