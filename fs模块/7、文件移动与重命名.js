/*
 * @Author: lwk
 * @Date: 2024-03-14 15:41:02
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 15:46:56
 * @Description: 请填写简介
 */
const fs = require('fs');

fs.rename('./座右铭.txt','./移动.txt',err => {
    if(err) {
    console.log('操作失败');
    return
    }
})