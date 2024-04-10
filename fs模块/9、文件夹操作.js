/*
 * @Author: lwk
 * @Date: 2024-03-14 16:10:50
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 17:29:31
 * @Description: 请填写简介
 */
const fs = require('fs');

// fs.mkdir('./html',err => {
//     if(err) {
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功')
// })

// 递归创建
// fs.mkdir('./a/b/c',{recursive:true},err => {
//     if(err) {
//         console.log('创建失败');
//         return
//     }
//     console.log('创建成功')
// })

// 读取文件夹 read 读取 dir directory文件夹
fs.readdir('./static',(err,data)  =>{
    console.log(data);
})
