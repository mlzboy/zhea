
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()   

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var d = new Date();
  event["timestamp"] = d.getTime()
  event["openid"] = wxContext.OPENID;
  console.log("%%%%%%%%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
  console.log(event)
  let ret = await db.collection('accounts').add({
    // data 字段表示需新增的 JSON 数据
    data: event
  })


  
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}