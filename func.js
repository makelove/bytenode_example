/**
* @File    :   func.js
* @Time    :   2021/09/27 18:00:54
* @Author  :   GH
* @Desc    :   
*/

function add(a, b) {
    try {
        // a = parseInt(a)
        // b = parseInt(b)
        a = eval(a)
        b = eval(b)
    } catch (error) {
        console.error('add error:', error);
        // return null
    }
    console.log(a, b);
    console.log(typeof a, typeof b);
    console.log('----------');
    return a + b
}

exports.add = add
