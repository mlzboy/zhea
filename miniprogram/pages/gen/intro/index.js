// miniprogram/pages/gen/intro/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    for_check:true,
    current:"remind"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let settings = await wx.cloud.callFunction({
      name: 'get_settings',
      data: {
      }
    })
    this.setData({for_check:settings.result.for_check})
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


  handleChange ({ detail }) {

    let url = "";
    switch(detail.key){
        case "remind":
          url='../intro/index';
          break;
        case "mine":
          url = "../pay/index";
          break;
        default: 
          url = "../account/list";
          break;
    }
    wx.redirectTo({
      url: url
    })



},

handleContact (e) {
  console.log(e.detail.path)
  console.log(e.detail.query)
}


})