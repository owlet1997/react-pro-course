/*
# Задача 1

Создайте функцию `isCustomerVerified` которая умеет проверять объект `customer` на валидность.

Валидным объект `customer` считается только в том случае когда у него установлен флаг `verified: true`.

**Обратите внимание**:

1. Функция `isCustomerVerified` должна возвращать промис;
2. В том случае если объект валидный промис резолвится с текстом `Пользователь верифицирован`;
3. В том случае если объект невалидный промис реджектится с текстом `Пользователь не верифицирован`.
*/

// РЕШЕНИЕ
const isCustomerVerified = user => {
    // console.log(user);
    return new Promise(function (resolve, reject) {
        if (user.verified === true)
            resolve(`Пользователь верифицирован`);
        else reject(`Пользователь не верифицирован`)
    });
};
// РЕШЕНИЕ

const validationForm = document.getElementById('validationForm');

validationForm.onsubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const verified = formData.get('verified');

    const user = {
        name,
        verified: Boolean(verified),
    };

    // getSuccessHTML и getErrorHTML находятся в файле util.js
    isCustomerVerified(user)
        .then(status => getSuccessHTML(status))
        .catch(error => getErrorHTML(error));
};

// Пример использования
// const personFirst = {
//     name: 'Oliver',
//     verified: true
// };

// const personSecond = {
//     name: 'Alex'
// };

// isCustomerVerified(personFirst)
//     .then(status => console.log(status)) // Пользователь верифицирован
//     .catch(error => console.log(error))

// isCustomerVerified(personSecond)
//     .then(status => console.log(status))
//     .catch(error => console.log(error)) // Пользователь не верифицирован
