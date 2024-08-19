// # Масиви та методи рядкочків

// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// function task1(start, end) {
//   for (let i = start; i <= end; i += 1) {
//     console.log(i);
//   }
// }
// task1(2, 12);

// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// for (let i = 1; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 1. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.
// function task3(min, max) {
//   let sum = 0;
//   for (let i = min; i <= max; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(task3(1, 100));

// function task4(min, max) {
//   let total = 1;
//   for (let i = min; i <= max; i += 1) {
//     total *= i;
//   }
//   return total;
// }
// console.log(task4(1, 10));

// 1. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до
//    10).
// function task5(x) {
//   for (let i = 1; i <= 10; i += 1) {
//     console.log(`${x} * ${i} = ${i * x}`);
//   }
// }
// task5(7);
// task5(8);
// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//    (наприклад, факторіал числа 5: `!5 = 1 * 2 * 3 * 4 * 5`).

// function task6(x) {
//   let sum = 1;
//   for (let i = 1; i <= x; i += 1) {
//     console.log(`${sum} *= ${i}`);
//     sum *= i;
//   }
//   console.log(sum);
// }
// task6(5);

// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"
// const message = `😀 Hi dear! do you like kisses ?? mmmmmmmmmmmmmmm do you want to play slave and mistress? and fulfill my wishes ??? tell me what do you want ?? my mouth wants your kisses! I want to feel in myself long, pleasant and solid as a stone! do you have something for me ?? Tell me how it looks ?? so sweet and big! I love to eat, the thought that you take possession of me drives me crazy. The thought that you take possession of me drives me crazy. your diva A`;

// function task7(str) {
//   let changeMessage = ``;
//   for (let i = 0; i < str.length; i += 1) {
//     changeMessage += str[i];
//     if (str[i] === '!') {
//       break;
//     }
//   }
//   console.log(changeMessage);
// }
// task7(message);

// function task8(str) {
//   let changeMessage = ``;
//   for (let i = 0; i < str.length; i += 1) {
//     const symbol = str[i];
//     const code = symbol.charCodeAt(0);
//     if (code >= 65 && code <= 122) {
//       changeMessage += symbol;
//     }
//   }
//   console.log(changeMessage);
// }
// task8(message);
// console.log('z'.charCodeAt(0));

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.
// const message = 'hello world';
// for (let i = 1; i < message.length; i += 1) {
//   console.log(message[message.length - i]);
// }
// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.

// const message = 'Hello world';
// for (let i = 0; i < message.length; i += 1) {
//   if (message[i] === ' ') {
//     break;
//   }
//   console.log(message[i]);
// }
// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// const message = 'JavaScript';
// for (let i = 0; i < message.length; i += 2) {
//   console.log(message[i]);
// }

// for (let i = 0; i < message.length; i += 1) {
//   if (i % 2 === 0) {
//     console.log(message[i]);
//   }
// }

// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок
// 1. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у
//    верхньому регістрі
// 1. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до
//    рядочка str1 стільки разів скільки вказали у параметрі count.
