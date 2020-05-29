// 1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
// prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
// Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
// городе %Город% и работаю в компании %Компания%. Мои контактные данные:
// %Телефон%, %Почта%.».

console.log('---Task 1---');
document.write('<b>---Task 1---</b><br>');

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Ваш город проживания'),
    phone = prompt('Ваш номер телефона'),
    email = prompt('Ваш email адрес'),
    company = prompt('Ваша организация');

console.log('Меня зовут ' + name + '. ' + 'Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. ' + 'Мои контактные данные: ' +
    phone + ', ' + email + '.');
document.write('Меня зовут ' + name + '. ' + 'Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. ' + 'Мои контактные данные: ' + phone + ', ' + email + '.' + '<br>');


// 2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.
// Выведите на экран «%Имя% родился в %Год% году.».

console.log('---Task 2---');
document.write('<b>---Task 2---</b><br>');

let bornYear = 2020 - age;

console.log(name + ' родился в ' + bornYear);
document.write(name + ' родился в ' + bornYear + '<br>');

// 3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
// вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

console.log('---Task 3---');
document.write('<b>---Task 3---</b><br>');

let str = '123231';
document.write('str = ' + str + ', сумма первых 3х чисел равна сумме вторых 3х чисел:<br>');

let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

if (sum1 == sum2) {
    console.log('да');
    document.write('<i>да</i><br>');
} else {
    console.log('нет');
    document.write('нет <br>');
}

// 4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log('---Task 4---');
document.write('<b>---Task 4---</b><br>');

let a = 1;
document.write('a = 1 , это больше чем 0? <br>');

if (a > 0) {
    console.log('Верно');
    document.write('<i>Верно</i><br>');
} else {
    console.log('Неверно')
    document.write('<i>Неверно</i><br>');
}

a = 0;
document.write('a = 0 , это больше чем 0? <br>');

if (a > 0) {
    console.log('Верно');
    document.write('<i>Верно</i><br>');
} else {
    console.log('Неверно')
    document.write('<i>Неверно</i><br>');
}

a = -1;
document.write('a = -1 , это больше чем 0? <br>');

if (a > 0) {
    console.log('Верно');
    document.write('<i>Верно</i><br>');
} else {
    console.log('Неверно')
    document.write('<i>Неверно</i><br>');
}

// 5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
// частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
// квадрат.

console.log('---Task 5---');
document.write('<b>---Task 5---</b><br>');

a = 10;
let b = 2,
    summ = a + b,
    minus = a - b,
    del = a / b,
    umn = a * b,
    summ2 = summ + minus + del + umn;

if (summ2 > 1) console.log(summ2, summ2 ** 2);
if (summ2 > 1) document.write(summ2 + ', ', summ2 ** 2 + '<br>');

// 6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.

console.log('---Task 6---');
document.write('<b>---Task 6---</b><br>');
document.write('Если a = ' + a + ' - больше 2 и меньше 11 или b = ' + b + ' - больше или равно 6 и меньше 14, то выражение: <br>');

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно');
    document.write('<i>Верно</i><br>');
} else {
    console.log('Неверно');
    document.write('<i>Неверно</i><br>');
}

// 7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
// это число (в первую, вторую, третью или четвертую).

console.log('---Task 7---');
document.write('<b>---Task 7---</b></br>');

let n = 47;
document.write('n = 47<br>');

if (n <= 15) {
    console.log('Первая четверть часа');
    document.write('<i>Первая четверть часа</i><br>');
} else if (n <= 30) {
    console.log('Вторая четверть часа');
    document.write('<i>Вторая четверть часа</i><br>');
} else if (n <= 45) {
    console.log('Третья четверть часа');
    document.write('<i>Третья четверть часа</i><br>');
} else {
    console.log('Четвертая четверть часа');
    document.write('<i>Четвертая четверть часа</i><br>');
}

// 8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
// месяца попадает это число (в первую, вторую или третью).

console.log('---Task 8---');
document.write('<b>---Task 8---</b><br>');

let day = 25;
document.write('day = 25<br>');

if (day < 11) {
    console.log('Первая декада');
    document.write('<i>Первая декада</i><br>');
} else if (n < 21) {
    console.log('Вторая декада');
    document.write('<i>Вторая декада</i><br>');
} else {
    console.log('Третья декада');
    document.write('<i>Третья декада</i><br>');
}

// 9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
// (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
// вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
// недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
// соответственно.

console.log('---Task 9---');
document.write('<b>---Task 9---</b><br>');


let days = 5,
    year = days / 365,
    month = days / 31,
    week = days / 7,
    hour = days * 24,
    minute = days * 24 * 60,
    seconds = days * 24 * 60 * 60;

document.write('Количество дней = ' + days + ' и это:<br>');

if (year < 1) console.log('Меньше года');
if (year < 1) document.write('<i>Меньше года</i><br>');
if (month < 1) console.log('Меньше месяца');
if (month < 1) document.write('<i>Меньше месяца</i><br>');
if (week < 1) console.log('Меньше недели');
if (week < 1) document.write('<i>Меньше недели</i><br>');


// 10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8
//     задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
//     т.д.). Скрипт определение поры года написать через switch.

console.log('---Task 10---');
document.write('<b>---Task 10---</b><br>');

day = prompt('Введите день года, от 1 до 365')
// day = 188;
month = day / 30.4167;
let monthNumber;

document.write('День года = ' + day + ', и это:<br>');
console.log(month)

if (month > 0 && month <= 1) {
    monthNumber = 1;
} else if (month > 1 && month <= 2) {
    monthNumber = 2;
} else if (month > 2 && month <= 3) {
    monthNumber = 3;
} else if (month > 3 && month <= 4) {
    monthNumber = 4;
} else if (month > 4 && month <= 5) {
    monthNumber = 5;
} else if (month > 5 && month <= 6) {
    monthNumber = 6;
} else if (month > 6 && month <= 7) {
    monthNumber = 7;
} else if (month > 7 && month <= 8) {
    monthNumber = 8;
} else if (month > 8 && month <= 9) {
    monthNumber = 9;
} else if (month > 9 && month <= 10) {
    monthNumber = 10;
} else if (month > 10 && month <= 11) {
    monthNumber = 11;
} else if (month > 11 && month <= 12) {
    monthNumber = 12;
} else {
    monthNumber = 13;
    alert('В году нет сколько дней!');
}

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        document.write('<i>Зима</i><br>');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        document.write('<i>Весна</i><br>');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        document.write('<i>Лето</i><br>');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        document.write('<i>Осень</i><br>');
        break;
    case 13:
        document.write('<i>Поры года кончились</i><br>');
}