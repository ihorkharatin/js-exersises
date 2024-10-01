// # Обєкти

// ## ОСНОВИ

// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та
// професія.

// const user = {
//   userName: 'Mark',
//   userAge: 25,
//   userProfession: 'Manager',
//   sayHello() {
//     console.log(this.userName);
//   },
// };

// const user2 = {
//   userName: 'Mark',
//   userAge: 25,
//   userProfession: 'Manager',
//   sayHello() {
//     console.log(this.userName);
//   },
// };

// const user3 = {
//   userName: 'Mark',
//   userAge: 25,
//   userProfession: 'Manager',
//   sayHello() {
//     console.log(this.userName);
//   },
// };
// console.log(user.sayHello());

// const module3 = {
//   name: 'module3',
//   amount: 5,
//   task12(...array) {
//     for (let i = 0; i < array.length; i += 1) {
//       if (array[i] < 0) {
//         return false;
//       }
//     }
//     return true;
//   },
//   task13(...array) {
//     sum = 1;
//     for (let i = 0; i < array.length; i += 1) {
//       sum *= array[i];
//     }
//     return sum;
//   },
// };
// module3.task12()

// console.log(module3.task12([1,2,4,1,2,4]))
// console.log(user.userName);

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(user.userName);
// console.log(user.userAge);
// console.log(user.userProfession);

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// user.userAge = 30;

// console.log(user.userAge);

// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи
// зі значенням.

// user.userWork = 'Online shop';

// console.log(user.userWork);

// Видалення властивостей: Видаліть властивість професія з об'єкта person.

// delete user.userProfession;

// console.log(user.userProfession);
// console.log(user);

// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// console.log(user.hasOwnProperty(user.userProfession));
// console.log(user.hasOwnProperty('userProfession'));
// console.log(user.hasOwnProperty('userAge'));

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить
// інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з
// об'єктом person.

// const friend = {
//   friendName: 'Vasyl',
//   friendAge: 24,
//   friendProfession: 'Driver',
// };

// const resultObjects = {
//   ...user,
//   ...friend,
//   personWork: 'online shop',
// };

// console.log(resultObjects);

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у
// вигляді ключ-значення.

// const array = Object.keys(user);
// const array1 = Object.values(user);

// for (let i = 0; i < array.length; i += 1) {
//   console.log(`${array[i]} = ! ${array1[i]}`);
// }

// for (let i = 0; i < array1.length; i += 1) {
//   console.log(array1[i]);
// }

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити
// вітання з іменем особи.

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта
// person за допомогою функції Object.keys().

// ---

// ## ЗАДАЧІ

// ```
// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// ```

function task1(x, y) {
  let user = {
    userName: x,
    userAge: y,
  };
  return user;
}
const user1 = task1('Petro', 21);
const user2 = task1('Petro', 21);
const user3 = task1('Petro', 21);
const user4 = task1('Petro', 21);
// ---
// console.log(user1, user2, user3, user4);

// ```
// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.
// ```
// function task2(object) {
//   object.address = 'Kyiv';
//   return object;
// }
// // ---
// const updateUser = task2(user1);
// const updateUaser1 = task2(user2);
// console.log(updateUser);
// console.log(updateUaser1);

// ```
// Напиши функцію, яка приймає об'єкт і новий вік.
// Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// Поверни оновлений об'єкт.
// ```
// function task3(object, newAge) {
//   object.userAge = newAge;
//   return object;
// }
// // ---
// const person = task3(user1, 33);

// console.log(person);

// ```
// Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// Поверни оновлений об'єкт.
// ```

// function task4(object) {
//   delete object.userAge;
//   return object;
// }

// const updatePerson = task4(user1);
// console.log(updatePerson);

// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// ```
// function task5(object) {
//   return object.userName;
// }

// console.log(task5(user1));

// ---

// ```
// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
// ```
// function task6(object) {
//   if (object.hasOwnProperty('userAddress')) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const updateUser = task6(user1);
// console.log(updateUser);

// ---

// ```
// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.
// ```

// const object1 = {
//   x: 1,
//   y: 2,
//   t: 3,
// };

// function task7(object1, object2) {
//   const newObject = {
//     ...object1,
//     ...object2,
//   };
//   return newObject;
// }
// ---

