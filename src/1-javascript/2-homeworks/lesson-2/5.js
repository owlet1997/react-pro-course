/**
 * Задача 5.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
function createArray(x, number) {
    // console.log(typeof x);
    if ((typeof x === "number" || typeof x === "string" || typeof x === "object" || Array.isArray(x))
        && typeof number === "number"){
        let mas = [];
        for (let i = 0; i < number; i++){
            mas.push(x);
        }
        return mas;
    } else throw new TypeError();
}

const result = createArray("true", "5");

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;