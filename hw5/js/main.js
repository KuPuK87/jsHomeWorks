// Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и
// выводящую введённые данные в следующем виде:

// ******************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017*
// * Иванов Иван Иванович       *
// ******************************

console.log('---Task 1---');

function task1() {
    let name = prompt(`Ваше Имя`),
        surname = prompt(`Ваша Фамилия`),
        patronymic = prompt(`Ваше Отчество`),
        group = prompt(`Номер вашей группы`),
        line1 = `* Домашняя работа: «Функции»`,
        line2 = `* Выполнил: студент гр. ${group} `,
        line3 = `* ${surname} ${name} ${patronymic} `,
        len = 30, // минимальная длинна рамки
        lenStr1 = 26 + group.length, // длинна второй строки в рамке
        lenStr2 = name.length + surname.length + patronymic.length + 6; // длинна третьей строки

    // определяем длинну рамки
    if (lenStr1 >= lenStr2 && lenStr1 > 30) {
        len = lenStr1;
    } else if (lenStr2 >= 30) {
        len = lenStr2;
    }

    for (let counter = 0; counter <= len; counter++) {
        i = counter;
    }
    console.log("\n\t\t\t" + ("*".repeat(i)));

    // Домашняя работа: «Функции» 
    i = 0;
    for (let counter = 0; counter <= len - 29; counter++) {
        i = counter;
    }
    console.log("\n\t\t\t" + line1 + (" ".repeat(i)) + "*");

    // Выполнил: студент гр. 
    i = 0;
    for (let counter = 0; counter <= (len - lenStr1); counter++) {
        i = counter;
    }
    console.log("\n\t\t\t" + line2 + (" ".repeat(i)) + "*");

    // ФИО
    i = 0;
    for (let counter = 0; counter <= (len - lenStr2); counter++) {
        i = counter;
    }
    console.log("\n\t\t\t" + line3 + (" ".repeat(i)) + "*");

    i = 0;
    for (let counter = 0; counter <= len; counter++) {
        i = counter;
    }
    console.log("\n\t\t\t" + ("*".repeat(i)));
}

task1();


// 2. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек:
//         *
//        ***
//       *****
//      *******
//     *********
// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-цию, но
// которая выведет перевернутый треугольник.

console.log('---Task 2---');

height = prompt(`Введите количество рядов`) || undefined;

function printTriangle(h) {

    let nSpace,
        nSymbol,
        space;
    lastRow = 2 * h - 1;

    for (i = 1; i <= h; i++) {
        nSymbol = (2 * i) - 1;
        nSpace = (lastRow - (nSymbol)) / 2;
        space = ' '.repeat(nSpace);
        console.log(space + '*'.repeat(nSymbol) + space);
    }
}

printTriangle(height);

function printTriangle2(h, isReverse) {
    if (isReverse) {

        console.log('-'.repeat(lastRow));

        let nSpace,
            nSymbol,
            space;

        for (let i = h; i > 0; i--) {
            nSymbol = (2 * i) - 1;
            nSpace = (lastRow - (nSymbol)) / 2;
            space = ' '.repeat(nSpace);
            console.log(space + '*'.repeat(nSymbol) + space);
        }
    }
}

if (confirm('Вывести перевёрнутый треугольник?')) printTriangle2(height, true);

printTriangle2(height);


// 3. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты.
// Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной
// «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть
// первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или
// «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя
// может содержать только буквы, цифры, но не быть первыми и единственными в
// имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не
// может быть длиной менее 2 и более 11 символов.

console.log('---Task 3---');

let mail = `kupuk.87@gmail.com`;

