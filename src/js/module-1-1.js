// 1. Створіть змінну з ім'ям `name` і присвойте їй ваше ім'я. Виведіть це ім'я в
//    консоль.

// const name = 'Ihor';

// console.log(name);

// 1. Створіть змінну `age` і присвойте їй ваш вік. Виведіть в консоль рядок, що
//    містить ваш вік у такому форматі: "Мені {вік} років".

// const age = 44;

// console.log(`My ${age} is years`);

// 1. Створіть змінні `x` і `y` і присвойте їм довільні числа. Виведіть в консоль
//    результати додавання, віднімання, множення та ділення цих чисел.

// const x = 1;
// const y = 2;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x ** y);
// console.log(x % y);

// 1. Створіть змінну `city` і присвойте їй назву вашого міста. Створіть рядок,
//    який містить "Я живу в місті {назва міста}", і виведіть його в консоль.

// const city = 'Kyiv';
// console.log(`I lived in ${city}`);

// 1. Створіть рядок з вашою електронною поштою. Використайте методи рядка, щоб
//    витягнути ваше ім'я та доменну частину. Виведіть обидва ці значення в
//    консоль.

// const email = 'ikharatin44@gmail.com';

// console.log(email.slice(0, 11));
// console.log(email.slice(12));
// console.log(email.slice(-9, -4));

// 1. Створіть змінну `price` і присвойте їй число. Створіть рядок, що містить ціну
//    з символом гривні, наприклад: "Ціна: 500 грн".

// let price = 999;
// price = price + 10;
// price = price * 2;
// price /= 4;
// price *= 3;
// price **= 3;
// price += 2;
// price -= 3;

// console.log(`Price is ${price} UAH`);

//!-----------------------------------

// Створи дві змінні firstName і lastName.
// Присвой їм своє ім'я та прізвище.
// Обєднай ці два рядки в один, з пробілом між ними. Запиши результат в змінну fullName.
// Виведи fullName в консоль.
// ```

// const firstName = 'Ihor';
// const lastName = 'kharatin';
// const fullName = `${firstName} - ${lastName}`;
// console.log(fullName);

// ---

// ```
// Створи дві змінні a і b, присвой їм якісь цілі числа.
// Виконай над ними додавання, віднімання, множення і ділення.
// Запиши результати в змінні sum, difference, product, quotient.
// Виведи всі ці результати в консоль.
// ```
// const a = 10;
// const b = 20;
// const sum = a + b;
// const difference = a - b;
// const multiplate = a * b;
// const divide = a / b;

// console.log(sum, difference, multiplate, divide);

// console.log(`${a} + ${b} = ${sum}`);
// console.log(`${a} - ${b} = ${difference}`);
// console.log(`${a} * ${b} = ${multiplate}`);
// console.log(`${a} / ${b} = ${divide}`);

// ```
// Створи змінну radius і присвой їй деяке значення (наприклад, 5).
// Використай формулу площі кола (π * r²) для обчислення площі кола з радіусом, який було встановлено.
// Використовуй значення π = 3.14. Запиши результат у змінну area.
// Виведи area в консоль.
// ```

// const radius = 5;
// const area = radius ** 2 * Math.PI;
// console.log(area);

// ---

//! ------------Homework ------------------------------
// ```
// Створи змінну someString і присвой їй будь-який рядок.
// Обчисли довжину цього рядка, використовуючи властивість .length.
// Виведи довжину рядка в консоль.
// ```

const somestring = 'string';
console.log(somestring.length);

// ---

// ```
// Створи змінну someString і присвой їй будь-який рядок.
// Створи змінну firstLetter і присвой їй першу літеру рядка someString.
// Створи змінну lastLetter і присвой їй останню літеру рядка someString.
// ```

const someString = 'This is string';
const firstLetter = someString[0];
const lastLetter = someString[-1]; //!!!!!!!!!
console.log(firstLetter);
console.log(lastLetter);

// ---

// ```
// Створи дві змінних str1 та str2.
// Отримай з кожної змінної останню літеру
// Створи третю змінну де обєднай попередні літери
// Приклад: для рядків "HELLO" та "WORLD" результатом буде рядок "OD"
// ```

const srt1 = 'HELLO'; //!!!!!!!!!!!!!!!!!!!!!

// ---

// ```
// Створи змінну userValue та запиши до неї будь-яке число.

// Створи нову змінну до якої потрібно записати результат математичної операції а саме:
// userValue помножити на число 5 у степені (кількість цифр у змінній userValue).

// Приклади:
// для числа 1 = 1 * 5^1 = 5;
// для числа 2 = 2 * 5^1 = 10;
// для числа 12 = 12 * 5^2 = 300;
// для числа 512 = 512 * 5^3 = 64000;

const userValue = 2; //!!!!!!!!!!!!!!!!!!!!

// ```

// ---

// ```
// Виведіть на екран загальну кількість яблок і винограду. Різницю яблока і винограду теж виведіть у консоль.

// const apples = 47;
// const grapes = 135;
// const total = ;
// console.log(total)
// const diff = ;
// console.log(diff)
