/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было пeредано не число.
 */

// РЕШЕНИЕ
function f(...params) {
    let filteredParams = params.filter(number => typeof(number) === 'number')
    if (filteredParams.length !== params.length)
        throw new TypeError()
    let summ = 0
    params.forEach(function (numb){
        summ = summ + numb
    });
    return summ
}

console.log(f(1, 1, 1, 2, 3, 1, 1, 1)); // 9