function checkMail(mail) {
    let count = 0,
        arrMail = [];

    // Проверяем на количество @ в имени почты, а так же на вводимые символы

    for (let i = 0; i < mail.length; i++) {

        arrMail.push(mail[i]);

        if (mail[i] == "@") {
            count++;
        }

        if (count > 1) {

            return "Адрес электронной почты был введен неправильно."
        }

        if (!((mail[i] >= 'a' && mail[i] <= 'z') || (mail[i] >= 'A' && mail[i] <= 'Z') || mail[i] == '.' || mail[i] == '@' || mail[i] == '-' || mail[i] == '_' || mail[i] >= 0 && mail[i] <= 9)) {

            return "Адрес электронной почты был введен неправильно."
        }
    }

    // Проверяем на первый и последний символ

    if (mail[0] == '.' || mail[0] == '@' || mail[0] == '-' || mail[0] == '_' || mail[0] >= 0 && mail[0] <= 9) {

        return "Адрес электронной почты был введен неправильно."
    }

    if (mail[mail.length - 1] == '.' || mail[mail.length - 1] == '@' || mail[mail.length - 1] == '-' || mail[mail.length - 1] == '_' || mail[mail.length - 1] >= 0 && mail[mail.length - 1] <= 9) {

        return "Адрес электронной почты был введен неправильно."
    }

    // Проверяем на соседние символы

    let dog = arrMail.indexOf("@"),
        dot = arrMail.indexOf("."),
        hyphen = arrMail.indexOf("-"),
        underline = arrMail.indexOf("_");

    if ((arrMail[dog - 1] == '.') || (arrMail[dog + 1] == '.') || (arrMail[dog - 1] == '-') || (arrMail[dog + 1] == '-') || (arrMail[dog - 1] == '_') || (arrMail[dog + 1] == '_') || (arrMail[dog - 1] == '@') || (arrMail[dog + 1] == '@')) {

        return "Адрес электронной почты был введен неправильно."
    }

    if ((arrMail[dot - 1] == '.') || (arrMail[dot + 1] == '.') || (arrMail[dot - 1] == '-') || (arrMail[dot + 1] == '-') || (arrMail[dot - 1] == '_') || (arrMail[dot + 1] == '_') || (arrMail[dot - 1] == '@') || (arrMail[dot + 1] == '@')) {

        return "Адрес электронной почты был введен неправильно."
    }

    if ((arrMail[hyphen - 1] == '.') || (arrMail[hyphen + 1] == '.') || (arrMail[hyphen - 1] == '-') || (arrMail[hyphen + 1] == '-') || (arrMail[hyphen - 1] == '_') || (arrMail[hyphen + 1] == '_') || (arrMail[hyphen - 1] == '@') || (arrMail[hyphen + 1] == '@')) {

        return "Адрес электронной почты был введен неправильно."
    }

    if ((arrMail[underline - 1] == '.') || (arrMail[underline + 1] == '.') || (arrMail[underline - 1] == '-') || (arrMail[underline + 1] == '-') || (arrMail[underline - 1] == '_') || (arrMail[underline + 1] == '_') || (arrMail[underline - 1] == '@') || (arrMail[underline + 1] == '@')) {

        return "Адрес электронной почты был введен неправильно."
    }

    // Проверяем имя почты на длину, последний символ и повторяемость в имени

    let mailName = arrMail.slice(0, arrMail.indexOf('@'));

    if (mailName.length <= 2) {

        return "Адрес электронной почты был введен неправильно."
    }

    let check = true;

    for (let i = 0; i < mailName.length; i++) {
        if (mailName[0] != mailName[i]) {
            check = false;
            break;
        }
    }

    if (check) return "Адрес электронной почты был введен неправильно.";

    // проверяем доменное имя на длину а так же разрешены буквы\цифры\дефис

    let domenName = arrMail.slice(arrMail.indexOf('@') + 1, arrMail.lastIndexOf('.'));

    if (domenName.length <= 2 || domenName.length > 11) {

        return "Адрес электронной почты был введен неправильно."
    }

    for (let i = 0; i < domenName.length; i++) {

        if (!((domenName[i] >= 'a' && domenName[i] <= 'z') || (domenName[i] >= 'A' && domenName[i] <= 'Z') || domenName[i] >= 0 && domenName[i] <= 9 || domenName[i] == '-')) {

            return "Адрес электронной почты был введен неправильно."
        }
    }

    // Проверяем сам домен на длину и разрешены только буквы

    let domen = arrMail.slice(arrMail.lastIndexOf('.') + 1, arrMail.length);

    if (domen.length <= 2 || domen.length > 11) {

        return "Адрес электронной почты был введен неправильно."
    }

    for (let i = 0; i < domen.length; i++) {

        if (!((domen[i] >= 'a' && domen[i] <= 'z') || (domen[i] >= 'A' && domen[i] <= 'Z'))) {

            return "Адрес электронной почты был введен неправильно."
        }
    }

    return 'Адрес почты - верен!'

}

console.log(checkMail(mail));