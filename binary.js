"use strict";
// Binary + Operator
let a = null + undefined;
//console.log(a);
// NaN/   Explanation ➞ everything(except "string" & []) + undefined = NaN;
let a1 = null + true;
//console.log(a1);
// 1/   Explanation ➞ null = 0, true = 1 ➞ 0 + 1 ➞ 1;
let a2 = null + false;
//console.log(a2);
// 0/   Explanation ➞ null = 0, false = 0 ➞ 0 + 0 ➞ 0;
let a3 = null + 3;
//console.log(a3);
// 3/   Explanation ➞ null = 0 ➞ 0 + 3 ➞ 3;
let a4 = null + NaN;
//console.log(a4);
// NaN/  Explanation ➞ everything(except "string" & []) + NaN = NaN;
let a5 = null + "hello";
//console.log(a5);
// nullhello/  Explanation ➞ null = "null" ➞ "null" + "hello"➞ "nullhello";
let a6 = null + a + b + c + d + e + f;
//console.log(a6);
// ReferenceError/ Explanation ➞ because a, b, c, d, e anf f are not defined;
let a7 = undefined + true;
//console.log(a7);
// NaN/
let a8 = undefined + false;
//console.log(a8);
// NaN/
let a9 = undefined + 5;
//console.log(a9);
// NaN/
let a10 = undefined + NaN;
//console.log(a10);
// NaN/
let a11 = undefined + "hello";
//console.log(a11);
// undefinedhello/ Explanation ➞ = undefined = "undefined" + "hello"➞ "undefinedhello";
let a12 = undefined + a + b + c + d + e + f;
//console.log(a12);
// ReferenceError/ Explanation ➞ because a, b, c, d, e anf f are not defined;
let a13 = true + false;
//console.log(a13);
// 1/   Explanation ➞ true = 1, false = 0 ➞ 1 + 0 ➞ 1;
let a14 = true + 2;
//console.log(a14);
// 3/   Explanation ➞ true = 1➞ 1 + 2 ➞ 3;
let a15 = true + NaN;
//console.log(a15);
// NaN/
let a16 = true + "hello";
//console.log(a16);
// truehello/  Explanation ➞ true = "true" ➞ "true" + "hello"➞ "truehello";
let a17 = true + a + b + c + d + e + f;
//console.log(a17);
// ReferenceError/ Explanation ➞ because a, b, c, d, e anf f are not defined;
let a18 = false + 4;
//console.log(a18);
// 4/   Explanation ➞ false = 0➞ 0 + 4 ➞ 4;
let a19 = false + NaN;
//console.log(a19);
// NaN/
let a20 = false + "hello";
//console.log(a20);
// falsehello/  Explanation ➞ false = "false" ➞ "false" + "hello"➞ "falsehello";
let a21 = false + a + b + c + d + e + f;
//console.log(a21);
// ReferenceError/ Explanation ➞ because a, b, c, d, e anf f are not defined;
let a22 = 5 + 3;
//console.log(a22);
// 8/  Explanation ➞ 5 + 3➞ 8;
let a23 = 5 + NaN;
//console.log(a23);
// NaN/
let a24 = 5 + "hello";
//console.log(a24);
// 5hello/  Explanation ➞ 5 = "5" ➞ "5" + "hello"➞ "5hello";
let a25 = 5 + a + b + c + d + e + f;
//console.log(a25);
// ReferenceError/ Explanation ➞ because a, b, c, d, e anf f are not defined;
let a26 = "hello" + NaN;
//console.log(a26);
// helloNaN/  Explanation ➞ NaN = "NaN" ➞ "NaN" + "hello"➞ "helloNaN";
let a27 = "hello" + a + b + c + d + e + f;
//console.log(a27);
// ReferenceError/ Explanation ➞ because a, b, c, d, e anf f are not defined;
