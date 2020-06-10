// Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа
// передаются параметром.

console.log('---Task 1---');

function getResult(a, b, c) {
    return (a - b) / c;
}

console.log(getResult(853, 2, 3));


// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

console.log('---Task 2---');

function getKvadratKub(a) {

    kvadrat = a * a;

    kub = a * a * a;

    return [kvadrat, kub];
}

console.log(getKvadratKub(2));

// 3. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

console.log('---Task 3---');

function getMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function getMax(a, b) {
    return a > b ? a : b;
}

console.log(getMin(5, 4));
console.log(getMax(8, 4));

// 4. Напишите две функции: первая ф - ция должна возвращать массив с числовыми
// значениями, диапазон которых должен вводиться пользователем с клавиатуры;
// вторая– выводить полученный массив.

console.log('---Task 4---');

let arr = [];

function fillArr(arr) {

    let first = +prompt('Введите первое число диапазона'),
        second = +prompt('Введите второе число диапазона');

    if (first < second) {
        min = first;
        max = second;
    } else {
        max = first;
        min = second;
    }

    let current = first;

    for (i = 0; i <= max - min; i++) {
        arr.push(current);
        if (first > second) current--;
        else current++;
    }
}

function printArr(arr) {
    console.log(arr);
}

fillArr(arr);
printArr(arr);


// 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

console.log('---Task 5---');

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;

    }
}


//  6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

console.log('---Task 6---');

let arr6 = [3, 5, 7, 8, 9, 0, 7, 20, 46, 84];

function returnArrEven(x) {

    let newArr = [];

    for (let i = 0; i < x.length; i++) {
        if (isEven(x[i])) {
            newArr.push(x[i]);
        }
    }

    return newArr;
}

console.log(returnArrEven(arr6));

// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, топирамида должна быть нарисована этим символом, например:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

console.log('---Task 7---');

// Передаются 2 значения

function PrintPyramid(n, s) {

    for (let i = 1; i <= n; i++) {
        let m = '';
        for (let j = 0; j < i; j++) {
            if (s == undefined || s == '') {
                m += i;
            } else {
                m += s;
            }
        };
        console.log(m + '\n')
    }
};

PrintPyramid(prompt('Число строк'), prompt('Доп. параметр'))


// Передается 1 значение
// let symbol = prompt('Доп. параметр');

// function task7v2(n) {
//     for (let i = 1; i <= n; i++) {
//         let m = '';
//         for (let j = 0; j < i; j++) {
//             if (symbol == undefined || symbol.length - 1 || symbol == ' ') {
//                 m += i;
//             } else {
//                 m += symbol;
//             }
//         };
//         console.log(m + '\n')
//     }
// };
// task7v2(prompt('Число'))


// 8. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до
// 1000.

console.log('---Task 8---');

function getFibArray(N) {
    const arr = [];
    for (let i = 0; i < N; i++) {
        if (i === 0 || i === 1) arr[i] = 1;
        else arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr;
}

console.log(getFibArray(1000));

// 9. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
// цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. рекурсию.

console.log('---Task 9---');

let num = '167';

function toNine(a) {
    let arr = a.split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }
    if (sum > 9) {
        toNine(sum + '');
    } else {
        console.log(sum);
    }
}

toNine(num);


// 10. Дан массив с числами (передается параметром). Выведите последовательно его
// элементы, используя рекурсию и не используя цикл.

console.log('---Task 10---');

arr = [9, 6, 13, 14];

function arrCall(arr, n) {
    if (n < arr.length) {
        console.log(arr[n])
        return arrCall(arr, n + 1);
    }
}

arrCall(arr, 0);