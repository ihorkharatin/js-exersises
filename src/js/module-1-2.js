// # Числа та порівняння

// ## Задачі

// ```
// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task1(str1, str2) {
//   const firstStr1 = str1[0];
//   const lastStr2 = str2[str2.length - 1];
//   if (firstStr1 === lastStr2) return true;
//   else return false;
// }
// console.log(task1('hello', 'worldh'));
// console.log(task1('today', 'bot'));
// console.log(task1('saturnday', 'sunday'));

// ```
// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task2 (str1, str2) {
//     const firstStr1 = str1[0];
//     const firstStr2 = str2[0];
//     if (firstStr1 === firstStr2) {
//         return true;
//     } else {
//         return false;
//     }

// }
// console.log(task2('hello', 'hell'));
// console.log(task2('hello', 'world'));

// ```
// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task3(str1, str2) {
//   const lengthStr1 = str1.length;
//   const lengthStr2 = str2.length;
//   return lengthStr1 === lengthStr2;
// }
// console.log(task3('hello', 'world'));
// console.log(task3('hello', 'hell'));

// ```
// Задача-4
// Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task4(num) {
//   const len = num.toString().length;
//   return len % 2 === 0;
// }

//!-------------------------HOMEWORK---------------------

// ```
// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task5(num1, num2) {

//   if (num1 > num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task5(3, 2));
// console.log(task5(2, 3));

// ```
// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task6(num1, num2) {
//   if (num1 % num2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task6(2, 3));
// console.log(task6(4, 2));

// Задача-7
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task7(num) {
//   if (num !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task7(3));
// console.log(task7(2));

// ```
// Задача-8
// Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.

// Підказка: допоможе toLowerCase();
// ```

// function task8(str) {
//   if (str === str.toLowerCase()) {

//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task8('hello')); //true;
// console.log(task8('Hello')); //false

// ```
// Задача-9
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task9(str1, str2) {
//   if (str1.length > str2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task9('9', '8'));  // false
// console.log(task9('hello', 'h')); // true

// ```
// Задача-12
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task12(str) {
//   if (str.includes(' ')) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(task12('hello world')); // true;
// console.log(task12('hello')); //false;

// ```
// Задача-14
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку). В іншому випадку функція повинна повернути булеве значення false.

// Підказка: тут допоможе метод масиву reverse();
// ```
// function task14(str) {
//   const str2 = str.split('').reverse().join('');
//   console.log(str, str2);

//   if (str === str2) {
//     return true;
//   } else return false;
// }

// console.log(task14('alla alla'));
// console.log(task14('allo'));

// ```
// Задача-15
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task15(num1, num2) {
//   if (num1 <= num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task15(2, 2));
// console.log(task15(3, 2));

// ```
// Задача-17
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо перша літера str є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task17(str) {
//   const str1 = str[0];
//   const str2 = 'aeiou';
//   if (str2.includes(str1)) {
//     return true;
//   } else return false;
// }

// console.log(task17('hello'));
// console.log(task17('alla'));

// ```
// Задача-19
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 і num2 рівні. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task19(num1, num2) {
//   if (num1 === num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task19(2, 2));
// console.log(task19(3, 2));

// ```
// Задача-20
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num більше або дорівнює нулю. В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task20(num) {
//   if (num >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task20(20));
// console.log(task20(-1));

// ```
// Задача-21
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо довжина str є парною. В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task21(str) {
//   const str1 = str.length;
//   if (str1 % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task21('hello'));
// console.log(task21('hell'));

// ```
// Задача-22
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на 2, а num2 не ділиться на 2. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task22(num1, num2) {
//   if (num1 % 2 === 0 && num2 % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task22(2, 3));
// console.log(task22(3, 2));

// ```
// Задача-23
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num більше 100, але менше 200. В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task23(num) {
//   if (num > 100 && num < 200) {
//     return true;
//   }
//   return false;
// }

// console.log(task23(50));
// console.log(task23(150));

// ```
// Задача-24
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить лише маленькі літери. В іншому випадку функція повинна повернути булеве значення false.

// Підказка: допоможе toLowerCase();
// ```

// function task24(str) {
//   const str1 = str.toLowerCase();
//   if (str.includes(str1)) {
//     return true;
//   }
//   return false;
// }

// console.log(task24('Hello'));
// console.log(task24('hello'));

// ```
// Задача-25
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо str1 є частиною str2. В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task25(str1, str2) {
//   if (str2.includes(str1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task25('hello', 'world'));
// console.log(task25('hello', 'hello world'));

// ```
// Задача-26
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є негативним числом. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task26(num) {
//   if (num < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task26(2));
// console.log(task26(-2));

// ```
// Задача-27
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо різниця між num1 та num2 більше 50. В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task27(num1, num2) {
//   if (num1 - num2 > 50) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task27(70, 50));
// console.log(task27(700, 500));

// ```
// Задача-28
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є нуль. В іншому випадку функція повинна повернути булеве значення false.
// ```

// function task28(num) {
//   if (num === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task28(0));
// console.log(task28(1));

// ```
// Задача-29
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо остання літера str1 є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.
// ```
// function task29(str1, str2) {
//   const str3 = 'aeiou';
//   const str4 = str1.slice(-1);

//   if (str3.includes(str4)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task29('hell'));
// console.log(task29('hello')); //!!!!!!!!!!!!!!!!!!!!!!!!!

// ```
// Задача-30
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є кратним 10. В іншому випадку функція повинна повернути булеве значення false.

// function task30(num) {
//   if (num % 10 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task30(7));
// console.log(task30(10)); //!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ```

// ## Task 1

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// ```js
// const value = 27.5;
// ```

// ---

// ## Task 2

// Яким буде результат виразів?

// ```js
// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log('2' > '12'); // true

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6); // false

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); //true

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true

// console.log('Papaya' === 'papaya'); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false
// ```

// ---

// ## Task 3

// Напиши скрипт який переведе значення `totalMinutes` (кількість хвилин) рядок у
// форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// ```

// ---

// ## Task 4

// Отрефактори код так, щоб у змінну `value` присвоювалося значення змінної
// `incomingValue`, якщо воно не дорівнює `undefined` або `null`. У в іншому
// випадку має надаватися значення `defaultValue`. Перевір роботу скрипта для
// сліпучих значень змінної `incomingValue`: null, undefined, 0, false.
// Використовуй оператор "?" (nullish coalescing operator).

// ```js
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// console.log(value);
// ```

// ---

// ## CodeWars

// 1. [Kata](https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6)
// 1. [Kata](https://www.codewars.com/kata/5748838ce2fab90b86001b1a)
// 1. [Kata](https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a)
// 1. [Kata](https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript)
// 1. [Kata](https://www.codewars.com/kata/5bb0c58f484fcd170700063d)
