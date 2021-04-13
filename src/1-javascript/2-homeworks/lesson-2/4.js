/**
 * Задача 1.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.filter использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода filter (thisArg) имплементировать не нужно.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];
// const array = 6;
// Решение

function filter(array, func){
    if (typeof func !== 'function' || !Array.isArray(array)) {
        throw new TypeError();
    }
    let res = [];
    let thisArg = array.length >= 2 ? array[1] : void 0;
    for (let i = 0; i < array.length; i++){
        let element = array[i];
        if (func.call(thisArg, element, i, array)){
            res.push(element);
        }
    }
    return res;
}

const filteredArray = filter(array, (element, index, arrayRef) => {
    // console.log(element, index, arrayRef);

    return element === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']