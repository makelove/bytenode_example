/**
* @File    :   express_app.js
* @Time    :   2021/09/27 17:40:45
* @Author  :   GH
* @Desc    :
*/

const express = require('express');
// const { add } = require('./func')
// const { add } = require('./func-obfuscated')

console.log("require('bytenode');");
require('bytenode');
const { add } = require('./func-obfuscated.jsc')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World\n----\n');
});
app.get('/add', async (req, res, next) => {
    console.log(req.query);
    // console.log(req.query.a, req.query.b);
    let rs = add(req.query.a, req.query.b)
    let rt = {
        a: req.query.a,
        b: req.query.b,
        add: rs
    }
    return res.status(200).send(rt)
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
