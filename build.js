/**
* @File    :   build.js
* @Time    :   2021/09/23 14:27:51
* @Author  :   GH
* @Desc    :   
执行
node build.js
能看到结果

不用Docker
报错 Error: Invalid or incompatible cached data (cachedDataRejected)
*/



console.log("require('bytenode');");
require('bytenode');

console.log("require('./index-obfuscated.jsc');");
require('./index-obfuscated.jsc');
console.log('end');