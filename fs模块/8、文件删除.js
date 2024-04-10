/*
 * @Author: lwk
 * @Date: 2024-03-14 15:48:56
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 15:50:18
 * @Description: 请填写简介
 */
const fs = require('fs')
// unlink unlinkSync
fs.unlink('./观书有感.txt',err => {
    if(!err) return 
    console.log('删除成功');
})

// // 调用rm方法  同步 rmSync
// fs.rm('./观书有感.txt',err => {

// })