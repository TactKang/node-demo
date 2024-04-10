/*
 * @Author: lwk
 * @Date: 2024-03-14 14:06:20
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 14:41:23
 * @Description: 请填写简介
 */
const fs = require('fs');

const rs = fs.createReadStream('./static/lol.mp4')

rs.on('data',(chunk) => {
    console.log(chunk.length,'看见了'); // 单位字节

})

rs.on('end',() => {
    console.log('读取完成');
})