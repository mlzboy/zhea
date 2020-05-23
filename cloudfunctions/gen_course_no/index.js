// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()   
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let openid = wxContext.OPENID

  console.log("userInfo",event.userInfo)
  // 检查是否已有该账号
  let result = await db.collection('users').where({
    openid: openid
  }).get()

  if (result.data.length == 0){



      //生成教师6位课堂短号

      const settings = await db.collection('settings').doc('b05d218a5ec8c38f0014456b3a6bb713').get()

      console.log("SSSSSSSSSSSSSSSSSSSSSSSSsssss")
      console.log(settings.data)

      
      await db.collection('settings').doc('1d1104975e9e397e00a7a95e6b00d0b3').update({
          data:{
              course_no:_.inc(1)
          }
      })

      //add
      console.log("add")
      let ret = await db.collection('users').add({
            // data 字段表示需新增的 JSON 数据
            data: {

                openid:openid,
                // openid2:event.userInfo.openId,
                is_vip:false,
                // course_name:event.userInfo.nickname+"老师的课堂"
                course_no:settings.data.course_no + 1
            }
          })
      console.log("$$$$$$$$$$$$$$$$$$")
      console.log(ret)




      return {
        course_no:settings.data.course_no+1
      }

  }
  else{
      console.log("direct return")
      return {
        course_no:result.data[0].course_no
      }      

  }

}