// ```
// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.
// ```

// function task8(objectName = 'Unknown', objectAge = 0, objectAdress) {
//   const object = {
//     objectName: objectName,
//     objectAge: objectAge,
//     objectAdress: objectAdress,
//   };
//   return object;
// }

// console.log(task8('Petro', 26, 'Kyiv'));

// ---

// ```
// Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// ```
// const user = {
//   userName: 'Petro',
//   userAge: 27,
// };
// function task9(object, newName, newAge) {
//   object.userName = newName;
//   object.userAge = newAge;
//   return object;
// }

// console.log(task9(user, 'Ivan', 36));

// ---

// ```
// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// ```

// function task10(object, newEmail) {
//   object.email = newEmail;
//   object.email = object.email || newEmail;
// }

// ```
// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.
// ```

// function task11(object) {
//   object.age = object.age.toString();
//   return object;
// }

// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.
// ```

// function task14(object, newAdress) {
//   if ( object.adress ) {
//     object.adress = newAdress;
//   }
//   return object;
// }
// ---

// ```
// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
// ```

// ---

// ```
// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
// ```

// ---

// ```
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// ```

// ---

// ## ЗАДАЧІ №2

// ```
// Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.
// ```

// ```
// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
// ```

// ```
// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
// ```

// ```
// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
// ```

// ```
// Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// ```

// ```
// Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.
// ```

// ```
// Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.
// ```

// ```
// Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
// ```

// ```
// Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// ```

// ```
// Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
// ```

// ```
// Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
// ```

// ---

// ## РОЗПИСАНІ ЗАДАЧІ

// Створити об'єкт **contactBook**:

// - **Властивості**:
//   - `contacts` (масив контактів)
// - **Методи**:
//   - `addContact(contact)` - метод, що приймає контакт та додає його до масиву
//     контактів.
//   - `deleteContact(contactName)` - метод, що приймає ім'я контакта та видаляє
//     його з масиву контактів.
//   - `findContact(contactName)` - метод, що приймає ім'я контакта та шукає його у
//     масиві контактів.

// ---

// const contactBook = {
//   contacts: [],
//   addContact(contact) {
//     this.contacts.push(contact);
//   },
//   deleteContact(contactName) {
//     this.contacts = this.contacts.filter(el => el !== contactName);
//   },
//   findContact(contactName) {
//     for ( let i = 0; i < this.contacts.length; i += 1);
//     if ( this.contacts[i] === contactName) {
//       return contactName;
//     }
//   },
// };
// console.log(contactBook.contacts);
// contactBook.addContact('Ivan');
// contactBook.addContact('Petro');
// contactBook.addContact('Alex');
// contactBook.addContact('Vlad');
// contactBook.addContact('Ilyia');
// contactBook.addContact('Dmytro');

// console.log(contactBook.contacts);

// contactBook.deleteContact('Vlad');

// console.log(contactBook.contacts);

// Створити об'єкт **rectangle**:

// - **Властивості**:
//   - `width` (довжина першої сторони)
//   - `height` (довжина другої сторони)
// - **Методи**:
//   - `area()` - метод, що обчислює та повертає площу прямокутника.
//   - `perimeter()` - метод, що обчислює та повертає периметр прямокутника.

// ---
// const rectangle = {
//   width: 20,
//   height: 30,
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return (this.width + this.height) * 2;
//   },
// };

// console.log(rectangle.area());
// console.log(rectangle.perimeter());

// Створити об'єкт **toDoList**:

// - **Властивості**:
//   - `tasks` (масив задач)
// - **Методи**:
//   - `addTask(task)` - метод, що приймає задачу та додає її до масиву задач.
//   - `markAsDone(taskName)` - метод, що приймає ім'я задачі та позначає її як
//     виконану.
//   - `listTasks()` - метод, що виводить список всіх задач.

// ---

// const toDoList = {
//   tasks: [],
//   addTask(taskName) {
//     const object = {
//       taskName: taskName,
//       isActive: false,
//     };
//     this.tasks.push(object);
//   },
//   markAsDone(index) {
//     this.tasks[index].isActive = true;
//   },
//   listTasks() {
//     for (let i = 0; i < this.tasks.length; i += 1) {
//       console.log(this.tasks[i]);
//     }
//   },
// };

