// 1. Выведите числа от 1 до 50 и от 35 до 8.

console.log('---Task 1---');
document.write('</br><b>---Task 1---</b></br>');

let i = 1;

while (i <= 50) {
    console.log(i);
    document.write(`${i},`);
    i++;
}
console.log('____________');
document.write('</br>');

i = 35;

while (i >= 8) {
    console.log(i);
    document.write(`${i},`);
    i--;
}


// 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку.

console.log('---Task 2---');
document.write('</br><b>---Task 2---</b></br>');

i = 89;

while (i >= 11) {
    console.log(i);
    document.write(`${i} </br>`);
    i--;
}


// 3. С помощью цикла найдите сумму чисел от 0 до 100.

console.log('---Task 3---');
document.write('</br><b>---Task 3---</b></br>');


let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}

console.log(sum);
document.write(`Сумма чисел от 0 до 100 = <b>${sum}</b>`);


// 4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 (1+2+3).

console.log('---Task 4---');
document.write('</br><b>---Task 4---</b></br>');

let a = 5;
sum = 0;

for (let i = 1; i <= a; i++) {
    sum = 0;

    for (let b = 1; b <= i; b++) {
        sum += b;
    }

    console.log(`сумма чисел в числе ${i}  = ${sum}`);
    document.write(`сумма чисел в числе ${i}  = <b>${sum}</b> </br>`);
}


// 5. Выведите чётные числа от 8 до 56. Решить задание через while и for.

console.log('---Task 5---');
document.write('</br><b>---Task 5---</b></br>');

i = 8;

while (i <= 56) {

    if (i % 2 === 0) {
        console.log(i);
        document.write(`${i},`);
    }
    i++;
}

console.log('____________');
document.write('</br>');

for (i = 8; i <= 56; i++) {

    if (i % 2 == 0) {
        console.log(i);
        document.write(`${i},`);
    }
}


// 6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:

console.log('---Task 6---');
document.write('</br><b>---Task 6---</b></br>');

a = 10;

for (let i = 2; i <= a; i++) {

    for (let b = 1; b <= 10; b++) {
        umn = i * b;
        console.log(`${i}*${b} = ${umn}`);
        document.write(`${i}*${b} = ${umn}</br>`);
    }

    document.write(`</br>`);
    console.log('\n');
}


// 7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

console.log('---Task 7---');
document.write('</br><b>---Task 7---</b></br>');

let num = 0;

for (let n = 1000; n >= 50; num++) {

    n = n / 2;

    document.write(`${num}  -  ${n} <br/>`);
    console.log(`${num} - ${n} \n`);
}

document.write(`Количество интераций = <b>${num}</b>`);
console.log(num);


// 8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь может ввести отрицательное значение.

console.log('---Task 8---');
document.write('</br><b>---Task 8---</b></br>');

let amount = 0;

for (i = 0;; i++) {

    let user = Number(prompt("Введите число"));

    console.log(user);

    if (user == 0) {
        break;
    } else if (user) {
        amount = +amount + +user;
    } else {
        alert('Это не число!')
    }
}

let average = amount / i;

console.log(i, amount, average)
document.write(`Количество введеных чисел - <b>${i}</b> </br>`);
document.write(`Сумма введеных чисел - <b>${amount}</b> </br>`);
document.write(`Среднее арифметическое введеных чисел - <b>${average}</b>`);


// 9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.

console.log('---Task 9---');
document.write('</br><b>---Task 9---</b></br>');

str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57",
    currentNumber = "",
    minNumber = str[0],
    maxNumber = str[0];

for (let i = 0; i < str.length; i++) {

    currentNumber += str[i] + "";

    if (str[i] == " " || i == str.length - 1) {
        // console.log(currentNumber);
        if (parseInt(currentNumber) < minNumber) {
            minNumber = currentNumber;
        }

        if (parseInt(currentNumber) > maxNumber) {
            maxNumber = currentNumber;
        }

        currentNumber = "";
    }
}

console.log(`Min: `, minNumber, `Max: `, maxNumber);
document.write(`Минимальное число: ${minNumber}, Максимальное число:  ${maxNumber}</br>`);


// Дано произвольное целое число n. Написать программу, которая:
// a. разбивает число n на цифры и выводит их на экран; +
// b. подсчитывает сколько цифр в числе n; +
// c. находит сумму цифр числа n;  + 
// d. меняет порядок цифр числа n на обратный.
// Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.

console.log('---Task 10---');
document.write('</><b>---Task 10---</b></br>');

n = prompt('Введите число');
sum = 0;
num = 0;

for (let i = 0; i < n.length; i++) {

    x = +(n[i]);
    sum += x;
    num = i + 1;

    document.write(`${x} </br>`)
    console.log(x);
}

let revStr = "";

for (let i = n.length - 1; i >= 0; i--) {
    revStr += n[i];
}

console.log(`Цифр в числе =`, num);
document.write(`Цифр в числе = ${num}</br>`);

console.log(`Сумма чисел =`, sum);
document.write(`Cумма чисел = ${sum}</br>`);

console.log(revStr);
document.write(`обратный порядок = ${revStr}`);