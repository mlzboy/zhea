

// miniprogram/pages/gen/account/update.js
Page({

   /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      console.log(options._id)
      let data = await wx.cloud.callFunction({
        name: 'gen_account_get',
        data: {
          "_id": options._id
        }
      })
      console.log("========>>>>>>",data)
      this.setData({account:data.result}) 
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
  formSubmit: async function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value.title)

    var number_fields = []
    var dict = e.detail.value;
    for (var key in dict)
    {
      　　if (number_fields.includes(key))
          {
              dict[key] = parseFloat(dict[key])
          }
    }

    console.log(this.data.account._id)
    let data = await wx.cloud.callFunction({
      name: 'gen_account_update',
      data: {
        data:dict,
        _id:this.data.account._id
      }
    })
    wx.redirectTo({
      url: 'list'
    })
    // wx.navigateTo({
    //   url: 'list'
    // })
    // wx.switchTab({
    //   url: 'list',
    // })

  },
})