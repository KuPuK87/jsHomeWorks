// 1.    Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=,
// ++, --. Количество строк кода при этом не должно измениться. Код для переделки:
// var num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// console.log(num);

console.log('---Task 1---');
document.write('<b>---Task 1---</b></br>');

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
num += 7;
num -= 18;
num *= 10;
num /= 15;

console.log(num);
document.write(num + '</br>');


// 2.   Создайте три числовые переменные: час, минута, секунда. С их помощью выведите
// время в формате час:минута:секунда'.

console.log('---Task 2---');
document.write('<b>---Task 2---</b></br>');

let controlDate = new Date();

let hour = controlDate.getHours(), //hour = 4;
    minute = controlDate.getMinutes(), //minute = 30;
    second = controlDate.getSeconds(); //second = 59;

console.log(hour + ':' + minute + ':' + second);
document.write(hour + ':' + minute + ':' + second + '</br>');


// 3.    Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым
// символом этой строки является буква 'a'. Если это так - выведите 'да', в противном
// случае выведите 'нет'.

console.log('---Task 3---');
document.write('<b>---Task 3---</b></br>');

let str = 'abcde';
document.write('В строке "abcde" первая буква "а", верно?:</br>');

if (str[0] == 'a') {
    console.log('Да');
    document.write('<i>Да</i> </br>');
} else {
    console.log('Нет');
    document.write('<i>Нет</i> </br>');
}


// 4.    Создайте переменную str и присвойте ей значение «В некиим царстве, в некиим
// государстве жил-был богатый купец, именитый человек». Выведите на экран только
// фразу «богатый купец».

console.log('---Task 4---');
document.write('<b>---Task 4---</b></br>');

str = '«В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек». Выведите на экран только фразу «богатый купец».';
console.log(str.substr(48, 13));
document.write(str.substr(48, 13) + '</br>');


// 5.   Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый
// символ строки, второй и третий.

console.log('---Task 5---');
document.write('<b>---Task 5---</b></br>');

str = '951';

let summ = Number(str[0]) + Number(str[1]) + Number(str[2]);

console.log(summ);
document.write(summ + '</br>');


// 6.   Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

console.log('---Task 6---');
document.write('<b>---Task 6---</b></br>');

let a = 10;

if (a == 10) {
    console.log('Верно');
    document.write('Верно</br>');
} else {
    console.log('Неверно');
    document.write('Неверно</br>');
}


// 7.   Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 'test', 'тест', 3.

console.log('---Task 7---');
document.write('<b>---Task 7---</b></br>');

a = 'test';

if (a == 'test') {
    console.log('Верно');
    document.write('Верно</br>');
} else {
    console.log('Неверно');
    document.write('Неверно</br>');
}

a = 'тест';

if (a == 'test') {
    console.log('Верно');
    document.write('Верно</br>');
} else {
    console.log('Неверно');
    document.write('Неверно</br>');
}

a = 3;

if (a == 'test') {
    console.log('Верно');
    document.write('Верно</br>');
} else {
    console.log('Неверно');
    document.write('Неверно</br>');
}


// 8.   Если переменная a равна или меньше 1, а переменная b больше или равна 3, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

console.log('---Task 8---');
document.write('<b>---Task 8---</b></br>');

a = 1;
let b = 3;

if (a <= 1 && b >= 3) {
    console.log(a + b);
    document.write(a + b + '</br>');
} else {
    console.log(a - b);
    document.write(a - b + '</br>');
}

a = 6;
b = 3;

if (a <= 1 && b >= 3) {
    console.log(a + b);
    document.write(a + b + '</br>');
} else {
    console.log(a - b);
    document.write(a - b + '</br>');
}

a = 3;
b = 4;

if (a <= 1 && b >= 3) {
    console.log(a + b);
    document.write(a + b + '</br>');
} else {
    console.log(a - b);
    document.write(a - b + '</br>');
}


// 9.   Создайте переменную name, login и pass. С помощью ф-ции prompt() получите
// соответствующие значения: «Ваше имя», «Введите логин», «Ваш пароль». Выведите на
// экран «Добро пожаловать, %Имя%! Вы успешно вошли на сайт.», если логин и пароль
// равны 'admin' и 'nimda', иначе «%Имя%, вы неверно ввели логин или пароль!».

console.log('---Task 9---');
document.write('<b>---Task 9---</b></br>');

let name = prompt('Ваше имя'),
    login = prompt('Введите логин'),
    pass = prompt('Ваш пароль');

if (login == 'admin' && pass == 'nimda') {
    alert('Добро пожаловать, ' + name + '!');
    document.write('Добро пожаловать, ' + name + '! </br>');
} else {
    alert(name + ', вы неверно ввели логин или пароль!');
    document.write(name + ', вы неверно ввели логин или пароль! </br>');
}


// 10.  Переменная month может принимать значения от 1 до 12. Если она имеет значение 1, 2
// или 12, то в переменную season запишем 1, если имеет значение 3, 4 или 5 – 2 и так 
// далее. После определения сезона, определите пору года и запишите значение в
// переменную seasonName: если 1, то 'Зима', если 2 - 'Лето' и т.д. Определение поры года
// написать через switch.

console.log('---Task 10---');
document.write('<b>---Task 10---</b></br>');

let month = prompt('Введите номер месяца - 1-12'),
    season,
    seasonName;

if (month == 1 || month == 2 || month == 12) season = 1;
if (month == 3 || month == 4 || month == 5) season = 2;
if (month == 6 || month == 7 || month == 8) season = 3;
if (month == 9 || month == 10 || month == 11) season = 4;
if (month > 12) alert('Такого месяца не бывает!!!');

switch (season) {
    case 1:
        seasonName = 'Зима';
        break;
    case 2:
        seasonName = 'Весна';
        break;
    case 3:
        seasonName = 'Лето';
        break;
    case 4:
        seasonName = 'Осень';
        break;
    default:
        seasonName = ('Такого месяца не бывает!!!');
}

console.log(seasonName);
document.write(seasonName);