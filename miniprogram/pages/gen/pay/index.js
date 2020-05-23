// miniprogram/pages/gen/pay/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:"mine"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let data = await wx.cloud.callFunction({
      name: 'gen_course_no',
      data: {
      }
    })
    console.log("========>>>>>>",data)
    this.setData({user:data.result}) 
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
copy:function(e){
  wx.setClipboardData({
    data: 'data',
    success (res) {
      wx.getClipboardData({
        success (res) {
          console.log(res.data) // data
        }
      })
    }
  })
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
    }

})