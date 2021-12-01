Page({
  /**
   * 页面的初始数据
   */
  data: {
    collect:[],
    tabs: [
      {
        id: 0,
        value: "图文咨询",
        isActive: true
      },
      {
        id: 1,
        value: "电话咨询",
        isActive: false
      },
      {
        id: 2,
        value: "其他服务",
        isActive: false
      }
      
    ]
  },
  onShow(){
    const collect=wx.getStorageSync("collect")||[];
    this.setData({
      collect
    });
      
  },
  handleTabsItemChange(e) {
    // 1 获取被点击的标题索引
    const { index } = e.detail;
    // 2 修改源数组
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    // 3 赋值到data中
    this.setData({
      tabs
    })
  }
})