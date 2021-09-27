## 保护Node.js源代码-obfuscator+bytenode+packer
- 视频 [【编程】保护Node.js源代码：obfuscator混淆+bytenode字节码编译器+packer打包](https://www.bilibili.com/video/BV1iM4y137Ue/)

- 克隆
gc git@github.com:iWinston/javascript-code-protection-example.git

## 如何保护价值上千万的Node.js源代码？
https://zhuanlan.zhihu.com/p/84386456

提供一个JavaScript obfuscator + bytenode + node-packer的解决方案。

极简的Node.js字节码编译器
https://github.com/OsamaAbbas/bytenode

通过npm安装javascript-obfuscator 和 bytenode。然后在当前系统下安装 node-packer

打包成一个执行文件
安装 nodec ，有点复杂 
https://github.com/pmq20/node-packer
下载 nodec-v1.5.0-linux-x64.gz

javascript-obfuscator支持多种混淆技术，可能通过查看文档，按照自己的项目需求，调配选用合适的选项。

# javascript-code-protection-example
An example of JavaScript code protection.

## Introduction
This repository contains an example of JavaScript code protection using javascript-obfuscator, bytenode and node-packer.

## For Local Development
- Clone this repo and change directory to it.
- Install the dependencies using `npm install`.
- Make sure you have installed node-packer: https://github.com/pmq20/node-packer OR https://github.com/slee047/node-packer (For releases after Node.js 8.3.0)

## Command Usage
- `npm run obfuscate`: obfuscate the `index.js` to `index-obfuscated.js`
- `npm run bytenode`: compile the `index-obfuscated.js` to `index-obfuscated.jsc`
- `npm run bytenode:run`: run the `index-obfuscated.jsc`
- `npm run nodec`: package your Node.js project
- `npm run build`: package your Node.js project into an executable that is obfuscated and compiled
