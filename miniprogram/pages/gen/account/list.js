

// miniprogram/pages/gen/account/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        // 页面总高度将会放在这里
        windowHeight: 0,
        // navbar的高度
        navbarHeight: 0,
        // header的高度
        headerHeight: 0,
        // scroll-view的高度
        scrollViewHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      let accounts = await wx.cloud.callFunction({
        name: 'gen_account_get_list',
        data: {
          current: 'homepage'
        }
      })
      this.setData({accounts:accounts.result,current:"homepage"}) 


        var that = this;

        // 先取出页面高度 windowHeight
        wx.getSystemInfo({
          success: function(res) {
              that.setData({
                  windowHeight: res.windowHeight
              });
          }
      });

      // 然后取出navbar和header的高度
      // 根据文档，先创建一个SelectorQuery对象实例
      let query = wx.createSelectorQuery().in(this);
      // 然后逐个取出navbar和header的节点信息
      // 选择器的语法与jQuery语法相同
      query.select('#mybar').boundingClientRect();
      query.select('#mybar').boundingClientRect();

      // 执行上面所指定的请求，结果会按照顺序存放于一个数组中，在callback的第一个参数中返回
      query.exec((res) => {
          // 分别取出navbar和header的高度
          let navbarHeight = res[0].height;
          let headerHeight = res[1].height;

          // 然后就是做个减法
          // let scrollViewHeight = this.data.windowHeight - navbarHeight - headerHeight;
          let scrollViewHeight = this.data.windowHeight - navbarHeight;

          // 算出来之后存到data对象里面
          this.setData({
              scrollViewHeight: scrollViewHeight
          });
      });


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
    // this.setData({
    //     current: detail.key
    // });

    if (detail.key == "remind"){

      wx.redirectTo({
        url: '../intro/index'
      })
    }
}


})