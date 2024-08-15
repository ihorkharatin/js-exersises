// # Розгалуження та булеві оператори

// ## Задачі

// ```
// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye".
// ```

// function task1(age, balance) {
//   if (age > 18 && balance > 100) {
//     return 'Welcome';
//   } else {
//     return 'Goodbye';
//   }
// }

// console.log(task1(20, 120));
// console.log(task1(17, 50));

// ```
// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого".
// ```

// function task2(amount, price) {
//   const total = amount * price;
//   if (total <= 1000) {
//     return 'We buy these.';
//   } else {
//     return 'It is very expensive';
//   }
// }

// console.log(task2(5, 100));
// console.log(task2(500, 100));

// ```
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
// ```

// function task3(temp) {
//     if (temp < 0 ) {
//         return "it is freezing";
//     } else if (temp < 25) {
//         return "it is normal"
//     } else {
//         return "It is hot"
//     }
// }

// ```
// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".
// ```

// function task4(number, divisor) {
//     if (number % divisor === 0) {
//         return "It is divided"
//     } else {
//         return "It is not divided"
//     }
// }
// ```
// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".
// ```

// function task5(isRaining, hasUmbrella) {
//   if (isRaining && hasUmbrella) {
//     return 'You will not get wet';
//   } else if (isRaining && !hasUmbrella) {
//     return "You will get wet";
//   } else {
//     return "It is not raining"
//   }
// }

// ```
// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".
// ```

// function task6(grade) {
//   if (grade >= 90) {
//     return 'perfect';
//   } else if (grade >= 75) {
//     return 'good';
//   } else if (grade >= 50) {
//     return 'It is not good'
//   } else {
//     return 'it is bad'
//   }
// }
// ```
// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день".
// ```

// function task7(dayOfWeek, isHoliday) {
//   const isWeekEnd = dayOfWeek === 'Saturnday' || dayOfWeek === 'Sunday';
//   if (isWeekEnd || isHoliday) {
//     return 'WeekEnd';
//   } else {
//     return 'Woring day';
//   }
// }

// ```
// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік".
// ```

// function task8(year) {
//   const condition1 = year % 4 === 0;
//   const condition2 = year % 100 !== 0;
//   const condition3 = year % 400 === 0;
//   if ((condition1 && condition2) || condition3) {
//     return "Leap year";
//   } else {
//     return " Normal year"
//   }
// }
// ```
// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".
// ```

// function task9(hasInvitation, isFriend) {
//     if (hasInvitation || isFriend) {
//         return "You are invited"
//     } else {
//         return "Entrance is forbidden"
//     }
// }
// ```
// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".
// ```

// function task10(age) {
//     const isChild = age <= 12;
//     const isTeenager = age > 12 && age <= 18;
//     const isAdult = age > 18 && age <= 60;
//     const isPensioner = age > 60;
//     if (isChild) {
//         return "Child";
//     } else if (isTeenager) {
// return "Teenager";
//     } else if (isAdult) {
//         return "Adult"
//     } else if (isPensioner) {
//         return "Pensioner"
//     }
//  }
// ```
// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".
// ```

// function task11(isLoggedIn, hasAdminRights) {
//     if (isLoggedIn && hasAdminRights) {
//         return "Admin-page";
//     } else if (isLoggedIn || !hasAdminRights) {
//         return "User"
//     } else {
//         return "Guest"
//     }
// }
// ```
// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".
// ```
// function task12(speed) {
//     if (speed <= 60 ) {
//         return "It is safe";
//     } else if (speed <= 100) {
//         return 'Attention';
//     } else {
//         return "Warnung"
//     }
// }
// ```
// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
// ```
//  function task13(time, isWeekEnd) {
//     if (time < 12 && !isWeekEnd) {
//         return "Morning of the working day"
//     } else if (time > 12 && time < 18 && isWeekEnd) {
//         return "It is week end"
//     } else {
//         return "it is evening"
//     }
//  }
// ```
// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// ```
// function task14(hasGlutenAllergy, containsGluten) {
//     if (hasGlutenAllergy && containsGluten) {
//         return "it is not allowed to eat";
//     } else {
//         return "it is allowed to eat";
//     }
// }
// ```
// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".
// ```
// function task15(age) {
//   if (age < 18) {
//     return 'it is not allowed to buy alcohol';
//   } else {
//     return "it is allowed to buy alcohol"
//   }
// }
// ```
// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".
// ```
// function task16(isSunny) {
//     if (isSunny) {
//         return "We shall go for a walk";
//     } else {
//         return "We shalll stay at home"
//     }
// }
// ```
// Задача-17
// Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".
// ```
// function task17(number) {
//   if (number % 2 === 0) {
//     return 'It is even number';
//   } else {
//     return 'It is not even number';
//   }
// }
// ```
// Задача-18
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".
// ```
// function task18(password, confirmPassword) {
//     if (password === confirmPassword) {
//         return "Passwords match"
//     } else {
//         return "Passwords does not match"
//     }
// }
// ```
// Задача-19
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".
// ```
// function task19(temperature) {
//   if (temperature < 0) {
//     return 'It is winter';
//   } else if (temperature <= 15) {
//     return 'It  is spring';
//   } else if (temperature <= 25) {
//     return 'It is summer';
//   } else {
//     return 'It is autumn';
//   }
// }