// toDoList.addTask('Hello world');
// toDoList.addTask('Hello world');
// toDoList.addTask('Hello world');
// toDoList.addTask('Hello world');
// toDoList.markAsDone(0);
// toDoList.listTasks();

// Створити об'єкт **bankAccount**:

// - **Властивості**:
//   - `balance` (поточний баланс)
// - **Методи**:
//   - `deposit(amount)` - метод, що приймає суму та додає її до балансу.
//   - `withdraw(amount)` - метод, що приймає суму та знімає її з балансу (з
//     перевіркою на достатність коштів).
//   - `checkBalance()` - метод, що повертає поточний баланс.

// ---
// const bankAccount = {
//   balance: 500,
//   deposit(amount) {
//     this.balance += amount;
//   },
//   withdraw(amount) {
//     if (this.balance >= amount) this.balance -= amount;
//   },
//   checkBalance() {
//     return this.balance;
//   },
// };

// bankAccount.deposit(1000);
// console.log(bankAccount.balance);
// bankAccount.withdraw(250);
// console.log(bankAccount.balance);
// console.log(bankAccount.checkBalance());

// const myHome = {
//   room1: [],
//   room2: [],
//   room3: [],
//   playChild1(toy) {
//     this.room1.push(toy);
//   },
//   playchild2(toy) {
//     this.room2.push(toy);
//   },
//   playChild3(toy) {
//     this.room3.push(toy);
//   },
//   cleanMyHome() {
//     this.room1 = [];
//     this.room2 = [];
//     this.room3 = [];
//   },
// };

// myHome.playChild1('car toy');
// myHome.playchild2('Truck toy');
// myHome.playChild3('Airplane toy');
// console.log(myHome.room1);
// console.log(myHome.room2);
// console.log(myHome.room3);

// myHome.cleanMyHome();
// console.log(myHome);

// Створити об'єкт **libraryCatalog**:

// - **Властивості**:
//   - `books` (масив книг)
// - **Методи**:
//   - `addBook(book)` - метод, що приймає книгу та додає її до масиву книг.
//   - `findBookByAuthor(author)` - метод, що приймає ім'я автора та повертає книги
//     цього автора.
//   - `findBookByISBN(isbn)` - метод, що приймає ISBN та повертає книгу з цим
//     ISBN.
//   - `listBooks()` - метод, що виводить список всіх книг.

// ---

