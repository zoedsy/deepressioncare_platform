// pages/information/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoMess:'',
    name:'',
    na:'',
    sex:'',
    se:'',
    birthday:'',
    bir:'',
    height:'',
    weight:'',
    BMI:'',
    waist:'',

    relation:'',
    re:'',
    relationList:['自己', '父母', '子女', '孙子孙女', '亲戚', 
                  '爷爷奶奶', '外公外婆', '朋友'],
    // objectRelation: [
    //   {
    //     id: 0,
    //     name: '自己'
    //   },
    //   {
    //     id: 1,
    //     name: '父母'
    //   },
    //   {
    //     id: 2,
    //     name: '子女'
    //   },
    //   {
    //     id: 3,
    //     name: '孙子孙女'
    //   },
    //   {
    //     id: 4,
    //     name: '亲戚'
    //   },
    //   {
    //     id: 5,
    //     name: '爷爷奶奶'
    //   },
    //   {
    //     id: 6,
    //     name: '外公外婆'
    //   },
    //   {
    //     id: 7,
    //     name: '朋友'
    //   },
    // ],
    relationIndex:0,

    // heightList:['100cm以下','100cm','101cm','102cm','103cm','104cm','105cm','106cm','107cm','108cm','109cm',
    //                       '110cm','111cm','112cm','113cm','114cm','115cm','116cm','117cm','118cm','119cm',
    //                       '120cm','121cm','122cm','123cm','124cm','125cm','126cm','127cm','128cm','129cm',
    //                       '130cm','131cm','132cm','133cm','134cm','135cm','136cm','137cm','138cm','139cm',
    //                       '140cm','141cm','142cm','143cm','144cm','145cm','146cm','147cm','148cm','149cm',
    //                       '150cm','151cm','152cm','153cm','154cm','155cm','156cm','157cm','158cm','159cm',
    //                       '160cm','161cm','162cm','163cm','164cm','165cm','166cm','167cm','168cm','169cm',
    //                       '170cm','171cm','172cm','173cm','174cm','175cm','176cm','177cm','178cm','179cm',
    //                       '180cm','181cm','182cm','183cm','184cm','185cm','186cm','187cm','188cm','189cm',
    //                       '190cm','191cm','192cm','193cm','194cm','195cm','196cm','197cm','198cm','199cm',
    //                       '200cm','200cm以上'],
    // heightIndex:0,
                          

    smoke:'',
    isSmoke:['是', '否'],
    // objectSmoke: [
    //   {
    //     id: 0,
    //     name: '是'
    //   },
    //   {
    //     id: 1,
    //     name: '否'
    //   },
    // ],
    smokeIndex:0,

    date: '1900-01-01'
  },


  relationInput:function(e){
    // console.log(e);
    // this.setData({
    //   re:e.detail.value
    // })
    this.setData({
      relationIndex:e.detail.value,
      // re:relationList[relationIndex]
    })
  },

  nameInput:function(e){
    this.setData({
      na:e.detail.value
    })
  },

  sexInput:function(e){
    this.setData({
      se:e.detail.value,
      // sex:e.detail.value
    })
  },

  dateInput:function(e){
    this.setData({
      date:e.detail.value
    })
  },


  heightInput:function(e){
    let height = e.detail.value;
    this.setData({
      height:height
    })
    // this.setData({
    //   heightIndex:e.detail.value,
    //   height:heightList[heightIndex]
    // })
  },

  weightInput:function(e){
    this.setData({
      weight:e.detail.value
    })
  },

  bmiInput:function(e){
    this.setData({
      BMI:e.detail.value
    })
  },

  waistInput:function(e){
    this.setData({
      waist:e.detail.value
    })
  },

  smokeInput:function(e){
    this.setData({
      smokeIndex:e.detail.value,
      // smoke:isSmoke[smokeIndex]
    })
  },

  // bindPickerChange: function (e) {
  //   console.log('picker发送选择改变，携带值为', e.detail.value)
  //   this.setData({
  //     index: e.detail.value
  //   })
  // },


  saveBtnClick:function(){
    if(this.data.re.length == 0 || this.data.na.length == 0
      || this.data.se.length == 0 || this.data.bir.length == 0){
      this.setData({
        infoMess:'温馨提示：必填项不能为空！',
        
      })
    }else{
      this.setData({
        infoMess:'',
        relation:this.data.re,
        name:this.data.na,
        sex:this.data.se,
        birthday:this.data.bir
      })
    }
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
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

  }
})