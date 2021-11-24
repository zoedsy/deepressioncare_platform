Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyRecord:[{
      id: '0',
      recordItem:' '
    }],
    // 热门搜索内容变量
    hots:[{
      id:'01',
      text:'头疼',
      hotStatus:132  //no.2
    },{
      id:'02',
      text:'焦虑',
      hotStatus:103 //no.3
    },{
      id:'03',
      text:'无法快乐',
      hotStatus:43
    },{
      id:'04',
      text:'安睡',
      hotStatus:38
    },{
      id:'05',
      text:'释放心情',
      hotStatus:45
    },{
      id:'06',
      text:'非处方类药物',
      hotStatus:92
    },{
      id:'07',
      hotImg:'../../../images/hot.png',
      text:'香氛',
      hotStatus:156  //no.1
    },{
      id:'08',
      text:'冥想',
      hotStatus:85
    }],
    searchContext:'',
    haveSerachLike: false,
    searchLikeList: [],

    //模糊查询变量
    searchLikeAllList: [{
      text: '抑郁症如何释放心情'
    }, {
      text: '如何更好的调节心情'
    }, {
      text: '怎么拥有更加乐观的心态'
    }, {
      text: '如何休息放松'
    }, {
      text: '如何避免完美注意'
    }, {
      text: '怎么避免消极'
    },{
      text:'...'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //hots变量即为数据中的hots
    var hots = this.data.hots;
    //这个是做的状态码的分类码,从大到小的顺序
    var hots2 = hots.sort((x, y) => y.hotStatus - x.hotStatus);
    // reverse()方法会反转数组项的顺序
    // hots.reverse();
    console.log(hots2);
    this.setData({
      hots: hots2
    })
    //获取缓存的数据
    wx.getStorage({
      key: 'historyRecord',
      //接口调用成功的回调函数
      success: (res) => {
        // success
        this.setData({
          historyRecord: res.data
        })
      },
      //接口调用失败的回调函数
      fail: function() {
        // fail
      },
      //接口调用完成的回调函数
      complete: function() {
        // complete
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
  
  },
  // @title    bindconfirm
// @description   点击搜索框架就会触发的事件
// @auth      shiyidu            
// @param     e
// @return   无
  bindconfirm: function(e){
    console.log(e);
    //动态获取input的值
    var recordItem = e.detail.value;
    this.saveHistory({
      id: 0,
      recordItem
    })
    wx.navigateTo({
      url: '../searchbar/searchbar',
    })
    this.setData({
      searchContext:''
    })
  },
  // @title    changeSearch
// @description   输出搜索内容的模糊查询
// @auth      shiyidu             时间（2019/6/18   10:57 ）
// @param    e
// @return    none
  changeSearch (e) {
    let value = e.detail.value
    if (value === '') {
      this.setData({
        haveSerachLike: false
      })
      return
    }
    //进行模糊查询 x=>y 是 function(x){return y;};的简写   indexOf(value)查找子字符串在字符串中的下标
    let arr = this.data.searchLikeAllList.filter(item => item.text.indexOf(value) > -1)
    console.log(arr)
    this.setData({
      haveSerachLike: true,
      searchLikeList: arr,
    })
  },
  // @title    backTo
// @description   携带参数返回
// @auth      shiyidu             
// @param     none
// @return    none
  backTo () {

    //携带参数返回
    wx.navigateBack({
      delta: 1
    })
  },

  //? 
  // @title    deleteRecord
// @description   删除当前搜索的记录
// @auth      shiyidu             时间（2019/6/18   10:57 ）
// @param     输入参数名        参数类型         "解释"
// @return    返回参数名        参数类型         "解释"
  deleteRecord: function(e){
    console.log(e);
    //historyRecord只有一项，就是正在搜索那一项
    let filterArr = this.data.historyRecord.filter((item, index) => {
      return index !== e.target.dataset.index
    })
    //设置数据
    this.setData({
      historyRecord: filterArr
    })
    //设置缓存
    wx.setStorage({
      key: 'historyRecord',
      data: filterArr
    })
  },

  // @title   saveHistory
// @description   保存历史搜索记录
// @auth      shiyidu            
// @param     保存的记录        参数类型         "解释"
// @return    返回参数名        参数类型         "解释"
  saveHistory (param) {
    let arr = this.data.historyRecord
    arr.unshift(param)
    wx.setStorage({
      key: 'historyRecord',
      data: arr
    })
    this.setData({
      historyRecord: arr
    })
  }
})
