/*
 * @Author: lwk
 * @Date: 2024-03-14 10:25:38
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 11:11:01
 * @Description: 创建一个文件，座右铭.txt,写入内容，三人行，则必有我师焉
 */
const fs = require('fs');
// // 异步写入 writeFile也可以实现追加文本，writeFile 第三个参数可以添加{flag:'a'}，配置项
// fs.writeFile('./座右铭.txt','三人行，则必有我3师焉',err => {
//     if(err !== null) return
//     console.log('写入成功');
// })
// console.log(1+1);
// 同步写入
fs.writeFileSync('./座右铭2.txt','三人行，则必有我22师焉')
console.log(1+1);