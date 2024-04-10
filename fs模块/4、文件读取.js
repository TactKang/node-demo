/*
 * @Author: lwk
 * @Date: 2024-03-14 11:53:06
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 13:39:00
 * @Description: 请填写简介
 */
const fs = require('fs');
fs.readFile('./座右铭.txt',(err,data) => {
    console.log(data.toString());
})
// 也可使用同步读取 let data = fs.readFileSync('./观书有感.txt')