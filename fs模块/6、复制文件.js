/*
 * @Author: lwk
 * @Date: 2024-03-14 14:42:03
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 14:46:38
 * @Description: 请填写简介
 */

let fs = require('fs')
// 同步读取
// let data = fs.readFileSync('./static/lol.mp4')

// fs.writeFileSync('./static/lol2.mp4',data)

// 流式操作
// 创建读取流对象
const rs = fs.createReadStream('./static/lol.mp4')
// 创建写入流对象
const ws = fs.createWriteStream('./static/lol2.mp4')

// 绑定data事件
rs.on('data',(chunk) => {
    ws.write(chunk)
})