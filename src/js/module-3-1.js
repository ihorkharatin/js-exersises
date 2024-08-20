// # Масиви

// ## Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// function task1(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
//   }
// }
// task1([10, 50, 30, 'hello']);

// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
//    консоль.

// function task2(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (i % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
// }

// task2([0, 1, 2, 3, 4, 5, 6]);

// 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
//    консоль.

// function task3(array) {
//   for (i = 0; i < array.length; i += 1) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//     }
//   }
// }

// task3([0, 6, 8, 9, 2, 4, 65]);

// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
//    чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function task4(arr, max) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > max) {
//       console.log(arr[i]);
//     }
//   }
// }
// task4([1, 58, 69, 72, 2, 36], 16);

// function task4(arr, max) {
//   const arr1 = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > max) {
//       arr1.push(arr[i]);
//     }
//   }
//   console.log(arr1);
// }
// task4([2, 45, 36, 86, 96, 4], 30);

// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function task5(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(task5([2, 5, 8, 9, 10]));

// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.
// function task6(array, elem) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === elem) {
//       sum += 1;
//     }
//   }
//   return sum;
// }
// console.log(task6([2, 6, 4, 4, 3, 4], 4));

// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(відємні числа) з масиву та повернути новий масив.

// function task7(array) {
//   let array1 = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > 0) {
//       array1.push(array[i]);
//     }
//   }
//   return array1;
// }

// console.log(task7([-1, 5, -5, 6, -9]));

// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
//    нижнього регістру, в іншому випадку привести до верхнього регістру.

// function task8(array) {
//   let array1 = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length < 6) {
//       array1.push(array[i].toLowerCase());
//     } else {
//       array1.push(array[i].toUpperCase());
//     }
//   }
//   return array1;
// }

// console.log(task8(['hello world', 'hello', 'worldwide']));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише непарні числа.

// function task9(array) {
//   let array1 = [];
//   for (i = 0; i < array.length; i += 1) {
//     if (array[i] % 2 !== 0) {
//       array1.push(array[i]);
//     }
//   }
//   return array1;
// }
// console.log(task9([1, 3, 8, 6, 7]));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
//    число помножене на індекс, за яким воно знаходиться в масиві.
// function task10(array) {
//   let array1 = [];
//   for (i = 0; i < array.length; i += 1) {
//     array1.push(array[i] * i);
//   }
//   return array1;
// }
// console.log(task10([4, 4, 4, 4]));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише числа, які діляться на 3.

// function task11(array) {
//   let array1 = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] % 3 === 0) {
//       array1.push(array[i]);
//     }
//   }
//   return array1;
// }
// console.log(task11([1, 2, 3, 4, 5, 6, 7, 8, 9])); //!!------------DONE------------

// ## Середні задачі

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// function task12(arr1, arr2) {
//   let arr3 = [];

//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr2.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3;
// }
// console.log(task12([1, 2, 4, 6], [0, 2, 4, 8]));

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function task13(arr1, arr2) {
//   let arr3 = [];
//   for (let i = 0; i < arr1.length; i += 1) {
//     if (!arr2.includes(arr1[i])) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3;
// }

// console.log(task13([0, 1, 2, 3, 4], [2, 4, 6, 8]));

// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.
// function task14(array) {
//   let min = Infinity;
//   for (i = 0; i < array.length; i += 1) {
//     if (array[i] <= min) {
//       min = array[i];
//     }
//   }
//   return min;
// }
// console.log(task14([258, 59, 263, 54]));

// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.

// function task15(array) {
//   let max = -Infinity;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] >= max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// console.log(task15([1, 5, 56, 489]));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву.

// function task16(array) {
//   let sum = 0;
//   let arr1 = [];
//   for (let i = 0; i < array.length; i += 1) {
//     sum += array[i];
//   }
//   let middleSum = sum / array.length;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > middleSum) {
//       arr1.push(array[i]);
//     }
//   }
//   return arr1;
// }
// console.log(task16([1, 2, 3, 4, 5]));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.
// function task17(array) {
//   let array1 = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] > i) {
//       array1.push(array[i]);
//     }
//   }
//   return array1;
// }
// console.log(task17([7, 6, 4, 3, 9, 5]));

// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
//    елемент та видалити його з масиву.
// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону але лише ті у яких не має
//    цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
//    у собі.
// function task18(start, end) {
//   let array = [];
//   for (let i = start; i < end; i += 1) {
//     if (!i.toString().includes(5)) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(task18(51, 256));

// ## Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.
// function task19(array) {
//   let array1 = [];
//   let sum = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     sum += array[i];
//     array1.push(sum);
//   }
//   return array1;
// }
// console.log(task19([1, 2, 3, 4, 5]));

// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.
// 1. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
//    дублювання елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є середньоарифметичним всіх сусідніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
//    відсортовані в порядку збільшення або зменшення.
// 1. Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною
//    елементів.

// ## Codewars

// - [Kata #1](https://www.codewars.com/kata/57a083a57cb1f31db7000028)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)
// - [Kata #1](https://www.codewars.com/kata/57f222ce69e09c3630000212)
// - [Kata #1](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)
