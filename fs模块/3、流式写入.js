/*
 * @Author: lwk
 * @Date: 2024-03-14 11:40:40
 * @LastEditors: lwk
 * @LastEditTime: 2024-03-14 11:42:14
 * @Description: 观书有感
 */
const fs = require('fs');

const ws = fs.createWriteStream('./观书有感.txt',)

ws.write('半亩方糖一件开')
ws.write('天光云影共徘徊')