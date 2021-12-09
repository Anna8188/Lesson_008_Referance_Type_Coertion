# Lesson_008_Referance_Type_Coertion

> > [<img src="https://i.morioh.com/2019/11/06/378216c0edce.jpg" width="300" height="150" />](https://i.morioh.com/2019/11/06/378216c0edce.jpg)

# Operators

- > > > > ### Binary + Operator

  - null + undefined
  - null + true
  - null + false
  - null + 3
  - null + NaN
  - null + 'hello'
  - null + a + b + c + d + e + f
  - undefined + true
  - undefined + false
  - undefined + 5
  - undefined + NaN
  - undefined + 'hello'
  - undefined + a + b + c + d + e + f
  - true + false
  - true + 2
  - true + NaN
  - true + 'hello'
  - true + a + b + c + d + e + f
  - false + 4
  - false + NaN
  - false + 'hello'
  - false + a + b + c + d + e + f
  - 5 + 3
  - 5 + NaN
  - 5 + 'hello'
  - 5 + a + b + c + d + e + f
  - 'hello' + NaN
  - 'hello' + a + b + c + d + e + f

  Try the same also for binary -, \*, /, %, |, &, ^, <<, >>, >>>, ==, ===, <, >, >=, <= operators as you did for binary + operator

  [Explanations & Solutions](./binary.js)

- > > > > ### Unary - Operator

  - -null
  - -undefined
  - -true
  - -false
  - -5
  - -'hello'
  - -'234'
  - -'234.32e3'
  - -new Number(NaN)
  - -new String('hello')
  - -(/google.com/)
  - -([ ])
  - -([2])
  - -([2, 3])
  - -(function() { })
  - -(a) // test the same also for b, c, d, e and f

  Try the same also for both postfix and prefix ++ and -- operators as you did for unary - operator\_

- > > > ### Postfix and prefix ++ & -- operators

  - for each one of a, b, c, d, e, f try the following console.log(a, a++, a); & console.log(a, ++a, a);
  - do the same also for -- operator

- > > > ### % operator

  - 234 % 2
  - 234 % 3
  - 23.23 % 2 === 1.23
  - 234.23 % 2.223

- > > > ### ? operator

  - 1 ? 234 : 32
  - for each one of a, b, c, d, e, f try the following a /[a.hasOwnProperty('valueOf') ? 'valueOf' : 'toString']/()

- > > > ### instanceof operator

  - null instanceof Object
  - true instanceof Boolean
  - false instanceof Boolean
  - 1 instanceof Number
  - NaN instanceof Number
  - 'hello' instanceof String
  - (function () { }) instanceof Function
  - (function () { }) instanceof Object
  - a instanceof Object // try the same also for b, c, d, e and f
  - new Number(1) instanceof Number
  - new Number(NaN) instanceof Object
  - /hello/img instanceof RegExp
  - /hello/img instanceof Function
  - /hello/img instanceof Object

- > > > ### in operator

  - 'valueOf' in null
  - 'valueOf' in undefined
  - 'valueOf' in true
  - 'valueOf' in 1
  - 'valueOf' in 'toString'
  - 'valueOf' in new Number(1)
  - 'x' in new Number(1)
  - 'valueOf' in a // try the same also for b, c, d, e and f
  - 'toString' in a // try the same also for b, c, d, e and f
  - 'call' in ({})
  - 'call' in (function () { })

- > > > ### delete operator

  - delete ({ }).valueOf
  - delete 1
  - delete 1.2
  - delete 1.2.toString
  - delete a.x
  - a.y = 3; console.log(delete a.y);
  - delete f
  - delete z
  - var x = 3; console.log(delete x); console.log(x);
  - y = 4; console.log(delete y); console.log(y);
