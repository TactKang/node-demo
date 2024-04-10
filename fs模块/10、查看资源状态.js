/*
 * @Author: lwk
 * @Date: 2024-03-15 20:42:17
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-15 20:44:03
 * @Description: 请填写简介
 */
const fs = require('fs');

// 调用stat方法 status 缩写 状态
fs.stat('./static/lol.mp4',(err,data)=> {
    if(err) {
    console.log('操作失败');
    return
    }
    console.log(data);
})