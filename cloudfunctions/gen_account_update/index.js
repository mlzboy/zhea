
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()   

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let accounts = await db.collection('accounts').doc(event._id).remove({
    success: function(res) {
      console.log(res.data)
    }
  })




  return accounts.data
}