// console.log(task19(-1));
// console.log(task19(15));
// console.log(task19(25));
// console.log(task19(26));

// ```
// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".
// ```
// function task20(number1, number2) {
//   if (number1 > number2) {
//     return ' The first is more';
//   } else if (number1 < number2) {
//     return 'The first is less';
//   } else if (number1 === number2) {
//     return 'It is equal';
//   }
// }

// ```
// Задача-21
// Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".
// ```
// function task21(isBatteryFull) {
//   if (isBatteryFull) {
//     return 'It  needs to charge';
//   } else {
//     return "it needs to charge "
//   }
// }
// ---

// ```
// Задача-22
// Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".
// ```
// function task22(isStudent, hasID) {
//     if (isStudent && hasID) {
//         return "Entrance is allowed"
//     } else {
//         return "Entrance is forbidden"
//     }
// }
// ```
// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг".
// ```
// function task23(temperature, isRaining) {
//     if (temperature < 0 || isRaining) {
//         return "It needs to wear warm clothes"
//     } else {
//         return "It needs to wear light clothes"
//     }
// }
// ```
// Задача-24
// Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".
// ```
// function task24(hascCar, hasLicense) {
//     if (hascCar && hasLicense) {
//         return "You can drive a car"
//     } else {
//         return "You can not drive a car"
//     }
// }
// ```
// Задача-25
// Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".
// ```
// function task25(age, hasParentConsent) {
//     if (age < 18 && !hasParentConsent) {
//         return "Access is not allowed"
//     } else {
//         return "Access is allowed"
//     }
// }
// ```
// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// ```
// function task26(isVegetarian, containsMeat) {
//   if (isVegetarian && containsMeat) {
//     return 'It is not allowed to eat';
//   } else {
//     return 'It is allowed to eat';
//   }
// }
// ```
// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".
// ```
// function task27(hoursWorked, overtime) {
//     if (hoursWorked > 40 || overtime) {
//         return "You will get bonus"
//     } else {
//         return "You will not get bonus"
//     }
// }
// ```
// Задача-28
// Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число".
// ```
// function task28(number, isPositive) {
//     if (number > 0 && isPositive === true) {
//         return "It is positive number"
//     } else {
//         return "It is not positive number"
//     }
// }
// ```
// Задача-29
// Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома".
// ```
// function task29(temperature, isSunny) {
//     if (temperature > 20 && isSunny) {
//         return "It is time fo a walk"
//     } else {
//         return "We shall stay at home"
//     }
// }
// ```
// Задача-30
// Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".
// ```
// function task30(weight, height) {
//   if (weight > 100 && height < 150) {
//     return 'The limit has beed excceded';
//   } else {
//     return "The limit is normal"
//   }
// }
// ```
// Задача-31
// Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). Якщо рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому випадку поверніть "Звичайний рік".
// ```
// function task31(year, isLeapYear) {
// if (year % 4 === 0 && isLeapYear === true) {
//     return "It is leap year"
// } else {
//     return "It is normal year"
// }
// }
// ```
// Задача-32
// Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і isSeniorCitizen (булевий). Якщо вік менший за 18 або є студентом, або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", в іншому випадку поверніть "Повна вартість квитка".
// ```
// function task32(age, isStudent, isSeniorCitizen) {
//   if (age < 18 || isStudent || (age > 65 && isSeniorCitizen)) {

//     return 'there is a discount for a ticket';
//   } else {
//     return 'it is full price for the ticket';
//   }
// }
// ```
// Задача-33
// Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".
// ```
// function task33(temperature, isRaining, hasUmbrella) {
//   if (temperature > 25 && isRaining && hasUmbrella) {
//     return 'take an Umrella and wear light clothes';
//   } else if (isRaining && !hasUmbrella) {

//     return 'Stay at home';
//   } else {
//     return 'Go for a walk';
//   }
// }
// ```
// Задача-34
// Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть "Знижка не доступна".
// ```
// function task34(isMember, hasCoupon, purchaseAmount) {
//   if (isMember || (hasCoupon && purchaseAmount > 100)) {

