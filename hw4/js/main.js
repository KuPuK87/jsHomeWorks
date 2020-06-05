// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

console.log('---Task 1---');
document.write('</br><b>---Task 1---</b></br>');

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    document.write(arr[i] + ', ');
}


// 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.

console.log('---Task 2---');
document.write('</br><b>---Task 2---</b></br>');

let arrNums = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arrNums.length; i++) {

    if ((arrNums[i] < 0) && (arrNums[i] > -10) && (arrNums[i] < -3)) {
        console.log(arrNums[i]);
        document.write(arrNums[i] + ', ');
    }
}


// 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.

console.log('---Task 3---');
document.write('</br><b>---Task 3---</b></br>');

let arrNew = [],
    result = 0;

for (let i = 23; i <= 57; i++) {
    arrNew.push(i);
}

console.log(arrNew);
document.write(`Числа массива через for = ${arrNew}</br>`);

arrNew = [];
let i = 23;

while (i <= 57) {
    arrNew.push(i);
    i++;
}

console.log(arrNew);
document.write(`Числа массива через while = ${arrNew}</br>`);


for (let i = 0; i < arrNew.length; i++) {
    result += arrNew[i];
}

console.log(`Сумма элементов массива =`, result);
document.write(`Сумма элементов массива = ${result}</br>`);


// 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

console.log('---Task 4---');
document.write('</br><b>---Task 4---</b></br>');

let arrStr = ['10', '20', '30', '50', '235', '3000'],
    arrStr2 = [];

for (let i = 0; i < arrStr.length; i++) {

    if (arrStr[i].charAt(0) == '1' || arrStr[i].charAt(0) == '2' || arrStr[i].charAt(0) == '5') {
        arrStr2.push(arrStr[i]);
    }
}

console.log(arrStr2);
document.write(`Числа из массива, которые начинаются на цифру 1, 2 или 5 = ${arrStr2}</br>`);


// 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

console.log('---Task 5---');
document.write('</br><b>---Task 5---</b></br>');

let arrDay = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arrDay.length; i++) {

    if (arrDay[i] == 'СБ' || arrDay[i] == 'ВС') {
        document.write(`<b>${arrDay[i]}</b> `);
    } else {
        document.write(`${arrDay[i]} `);
    }
    console.log(arrDay[i]);
}


// 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.

console.log('---Task 6---');
document.write('</br><b>---Task 6---</b></br>');

let arrRandom = ['Домашнее', 'задание', 'по', 'JS', 4, ':'];

arrRandom[arrRandom.length] = 'Задание 6';

let lastArrRandom = arrRandom[arrRandom.length - 1]

console.log(lastArrRandom);
document.write(`Последний элемент массива = ${lastArrRandom} </br>`);


// 7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.

console.log('---Task 7---');
document.write('</br><b>---Task 7---</b></br>');

let arrUser = [];

for (i = 0;; i++) {

    arrUser[i] = prompt("Введите числовое значение, пустое поле остановит ввод");

    if (arrUser[i] == ' ' || arrUser[i] == '' || arrUser[i] == null) {
        arrUser.pop(); //Удаляем пустое значение занесенное в массив на котором сработал break;
        break;
    }

    if ((arrUser[i][0] >= 'a' && arrUser[i][0] <= 'z') || (arrUser[i][0] >= 'а' && arrUser[i][0] <= 'я') || (arrUser[i][0] >= 'A' && arrUser[i][0] <= 'Z') || (arrUser[i][0] >= 'А' && arrUser[i][0] <= 'Я')) {
        alert('Это не цифра!');
        arrUser.pop();

    }
}

console.log(arrUser);
document.write(`Массив введенных чисел = ${arrUser} </br>`);

arrUser.sort(function (a, b) {
    return a - b;
});

console.log(arrUser);
document.write(`Сортированный массив чисел = ${arrUser} </br>`);


// 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.

console.log('---Task 8---');
document.write('</br><b>---Task 8---</b></br>');

// Перевернут через reverse

let arrReverse = [12, false, 'Текст', 4, 2, -5, 0];
document.write(`<b>Массив = ${arrReverse} </b></br>`)

arrReverse = arrReverse.reverse();

console.log(arrReverse);
document.write(`Перевернут через reverse = ${arrReverse} </br>`)

// Перевернут через while

arrReverse = [12, false, 'Текст', 4, 2, -5, 0];
newArrReverse = [];
i = arrReverse.length;

while (i > 0) {

    i--;
    newArrReverse.push(arrReverse[i]);
}

console.log(newArrReverse);
document.write(`Перевернут через while = ${newArrReverse} </br>`)


// 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

console.log('---Task 9---');
document.write('</br><b>---Task 9---</b></br>');

let arrNull = [5, 9, 21, , , 9, 78, , , , 6],
    count = 0;

for (let i = 0; i < arrNull.length; i++) {

    if (arrNull[i] == undefined) {
            count++;
        }
    }

    console.log(count);
    document.write(`Количество нулевых (пустых) элементов в целочисленном массиве = ${count} </br>`)

    // 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].

    console.log('---Task 10---');
    document.write('</br><b>---Task 10---</b></br>');