// const libraryCatalog = {
//   books: [],
//   addBook(book) {
//     this.books.push(book);
//   },
//   findBookByAuthor(author) {
//     const booksArray = [];
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i].author === author) {
//         booksArray.push(this.books[i]);
//       }
//     }
//     return booksArray;
//   },
//   findBookByISBN(isbn) {
//     for (let i = 0; i < this.books.length; i += 1) {
//       if (this.books[i].isbn === isbn) {
//         return this.books[i];
//       }
//     }
//   },
//   listBooks() {
//     for (let i = 0; i < this.books.length; i += 1) {
//       console.log(this.books[i]);
//     }
//   },
// };

// libraryCatalog.addBook({
//   title: 'Harry Potter',
//   author: 'Kipling',
//   isbn: 123,
// });
// libraryCatalog.addBook({
//   title: 'Harry Spenser',
//   author: 'Kipling56',
//   isbn: 123,
// });
// libraryCatalog.addBook({
//   title: 'Harry Potterdf',
//   author: 'Kipling45',
//   isbn: 129,
// });
// libraryCatalog.addBook({
//   title: 'Harry raynold',
//   author: 'Kipling',
//   isbn: 127,
// });

// libraryCatalog.listBooks();

// Створити об'єкт **temperatureConverter**:

// - **Методи**:
//   - `celsiusToFahrenheit(celsius)` - метод, що приймає температуру в градусах
//     Цельсія та повертає її в градусах Фаренгейта.
//   - `fahrenheitToCelsius(fahrenheit)` - метод, що приймає температуру в градусах
//     Фаренгейта та повертає її в градусах Цельсія.

// ---
// const temperatureConverter = {
//   celsiusToFahrenheit(celsius) {
//     return celsius * 1.8 + 32;
//   },
//   fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) / 1.8;
//   },
// };

// const userValue = 26;
// console.log(temperatureConverter.celsiusToFahrenheit(userValue));

// Створити об'єкт **shoppingCart**:

// - **Властивості**:
//   - `items` (масив товарів)
// - **Методи**:
//   - `addItem(item)` - метод, що приймає товар та додає його до кошика.
//   - `totalCost()` - метод, що підраховує та повертає загальну вартість всіх
//     товарів у кошику.
//   - `listItems()` - метод, що виводить список всіх товарів у кошику.

// ---

// const shoppingCart = {
//   items: [],
//   addItem(item) {
//     this.items.push(item);
//   },
//   totalCost() {
//     let price = 0;
//     for (let i = 0; i < this.items.length; i += 1) {
//       price += this.items[i].price;
//     }
//     return price;
//   },
//   listItems() {
//     //     for ( let i = 0; i < this.items.length; i += 1) {
//     // console.log(this.items[i]);

//     // }
//     console.table(this.items);
//   },
// };

// shoppingCart.addItem({ title: 'book', idNumber: 2301, weight: 2, price: 20 });
// shoppingCart.addItem({ title: 'book', idNumber: 2301, weight: 2, price: 20 });
// shoppingCart.addItem({ title: 'book', idNumber: 2301, weight: 2, price: 20 });
// shoppingCart.addItem({ title: 'book', idNumber: 2301, weight: 2, price: 20 });
// shoppingCart.addItem({ title: 'book', idNumber: 2301, weight: 2, price: 20 });
// shoppingCart.addItem({ title: 'book', idNumber: 2301, weight: 2, price: 20 });
// shoppingCart.addItem({ title: 'book', idNumber: 2301, weight: 2, price: 20 });
// shoppingCart.listItems();
// console.log(shoppingCart.totalCost());

// Створити об'єкт **socialNetworkUser**:

// - **Властивості**:
//   - `username` (ім'я користувача)
//   - `friends` (масив друзів)
// - **Методи**:
//   - `addFriend(friendName)` - метод, що приймає ім'я друга та додає його до
//     списку друзів.
//   - `removeFriend(friendName)` - метод, що приймає ім'я друга та видаляє його зі
//     списку друзів.
//   - `listFriends()` - метод, що виводить список всіх друзів.

// ---

// const socialNetworkUser = {
//   userName: 'Petro',
//   userFriends: [],
//   addFriend(friend) {
//     this.userFriends.push(friend);
//   },
//   removeFriend(friendName) {
//     for (let i = 0; i < this.userFriends.length; i += 1) {
//       if (this.userFriends[i].userName === friendName) {
//         this.userFriends.splice(i, 1);
//       }
//     }
//   },
//   listFriends() {
//     console.table(this.userFriends);
//   },
// };

// socialNetworkUser.addFriend({
//   userName: 'petro1',
//   userAge: 26,
//   userWeight: 67,
// });
// socialNetworkUser.addFriend({
//   userName: 'petro2',
//   userAge: 26,
//   userWeight: 67,
// });
// socialNetworkUser.addFriend({
//   userName: 'petro3',
//   userAge: 26,
//   userWeight: 67,
// });
// socialNetworkUser.addFriend({
//   userName: 'petro4',
//   userAge: 26,
//   userWeight: 67,
// });
// socialNetworkUser.addFriend({
//   userName: 'petro5',
//   userAge: 26,
//   userWeight: 67,
// });
// socialNetworkUser.addFriend({
//   userName: 'petro6',
//   userAge: 26,
//   userWeight: 67,
// });
// socialNetworkUser.listFriends();
// socialNetworkUser.removeFriend('petro1');
// socialNetworkUser.listFriends();

// Створити об'єкт **musicPlayer**:

// - **Властивості**:
//   - `songs` (масив пісень)
//   - `currentSong` (індекс або ідентифікатор поточної пісні)
// - **Методи**:
//   - `addSong(song)` - метод, що приймає пісню та додає її до списку пісень.
//   - `play()` - метод, що відтворює поточну пісню.
//   - `pause()` - метод, що ставить відтворення на паузу.
//   - `next()` - метод, що перемикає на наступну пісню.
//   - `previous()` - метод, що перемикає на попередню пісню.

// ---

// Створити об'єкт **myString**:

// - **Методи**:
//   - `reverse(str)` - метод, що приймає рядок та повертає його в перевернутому
//     вигляді.
//   - `ucFirst(str)` - метод, що приймає рядок та повертає цей же рядок, зробивши
//     його першу літеру заголовною.
//   - `ucWords(str)` - метод, що приймає рядок та робить заголовною першу літеру
//     // кожного слова цього рядка.

// ---

// Створити об'єкт **validator**:

// - **Методи**:
//   - `isEmail(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     емейлом. Повертає `true` або `false`.
//   - `isDomain(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     доменом. Повертає `true` або `false`.
//   - `isDate(str)` - метод, що приймає рядок та перевіряє, чи є він коректною
//     датою. Повертає `true` або `false`.
//   - `isPhone(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     номером телефону. Повертає `true` або `false`.

// ---

// ## РОЗПИСАНІ ЗАДАЧІ

// Створити об'єкт **contactBook**:

// - **Властивості**:
//   - `contacts` (масив контактів)
// - **Методи**:
//   - `addContact(contact)` - метод, що приймає контакт та додає його до масиву
//     контактів.
//   - `deleteContact(contactName)` - метод, що приймає ім'я контакта та видаляє
//     його з масиву контактів.
//   - `findContact(contactName)` - метод, що приймає ім'я контакта та шукає його у
//     масиві контактів.

// ---

// const newObj = {
//   contacts: [],
//   addContact(contact) {
//     this.contacts.push(contact);
//   },
//   deleteContact(contactName) {
//     this.contacts = this.contacts.filter(item => {
//       return item.firstName !== contactName;
//     });
//   },
//   findContact(contactName) {
//     const searchContact = this.contacts.find(item => {
//       return item.lastName === contactName;
//     });
//     return searchContact;
//   },
// };

// newObj.addContact({ firstName: 'John', lastName: 'Smith' });
// newObj.addContact({ firstName: 'Jim', lastName: 'Johnson' });
// newObj.addContact({ firstName: 'Mark', lastName: 'Willson' });

// console.table(newObj.contacts);
// newObj.deleteContact('Jim');
// console.table(newObj.contacts);

// const findNewContact = newObj.findContact('Willson');

// console.table(findNewContact);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Створити об'єкт **rectangle**:

// - **Властивості**:
//   - `width` (довжина першої сторони)
//   - `height` (довжина другої сторони)
// - **Методи**:
//   - `area()` - метод, що обчислює та повертає площу прямокутника.
//   - `perimeter()` - метод, що обчислює та повертає периметр прямокутника.

// ---

// const rectangle = {
//   width: 5,
//   height: 10,
//   area() {
//     return rectangle.width * rectangle.height;
//   },
//   perimeter() {
//     return (rectangle.width + rectangle.height) * 2;
//   },
// };

// const rectangleArea = rectangle.area();
// console.log(rectangleArea);

// const rectanglePerimeter = rectangle.perimeter();
// console.log(rectanglePerimeter);

// Створити об'єкт **toDoList**:

// - **Властивості**:
//   - `tasks` (масив задач)
// - **Методи**:
//   - `addTask(task)` - метод, що приймає задачу та додає її до масиву задач.
//   - `markAsDone(taskName)` - метод, що приймає ім'я задачі та позначає її як
//     виконану.
//   - `listTasks()` - метод, що виводить список всіх задач.

// ---

// const toDoList = {
//   tasks: [],
//   addTask(task) {
//     return toDoList.tasks.push(task);
//   },
//   markAsDone(taskName) {
//     const findObj = toDoList.tasks.find(item => {
//       return item.title === taskName;
//     });
//     findObj.isCompleted = true;
//   },

//   listTasks() {
//     console.table(toDoList.tasks);
//   },
// };
// toDoList.addTask({ title: 'Task1', isCompleted: false });
// toDoList.addTask({ title: 'Task2', isCompleted: false });
// toDoList.addTask({ title: 'Task3', isCompleted: false });

// toDoList.listTasks();

// toDoList.markAsDone('Task1');

// toDoList.listTasks();

// Створити об'єкт **bankAccount**:

// - **Властивості**:
//   - `balance` (поточний баланс)
// - **Методи**:
//   - `deposit(amount)` - метод, що приймає суму та додає її до балансу.
//   - `withdraw(amount)` - метод, що приймає суму та знімає її з балансу (з
//     перевіркою на достатність коштів).
//   - `checkBalance()` - метод, що повертає поточний баланс.

// const bankAccount = {
//   balance: 1000,
//   deposit(amount) {
//     bankAccount.balance += amount;
//   },
//   withdraw(amount) {
//     if (bankAccount.balance >= amount) {
//       bankAccount.balance -= amount;
//     }
//   },
//   checkBalance() {
//     return bankAccount.balance;
//   },
// };

// bankAccount.deposit(1000);
// console.log(bankAccount.balance);

// bankAccount.withdraw(500);

// console.log(bankAccount.balance);

// console.log(bankAccount.checkBalance());

// Створити об'єкт **libraryCatalog**:

// - **Властивості**:
//   - `books` (масив книг)
// - **Методи**:
//   - `addBook(book)` - метод, що приймає книгу та додає її до масиву книг.
//   - `findBookByAuthor(author)` - метод, що приймає ім'я автора та повертає книги
//     цього автора.
//   - `findBookByISBN(isbn)` - метод, що приймає ISBN та повертає книгу з цим
//     ISBN.
//   - `listBooks()` - метод, що виводить список всіх книг.

// ---

// const libraryCatalog = {
//   books: [],
//   addBook(book) {
//     libraryCatalog.books.push(book);
//   },
//   findBookByAuthor(author) {
//     const findBook = libraryCatalog.books.filter(item => {
//       return item.bookAuthor === author;
//     });
//     return findBook;
//   },
//   findBookByISBN(isbn) {
//     const bookIsbn = libraryCatalog.books.find(item => {
//       return item.isbnNumber === isbn;
//     });
//     return bookIsbn;
//   },
//   listbooks() {
//     console.table(libraryCatalog.books);
//   },
// };

// libraryCatalog.addBook({
//   bookAuthor: 'Kipling1',
//   isbnNumber: 1256,
//   price: 122,
//   title: 'Porter1',
// });
// libraryCatalog.addBook({
//   bookAuthor: 'Kipling2',
//   isbnNumber: 1258,
//   price: 128,
//   title: 'Porter2',
// });
// libraryCatalog.addBook({
//   bookAuthor: 'Kipling3',
//   isbnNumber: 1263,
//   price: 124,
//   title: 'Porter3',
// });

// libraryCatalog.listbooks();

// console.table(libraryCatalog.findBookByAuthor('Kipling1'));

// console.table(libraryCatalog.findBookByISBN(1263));

// Створити об'єкт **temperatureConverter**:

// - **Методи**:
//   - `celsiusToFahrenheit(celsius)` - метод, що приймає температуру в градусах
//     Цельсія та повертає її в градусах Фаренгейта.
//   - `fahrenheitToCelsius(fahrenheit)` - метод, що приймає температуру в градусах
//     Фаренгейта та повертає її в градусах Цельсія.

// ---

// const obj = {
//   celsiusToFahrenheit(celsius) {
//     return (celsius * 9) / 5 + 32;
//   },
//   fahrenheitToCelsius(fahrenheit) {
//     return ((fahrenheit - 32) * 5) / 9;
//   },
// };

// console.log(obj.celsiusToFahrenheit(25));
// console.log(obj.fahrenheitToCelsius(25));

// Створити об'єкт **shoppingCart**:

// - **Властивості**:
//   - `items` (масив товарів)
// - **Методи**:
//   - `addItem(item)` - метод, що приймає товар та додає його до кошика.
//   - `totalCost()` - метод, що підраховує та повертає загальну вартість всіх
//     товарів у кошику.
//   - `listItems()` - метод, що виводить список всіх товарів у кошику.

// ---

// const shoppingCart = {
//   items: [],
//   addItem(item) {
//     // shoppingCart.items.push(item);
//     this.items.push(item);
//   },
//   totalCost() {
//     let sum = 0;
//     for (const item of this.items) {
//       sum += item.price;
//     }
//     return sum;
//   },
//   listItems() {
//     console.table(this.items);
//   },
// };

// shoppingCart.addItem({ title: 'Bread', price: 10 });
// shoppingCart.addItem({ title: 'tomato', price: 30 });
// shoppingCart.addItem({ title: 'Cucumber', price: 40 });
// console.log(shoppingCart.items);

// console.log(shoppingCart.totalCost());

// shoppingCart.listItems();

// Створити об'єкт **socialNetworkUser**:

// - **Властивості**:
//   - `username` (ім'я користувача)
//   - `friends` (масив друзів)
// - **Методи**:
//   - `addFriend(friendName)` - метод, що приймає ім'я друга та додає його до
//     списку друзів.
//   - `removeFriend(friendName)` - метод, що приймає ім'я друга та видаляє його зі
//     списку друзів.
//   - `listFriends()` - метод, що виводить список всіх друзів.

// ---

// const socialNetworkUser = {
//   username: 'Tom',
//   friends: [],
//   addFriend(friendName) {
//     this.friends.push(friendName);
//   },
//   removeFriend(friendName) {
//     const findFriend = socialNetworkUser.friends.filter(item => {
//       return item !== friendName;
//     });
//     this.friends = findFriend;
//   },
//   listFriends() {
//     console.log(this.friends);
//   },
// };

// socialNetworkUser.addFriend('Steve');
// socialNetworkUser.addFriend('Tomas');
// socialNetworkUser.addFriend('berkley');

// console.log(socialNetworkUser.friends);

// socialNetworkUser.removeFriend('Tomas');
// console.log(socialNetworkUser.friends);

// socialNetworkUser.listFriends();

// Створити об'єкт **musicPlayer**:

// - **Властивості**:
//   - `songs` (масив пісень)
//   - `currentSong` (індекс або ідентифікатор поточної пісні)
// - **Методи**:
//   - `addSong(song)` - метод, що приймає пісню та додає її до списку пісень.
//   - `play()` - метод, що відтворює поточну пісню.
//   - `pause()` - метод, що ставить відтворення на паузу.
//   - `next()` - метод, що перемикає на наступну пісню.
//   - `previous()` - метод, що перемикає на попередню пісню.

// ---

// const musicPlayer = {
//   songs: [],
//   currentSong: 0,
//   addSong(song) {
//     this.songs.push(song);
//   },
//   play() {
//     console.log(this.songs[this.currentSong], 'Play');
//   },
//   pause() {
//     console.log(this.songs[this.currentSong], 'Pause');
//   },
//   next() {
//     this.currentSong += 1;
//   },
//   previous() {
//     this.currentSong -= 1;
//   },
// };

// musicPlayer.addSong('The wind');
// musicPlayer.addSong('The sun');
// musicPlayer.addSong('The moon');

// musicPlayer.play();
// musicPlayer.next();
// musicPlayer.play();
// musicPlayer.previous();
// musicPlayer.play();
// musicPlayer.pause();

//================================================

// Створити об'єкт **myString**:

// - **Методи**:
//   - `reverse(str)` - метод, що приймає рядок та повертає його в перевернутому
//     вигляді.
//   - `ucFirst(str)` - метод, що приймає рядок та повертає цей же рядок, зробивши
//     його першу літеру заголовною.
//   - `ucWords(str)` - метод, що приймає рядок та робить заголовною першу літеру
//     кожного слова цього рядка.

// ---

// Створити об'єкт **validator**:

// - **Методи**:
//   - `isEmail(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     емейлом. Повертає `true` або `false`.
//   - `isDomain(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     доменом. Повертає `true` або `false`.
//   - `isDate(str)` - метод, що приймає рядок та перевіряє, чи є він коректною
//     датою. Повертає `true` або `false`.
//   - `isPhone(str)` - метод, що приймає рядок та перевіряє, чи є він коректним
//     номером телефону. Повертає `true` або `false`.

// ---

// const array = [];
// function addNumber(x) {
//   array.push(x ** 2);
// }

// addNumber(2);
// addNumber(3);
// console.log(array);

// const array1 = [];
// function addYNumber(y) {
//   array1.push(y ** 3);
// }

// const obj = {
//   array: [],
//   addNumber(x) {
//     obj.array.push(x ** 2);
//   },
// };

// obj.addNumber(2);
// obj.addNumber(3);
// console.log(obj.array);