//     return 'You will get discount';
//   } else {
//     return 'Discount is not allowed';
//   }
// }
// ```
// Задача-35
// Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".
// ```
// function task35(password, confirmPassword) {
//   const containsDigit = password.includes(/\d/);
//   if (containsDigit === confirmPassword) {
//     return " Password is accepted."
//   } else {
//     return "Password is not accepted"
//   }
// }
// ```
// Задача-36
// Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції".
// ```
// function task36(isOnline, hasCamera, hasMicrophone) {
//     if (isOnline && hasCamera || hasMicrophone) {
//         return "You are ready for Videoconference"
//     } else {
//         return "There is no ability to connect to Videoconference"
//     }
// }
// ```
// Задача-37
// Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", в іншому випадку поверніть "Вільний час".
// ```
// function task37(currentTime, isWeekend, isHoliday) {
//     if (currentTime < 8 && !isWeekend && isHoliday) {
//         return "It is time to go to work soon"
//     } else {
//         return "It is free time"
//     }
// }
// ```
// Задача-38
// Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна".
// ```
// function task38(temperature, isSnowing, hasHeater) {
//   if (temperature < 0 && isSnowing && hasHeater) {
//     return 'It is warm and cozy';
//   } else if (!hasHeater) {

//     return 'It needs to get warm';
//   } else {
//     return 'The weather is good';
//   }
// }
// ```
// Задача-39
// Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть "Не можна керувати автомобілем".
// ```
// function task39(age, hasDriveLicence, isInsured) {
//     if (age > 18 && hasDriveLicence && isInsured) {
//         return "You can drive the car"
//     } else {
//         return "You can not drive the car"
//     }
// }
// ```
// Задача-40
// Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі".
// ```
// function task40(currentDay, hasMeeting, isHoliday) {
//   if (currentDay && hasMeeting && !isHoliday) {

//     return 'There is a meeting';
//   } else {
//     return 'There is no meeting';
//   }
// }
// ```
// Задача-41
// Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", в іншому випадку поверніть "Скидка не доступна".
// ```
// function task41(itemPrice, isDiscounted, discountAmount) {
//   if (itemPrice > 1000 && isDiscounted && discountAmount >= 10) {

//     return 'Discount is available';
//   } else {
//     return 'Discount is not available';
//   }
// }
// // ---

// ```
// Задача-42
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".
// ```
// function task42(dayOfWeek) {
//   // if (dayOfWeek === 1) {
//   //   return 'Monday';
//   // } else if (dayOfWeek === 2) {
//   //   return 'Tuesday';
//   // } else if (dayOfWeek === 3) {
//   //   return 'Wednesday';
//   // } else if (dayOfWeek === 4) {
//   //   return 'Thursday';
//   // }
//   switch (dayOfWeek) {
//     case 1:
//       return 'Monday';
//       break;
//     case 2:
//       return 'Tuesday';
//       break;
//     case 3:
//       return 'Wednesday';
//       break;
//     case 4:
//       return 'Thursday';
//       break;
//     case 5:
//       return 'Friday';
//       break;
//     case 6:
//       return 'Saturnday';
//       break;
//     case 7:
//       return 'Sunday';
//       break;
//     default:
//       return 'Unfamiliar day';
//       break;
//   }
// }

// console.log(task42(8));

// console.log(task42(5));

// ```
// Задача-43
// Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно".
// ```

// function task43(grade) {
//   switch (grade) {
//     case 'A':
//       return 'Perfect';
//       break;
//     case 'B':
//       return 'Good';
//       break;
//     case 'C':
//       return 'Satisfied';
//       break;
//     case 'D':
//     case 'F':
//       return 'Unsatisfied';
//       break;
//   }
// }

// console.log(task43('F'));

// ```
// Задача-44
// Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".
// ```

// function task44(fruit) {
//   switch (fruit) {
//     case 'Lemon':
//     case 'Orange':
//     case 'Grapefruit':
//       return 'Cytrus';
//       break;
//     case 'Apple':
//       return 'Apple';
//       break;
//     case 'pineapple':
//       return 'pineapple';
//       break;
//     case 'Strawberry':
//     case 'rasberry':
//     case 'bilberry':
//       return "Berry";
//       break;
//   }
// }
// ```
// Задача-45
// Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше".
// function task45(vehicleType) {
//   switch (vehicleType) {
//     case 'Car':
//       return 'car';
//       break;
//     case 'truck':
//       return 'truck';
//       break;
//     case 'motorcycle':
//       return 'motorcycle';
//       break;
//     default:
//       return 'Other vehicles';
//       break;
//   }
// }
// ```

// Задача-46 Напишіть функцію, яка приймає один параметр animal. Використовуючи
// switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від
// введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб",
// "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка",
// "Черепаха", "Змія" - "Рептилія".

// ```
// Задача-47
// Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди. Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг".
// ```

// ```
// Задача-48
// Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований".
// ```

// ```
// Задача-49
// Напишіть функцію, яка приймає один параметр month. Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима".
// ```

// ```
// Задача-50
// Напишіть функцію, яка приймає один параметр color. Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір".
// ```

// ```
// Задача-51
// Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".
// ```

// ---
