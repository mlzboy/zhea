const { $Message } = require('../../dist/base/index');


// miniprogram/pages/gen/account/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    for_check:true,
    dict:{}
   
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
    console.log("settings============================",settings)
    this.setData({for_check:settings.result.for_check})
  },
  handleChange ({ detail }) {
   // this.setData({
   //     current: detail.key
   // });
 
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
 get_value:function(e){

  this.data.dict[e.currentTarget.id] = e.detail.detail.value;

  this.setData({

    dict: this.data.dict
    
    });

  console.log(e.detail.detail.value,e.currentTarget.id);
  console.log(this.data.dict)

 },


 submit:async function(e){

    var number_fields = []
    for (var key in this.data.dict)
    {
      　　if (number_fields.includes(key))
          {
              this.data.dict[key] = parseFloat(this.data.dict[key])
          }
    }
    
    $Message({
      content: '新增成功',
      type: 'error'
  });
    let data = await wx.cloud.callFunction({
      name: 'gen_account_create',
      data: this.data.dict
    })
    wx.redirectTo({
      url: 'list',
    })

 },

  formSubmit: async function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log(e.detail.value)

    var number_fields = []
    var dict = e.detail.value;
    for (var key in dict)
    {
      　　if (number_fields.includes(key))
          {
              dict[key] = parseFloat(dict[key])
          }
    }

    

    let data = await wx.cloud.callFunction({
      name: 'gen_account_create',
      data: dict
    })
    wx.redirectTo({
      url: 'list',
    })
  },
})