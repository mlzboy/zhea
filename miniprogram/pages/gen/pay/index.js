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
down: function(e){　　　　　　　　　　　　　　　　//触发函数
  // console.log(e.currentTarget.dataset.url)
  wx.downloadFile({
    url: "https://cloud-minapp-23060.cloud.ifanrusercontent.com/1jcOlP3TIinB7HCU.png",　　　　　　　//需要下载的图片url
    success: function (res) {　　　　　　　　　　　　//成功后的回调函数
      wx.saveImageToPhotosAlbum({　　　　　　　　　//保存到本地
        filePath: res.tempFilePath,
        success(res) {
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
          })
        },
        fail: function (err) {
          if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
            wx.openSetting({
              success(settingdata) {
                console.log(settingdata)
                if (settingdata.authSetting['scope.writePhotosAlbum']) {
                  console.log('获取权限成功，给出再次点击图片保存到相册的提示。')
                } else {
                  console.log('获取权限失败，给出不给权限就无法正常使用的提示')
                }
              }
            })
          }
        }
      })
    }
  });
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