// # Функції

// 1. Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.
// function task1(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(task1(2, 3));

// 1. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
//    них.
// function task2(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// console.log(task2(2, 3, 4));

// 1. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
//    повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
//    false, якщо ні.
// function task3(number, min, max) {
//   if (number > min && number < max) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(task3(2, 4, 6));

// 1. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.
// function task3(str) {
//   return str[0];
// }
// console.log(task3('helo world'));

// 1. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

// function task4(str) {
//   const x = str.length - 1;
//   return str[x];
// }
// console.log(task4('hello world'));

// 1. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
//    якщо ні.
// function task5(number) {
//     if ( number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.
// function task6(num1, num2) {
//     if (num1 === 0 || num2 === 0) {
//         return null;
//     } else {
//         return num1 * num2;
//     }
// }
// 1. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
//    тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок
//    `"<div>Hello world<div>"`
// function task7 (str) {
//     let str1 = `<div>${str}</div>`;
//     return str1;
// }
// 1. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
//    розділені пробілами).

// function task8(str) {
//   let words = str.split(' ');

//   return words.length;
// }

// 1. Напиши функцію, яка приймає рядок і повертає його довжину помножену на
//    кількість слів в цьому рядку.

// function task9(str1) {
//   const length = str1.length;
//   const amount = task8(str1);
//   return length * amount;
// }
// console.log(task9('hello world in the world'));

// 1. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому
//    (a, e, i, o, u). Використовуйте метод includes та цикл.

// function task10(str) {
//   const vowels = 'aeiou';
//   let sum = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     if (vowels.includes(str[i])) {
//       sum += 1;
//     }
//   }
//   return sum;
// }
// console.log(task10('hello world'));

// 1. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
//    розташовані у зворотному порядку.

// function task11(str) {
//   const array = str.split(' ');
//   const reverseArray = array.reverse();
//   const str1 = reverseArray.join(' ');
//   return str1;
// }

// console.log(task11('hello everybody in the world'));

// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні.

// function task12(...array) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] < 0) {
//       return false;
//     }
//   }
//   return true;
// }
// debugger;
// console.log(task12(12, 45, -63, 2, -56));

// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.
// function task13(...array) {
//     sum = 1;
//     for ( let i = 0; i < array.length; i +=1) {
//         sum *= array[i];
//     }
//     return sum;
// }
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.
// function task14(...array) {
//     let amount = 0;
//     for (let i = 0; i < array.length; i += 1) {
//         if (array[i] % 2 !== 0) {
// amount += 1;
//         }
//     }
//     return amount;
// }
// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим
// 1. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.
// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.


// function task15(min, ...array) {
//     const array1 = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if ( array[i] > min) {
//             array1.push(array[i]);
//         }
//     }
//     return array1;
// }


// function task16(min, max, divisor, ...array) {
//     const array1 = [];
//     for ( let i = 0; i < array.length; i += 1) {
//         if ( array[i] > min && array[i] < max && array[i] % divisor === 0) {
//             array1.push(array[i]);
//         }
//     }
//     return array1;
// }


function task17(minLength, ...str) {
    const str1 = [];
    for (let i = 0; i < str.length; i += 1) {
if ( str[i].length > minLength) {
    str1.push(str[i])
}
    }
    return str1;
}