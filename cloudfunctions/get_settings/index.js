// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()   

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const settings = await db.collection('settings').doc('b05d218a5ec8c38f0014456b3a6bb713').get()
  return settings.data
}