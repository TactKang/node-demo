/*
 * @Author: lwk
 * @Date: 2024-03-14 11:05:51
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 11:08:20
 * @Description: 请填写简介
 */
const fs = require('fs')

fs.appendFile('./座右铭.txt',',\r\n则其善者而改之',err => {
    if(err) {
        console.log('写入失败');
        return
    }
    console.log('追加写入成功');
})
// 也可以使用同步api appendFileSync()