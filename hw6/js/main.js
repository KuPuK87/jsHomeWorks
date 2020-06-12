// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

console.log('----Task 1----');

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));


// 2. В переменной date лежит дата в формате '2025-12-31' Преобразуйте эту дату в
// '31/12/2025'

console.log('----Task 2----');

let date = '2025-12-31';
let arr = date.split('-');
let newStr = `${arr[2]}/${arr[1]}/${arr[0]}`;

console.log(newStr);


// 3. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript'тремя разными способами (через substr, substring, slice).
console.log('----Task 3----');

str = 'я учу javascript!';

console.log(str.substr(2, 4));
console.log(str.substr(6, 10));
console.log(str.substring(2, 5));
console.log(str.substring(6, 16));
console.log(str.slice(2, 5));
console.log(str.slice(6, -1));


// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы
// кубов его элементов. Для решения воспользуйтесь циклом for.

console.log('----Task 4----');

arr = [4, 2, 5, 19, 13, 0, 10];

let a = 0;

for (let i = 0; i < arr.length; i++) {
    a += Math.pow(arr[i], 3);
}

console.log(Math.sqrt(a));


// 5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
// Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
// Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
console.log('----Task 5----');

a = 3;
let b = 5,
    c = Math.abs(a - b);

console.log(c);

a = 6,
    b = 1,
    c = Math.abs(a - b);

console.log(c);


// 6. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые
// состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
console.log('----Task 6----');

date = new Date(),
    hours = date.getHours(),
    minute = date.getMinutes(),
    sec = date.getSeconds(),
    day = date.getDate(),
    month = date.getMonth() + Number(1),
    year = date.getFullYear(),

    console.log(`${hours}:${minute}:${sec} ${getZero(day)}.${getZero(month)}.${year}`);

function getZero(number) {

    if (number >= 0 && number < 10) {
        return '0' + number;
    } else {
        return number;
    }
};


// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет
// строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

console.log('----Task 7----');

str = 'aa aba abba abbba abca abea';

console.log(str.match(/ab+a/g));


// 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>) и упрощенной проверки ввода простого номера с кодом и без него. Функция должна возвращать true или false.

console.log('----Task 8----');

let phoneNumber = '+375-29-1234567'

function strictCheck(phone) {
    RegExp = /^\+(\d{1,3})-(\d{1,3})-(\d{7,8})$/g;

    if (RegExp.test(phone)) {
        console.log(true);
        return true
    } else {
        console.log(false);
        return false
    }
}
strictCheck(phoneNumber);


// 9. Напишите ф-цию, которая из полного адреса с параметрами и без, например:https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/),параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3).В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.

console.log('----Task 9----');

let url = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

function getUrl(url) {

    let domenName = url.match(/http[s]?:\/\/(((\w+)*(\.+)?\w+\-*\w*)*)/g),
        withoutParameters = url.match(/(\/(\/?(\w)-*)+\/)/g),
        parameters = url.match(/(\?)(\w\=*\_*\&*)*/g),
        hash = url.match(/#(\w*.)*/g);

    return [domenName, withoutParameters, parameters, hash]

}
console.log(getUrl(url));


// 10. Напишите ф-цию удаления повторов из строки, в т.ч. повторных пробелов (2х и более) и спецсимволов, например: «hello hello hello hello world» -> «hello world». Функция должна  возвращать обработанную строку.

console.log('----Task 10----');


str = 'hello  %% hello     && hello ??    ++ hello -- !! world 1   hello world 1   ) ';

function removeDuplicate(str) {

    str = str.replace(/\s+\W+/g, ' ');
    str = str.replace(/^\s/, '');
    str = str.replace(/\s$/, '');

    str = str.split(' ');

    let result = [];
    
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) == -1) result.push(str[i]);
    }

    result = result.join(" ");

    return result
}

console.log(removeDuplicate(str));