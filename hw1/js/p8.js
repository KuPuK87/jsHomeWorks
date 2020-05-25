/*Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780.*/

a = 8,
b = 3;

// a+2(x-b)=16; с=16,  a-2b+2x=16 // 2x=-a+2b+16 // x=-a/2+16/2+b
let x = 16 / 2 - a / 2 + b;
console.log('x = ' + x + ', в первом уравнении');

// b(x+15)=a+6x;  15b+bx=a+6x // x(b-6)=a-15b // x=(a-15b)/(b-6)
x = (a - 15 * b) / (b - 6);
console.log('x = ' + x + ', во втором уравнении');

// x+2x+ax+bx=23780;  3x+ax+bx=23780  //  x(3+a+b)=23780  //  x=23780/(3+a+b)
x = 23780 / (3 + a + b);
console.log('x = ' + x + ', в третьем уравнении');