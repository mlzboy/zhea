
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()   

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let result = await db.collection('accounts').where({
    // openid: wxContext.OPENID
    _id:event._id
  }).get()

  account = result.data[0]
  return account;
}