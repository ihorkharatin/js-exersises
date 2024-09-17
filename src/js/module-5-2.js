// # Books

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    rating: 4.8,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 5.99,
    rating: 4.9,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    rating: 4.8,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 9.99,
    rating: 4.5,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical',
    price: 14.99,
    rating: 4.9,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical',
    price: 11.99,
    rating: 4.8,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    genre: 'Philosophical',
    price: 13.99,
    rating: 4.9,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genre: 'Dystopian',
    price: 9.99,
    rating: 4.7,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Romance',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    genre: 'Romance',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Gothic',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Science Fiction',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Horror',
    price: 6.99,
    rating: 4.5,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    year: -800,
    genre: 'Epic',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    year: -750,
    genre: 'Epic',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Historical',
    price: 11.99,
    rating: 4.9,
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    genre: 'Adventure',
    price: 12.99,
    rating: 4.9,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.6,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'Historical',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'Children',
    price: 6.99,
    rating: 4.7,
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1877,
    genre: 'Romance',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'Mystery',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    price: 20.99,
    rating: 4.9,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
];

// 1. Знайти всі книги жанру 'Fantasy'.

// const bookGenre = books.filter(
//   (bookItem, index, array) => bookItem.genre === 'Fantasy',
// );

// console.table(bookGenre);
// 1. Знайти всі книги, видані після 2000 року.

// const bookAfter = books.filter(item => item.year > 1590);

// console.table(bookAfter);

// 1. Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.

// const bookAuthor = books.filter(item => item.author === 'Fyodor Dostoevsky');

// console.table(bookAuthor);

// const bookLength = books.filter(item => item.author.length > 10);

// console.table(bookLength);

// const bookLetter = books.filter(item => item.title.includes('h'));

// console.table(bookLetter);
// 1. Знайти всі книги з ціною меншою ніж 10 доларів.

// const bookPrice = books.filter(item => item.price < 10);

// console.table(bookPrice);

// 1. Знайти всі книги з рейтингом 4.8 і вище.

// const bookRate = books.filter(item => item.rating >= 4.8);
// console.table(bookRate);
// 1. Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.

// const bookItems = books.filter(
//   item => item.genre === 'Romance' && item.price < 8,
// );
// console.table(bookItems);
// 1. Знайти всі книги, видані до 1900 року.

// const booksOld = books.filter(item => item.year < 1490);
// console.table(booksOld);
// 1. Знайти всі книги, що містять слово 'and' у назві.

// const bookName = books.filter(item => item.title.includes('and'));
// console.table(bookName);
// 1. Знайти всі книги, автором яких є 'J.R.R. Tolkien'.

// const allBooks = books.find(item => item.title === 'J.R.R. Tolkien');
// console.table(allBooks);
// 1. Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.

// const booksAndRate = books.filter(
//   item => item.genre === 'Historical' && item.rating > 4.7,
// );

// console.table(booksAndRate);

// ---
// const oneBook = books.find(item => item.price > 10);

// console.table(oneBook);

// 1. Знайти першу книгу жанру 'Fantasy'.

// const firstBook = books.find(item => item.genre === 'Fantasy');

// console.table(firstBook);
// 1. Знайти першу книгу, видану після 2000 року.

// const task2 = books.find((item) => item.year > 1900)

// 1. Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.

// const task3 = books.find(item => item.author === 'Fyodor Dostoevsky');
// 1. Знайти першу книгу з ціною меншою ніж 10 доларів.

// 1. Знайти першу книгу з рейтингом 4.8 і вище.
// 1. Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.
// 1. Знайти першу книгу, видану до 1900 року.
// 1. Знайти першу книгу, що містить слово 'and' у назві.
// 1. Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.
// 1. Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

// ---

// 1. Чи є в масиві хоча б одна книга жанру 'Fantasy'?

// const task4 = books.some(item => item.genre === 'Fantasy');

// console.table(task4);
// 1. Чи є в масиві хоча б одна книга, видана після 2000 року?

// const task5 = books.some(item => item.year > 2000);
// console.log(task5);

// 1. Чи є в масиві хоча б одна книга, автором якої є 'Fyodor Dostoevsky'?

// 1. Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?
// 1. Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?
// 1. Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?
// 1. Чи є в масиві хоча б одна книга, видана до 1900 року?
// 1. Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?
// 1. Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?
// 1. Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?

// ---

// 1. Чи всі книги в масиві мають рейтинг 4.5 і вище?

// const task6 = books.every((item) => item.rating >= 4.5);
// 1. Чи всі книги в масиві коштують менше 20 доларів?

// const task7 = books.every(item => item.price < 20);
// console.table(task7);
// 1. Чи всі книги в масиві видані після 1950 року?
// 1. Чи всі книги в масиві є жанру 'Fiction'?
// 1. Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?
// 1. Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?
// 1. Чи всі книги в масиві видані до 2000 року?
// 1. Чи всі книги в масиві мають слово 'the' у назві?
// 1. Чи всі книги в масиві мають рейтинг вище 4.0?
// 1. Чи всі книги в масиві є жанру 'Adventure'?

// books.filter((item))
// books.some((item)) //boolean
// books.every((item))
// books.find((item))

// const task8 = books.map(item => {
//   return item.title;
// });
// console.table(task8);

//  Отримати масив назв всіх книжок.

// const task9 = books.map((item) => {
//     return item.title;
// })
// 1. Отримати масив авторів всіх книжок.

// const task10 = books.map((item) => {
//     return item.author;
// })
// 1. Створити масив об'єктів, які містять лише назву та автора кожної книжки.

// const task11 = books.map(item => {
//   const changeBook = {
//     bookName: item.title,
//     bookAuthor: item.author,
//   };
//   return changeBook;
// });

// console.table(task11);
// 1. Створити масив цін всіх книжок з подвоєною вартістю.

// const task12 = books.map(item => {
//   return item.price * 2;
// });
// console.log(task12);

// 1. Створити масив років видання всіх книжок з доданими 5 роками до кожного.

// const task13 = books.map(item => {
//   return item.year + 5;
// });
// console.log(task13);

// 1. Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках
//    (помножений на 10).

// const taskk14 = books.map(item => {
//   const booksCopy = {
//     bookName: item.title,
//     bookrating: item.rating * 10,
//   };
//   return booksCopy;
// });

// console.log(taskk14);

// 1. Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

// const task15 = books.map(item => {
//   const booksCopy = {
//     ...item,
//     title: item.title.toUpperCase(),
//   };
//   return booksCopy;
// });

// console.log(task15);

// 1. Створити масив рядків, що містять інформацію про кожну книжку в форматі
//    "назва - автор".

// const task16 = books.map(item => {
//   const bookCopy = `${item.title} - ${item.author}`;
//   return bookCopy;
// });

// console.log(task16);

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `discountPrice`,
//    що дорівнює ціні зі знижкою 10%.

// const task18 = books.map(item => {
//   const copyBook = {
//     ...item,
//     discountprice: item.price * 0.9,
//   };
//   return copyBook;
// });

// console.log(task18);

// 1. Створити масив об'єктів, що містять назву книжки та її ціну з доданим
//    податком 15%.

// const task19 = books.map(item => {
//   const bookCopy = {
//     bookName: item.title,
//     bookPrice: item.price,
//     bookVat: item.price * 0.15,
//     bookTotal: item.price * 1.15,
//   };
//   return bookCopy;
// });

// console.log(task19);

// 1. Створити масив назв книжок, які видані після 2000 року.

// const task20 = books
//   .filter(item => item.year > 1900)
//   .map(item => {
//     return item.title;
//   });

// console.log(task20);

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `isClassic`, що
//    дорівнює `true`, якщо книжка видана до 1950 року.

// const task21 = books
//   .filter(item => item.year < 1950)
//   .map(item => {
//     const copyBook = {
//       ...item,
//       isClassic: true,
//     };
//     return copyBook;
//   });

// console.log(task21);

// const task22 = books.map(item => {
// if (item.year < 1950) ;
// return true;
//   const newObj = {
//     ...item,
//   };
//   if (item.year < 1950) {
//     newObj.isClassic = true;
//   } else {
//     newObj.isClassic = false;
//   }
//   return newObj;
// });

// console.log(task22);

// 1. Отримати масив жанрів всіх книжок у верхньому регістрі.

// const task23 = books.map(item => {
//   return item.genre.toUpperCase();
// });

// console.log(task23);

// 1. Створити масив назв книжок, де всі слова в назві починаються з великої
//    літери.

// const task24 = books.map(item => {
//   return item.title[0].toUpperCase() + item.title.slice(1).toLocaleLowerCase();
// });

// console.log(task24);

// 1. Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.

// const task25 = books.map(item => {
//   const newArray = {
//     bookAthor: item.author,
//     bookYear: item.year,
//   };
//   return newArray;
// });

// console.log(task25);

// 1. Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).

// const task26 = books.map(item => {
//   return item.price * 0.85;
// });

// console.log(task26);

//
// 1. Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".

// const task27 = books.map(item => {
//   return item.title + '(Special Edition)';
// });

// console.log(task27);

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `shortTitle`, що
//    містить тільки перше слово з назви.

// const task28 = books.map(item => {
//   const newObj = {
//     shortTitle: item.title.split(' ')[0],
//   };
//   return newObj;
// });

// console.log(task28);

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `description`,
//    що містить рядок "Ця книга від автора [author] була видана у [year] році".

// const task29 = books.map(item => {
//   const newObj = {
//     ...item,
//     description: `This book from ${item.author} was published in ${item.year}`,
//   };
//   return newObj;
// });
// console.log(task29);

// 1. Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр
//    записаний у нижньому регістрі.

// const task30 = books.map(item => {
//   const newObj = {
//     bookname: item.title,
//     bookGenre: item.genre.toLowerCase(),
//   };
//   return newObj;
// });
// console.log(task30);

//  Відсортувати книги за роком видання від найдавнішого до найновішого.

// const task31 = books.toSorted((book1, book2) => {
//   return book2.year - book1.year;
// });
// console.table(task31);

// 1. Відсортувати книги за ціною від найнижчої до найвищої.

// const task32 = books.toSorted((one, two) => {
//   return one.price - two.price;
// });
// console.table(task32);
// 1. Відсортувати книги за рейтингом від найнижчого до найвищого.

// const task33 = books.toSorted((one, two) => {
//   return one.rating - two.rating;
// });

// console.table(task33);
// 1. Відсортувати книги за назвою у алфавітному порядку (від А до Я).
// const task34 = books.toSorted((book1, book2) => {
//   return book1.title.localeCompare(book2.title);
// });

// console.table(task34);
// 1. Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).

// const task35 = books.toSorted((book3, book4) => {
//   return book4.author.localeCompare(book3.title);
// });

// console.table(task35);
// 1. Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за
//    назвою у зворотньому алфавітному порядку.

// const task36 = books.toSorted((book1, book2) => {
//   if (book1.genre === book2.genre) {
//     return book2.title.localeCompare(book1.title);
//   }

//   return book1.genre.localeCompare(book2.genre);
// });
// console.table(task36);

// 1. Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою
//    назвою за автором у зворотньому алфавітному порядку.

// const task37 = books.toSorted((book1, book2) => {
//   if (book1.title === book2.title) {
//     return book2.author.localeCompare(book1.author);
//   } else {
//     book1.title.localeCompare(book2.title);
//   }
// });
// console.table(task37);

// 1. Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше
//    10 доларів, потім решту.

// const task38 = books.toSorted((book1, book2) => {
//   return book1.price - book2.price;
// });

// console.table(task38);
// 1. Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають
//    рейтинг 4.8 і вище, потім решту.

// const task39 = books
//   .toSorted((book1, book2) => {
//     return book1.rating - book2.rating;
//   })
//   .toSorted(book1 => {
//     if (book1.rating >= 4.8) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });

// console.table(task39);

// 1. Відсортувати книги спочатку за жанром, а потім за роком видання.

// const task40 = books
//   .toSorted((book1, book2) => {
//     return book1.year - book2.year;
//   })
//   .toSorted((book1, book2) => {
//     return book1.genre.localeCompare(book2.genre);
//   });

// console.table(task40);

// Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом
//    від найвищого до найнижчого, повернути лише назви.

// function getBook(bookYear) {
//   const task41 = books
//     .filter(item => {
//       return item.year > bookYear;
//     })
//     .toSorted((book1, book2) => {
//       return book1.rating - book2.rating;
//     })
//     .map(item => {
//       const newObj = {
//         bookYear: item.year,
//         bookName: item.title,
//       };

//       return newObj;
//     });
//   return task41;
// }

// const x = getBook(1500);
// const y = getBook(1900);

// console.table(x);
// console.table(y);

// 1. Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за
//    роком видання від найдавнішого до найновішого та вивести перші 5 книг.

// function newBooks(bookAuthor) {
//   const task42 = books
//     .filter(item => {
//       return item.author === bookAuthor;
//     })
//     .toSorted((book1, book2) => {
//       return book1.year - book2.year;
//     })
//     .slice(0, 5);
//   return task42;
// }
// const newAuthor = newBooks('Fyodor Dostoevsky');

// console.table(newAuthor);

// 1. Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною
//    від найнижчої до найвищої та вивести назви книг.

// function newBooks(priceBook) {
//   const task43 = books
//     .filter(item => {
//       return item.price < priceBook;
//     })
//     .toSorted((price1, price2) => {
//       return price1.price - price2.price;
//     })
//     .map(item => {
//       const newObj = {
//         bookName: item.title,
//         bookPrice: item.price,
//       };
//       return newObj;
//     });
//   return task43;
// }

// const NewBooksPrice = newBooks(10);

// console.table(NewBooksPrice);

// 1. Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у
//    зворотньому алфавітному порядку та вивести авторів унікальних книг.

// function bookRating(ratingBook) {
//   const task44 = books
//     .filter(item => {
//       return item.rating >= ratingBook;
//     })
//     .toSorted((book1, book2) => {
//       return book2.author - book1.author;
//     })
//     .map(item => {
//       const newObj = {
//         bookAuthor: item.author,
//       };
//       return newObj;
//     })
//     .filter((item, index, array) => {
//       const firstIndex = array.findIndex(book => {
//         return book.bookAuthor === item.bookAuthor;
//       });
//       return firstIndex === index;
//     });
//   return task44;
// }

// const newBookRating = bookRating(4.8);

// console.table(newBookRating);

// 1. Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та
//    відсортувати їх за рейтингом від найвищого до найнижчого.

// function newBook(newGenre, newPrice) {
//   const task45 = books
//     .filter(item => {
//       return item.genre === newGenre && item.price < newPrice;
//     })
//     .toSorted((book1, book2) => {
//       return book1.rating - book2.rating;
//     });
//   return task45;
// }

// const newGenreBook = newBook('Romance', 8);

// console.table(newGenreBook);

// 1. Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від
//    найвищого до найнижчого та вивести першу книгу.

// function newBooks(oldYear) {
//   const task46 = books
//     .filter(item => {
//       return item.year < oldYear;
//     })
//     .toSorted((book1, book2) => {
//       return book1.rating - book2.rating;
//     })[0];

//   return task46;
// }

// const newArrayBooks = newBooks(1900);
// console.table(newArrayBooks);

// 1. Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком
//    видання від найдавнішого до найновішого та вивести останню книгу.

// function newBooks(newWord) {
//   const task47 = books
//     .filter(item => {
//       return item.title.includes(newWord);
//     })
//     .toSorted((book1, book2) => {
//       return book1.year - book2.year;
//     })
//     .slice(-1);

//   return task47;
// }

// const lastBook = newBooks('and');

// console.table(lastBook);

// 1. Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за
//    рейтингом від найвищого до найнижчого та вивести середній рейтинг.

// function newBook(newAuthor) {
//   const task48 = books
//     .filter(item => {
//       return item.author === newAuthor;
//     })
//     .toSorted((book1, book2) => {
//       return book1.rating - book2.rating;
//     })
//     .reduce((result, item, index, array) => {
//       return result + item.rating / array.length;
//     }, 0);

//   return task48;
// }
// const newAuthorBooks = newBook('J.R.R. Tolkien');
// console.table(newAuthorBooks);

// 1. Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх
//    за роком видання від найдавнішого до найновішого та вивести останні 3 книги.
// function newBook(genre, rating) {
//   const task49 = books
//     .filter(item => {
//       return item.genre === genre && item.rating === rating;
//     })
//     .toSorted((book1, book2) => {
//       return book1.year - book2.year;
//     })
//     .slice(-3);

//   return task49;
// }

// const newBookGenre = newBook('Historical', 4.7);

// console.table(newBookGenre);

const cars = [
  {
    brand: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Silver',
    price: 25000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    year: 2020,
    color: 'White',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    color: 'Red',
    price: 50000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2018,
    color: 'Black',
    price: 45000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'BMW',
    model: 'M5',
    year: 2022,
    color: 'Blue',
    price: 70000,
    amount: 2,
    isSportCar: true,
    type: 'Sedan',
  },
  {
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    color: 'Silver',
    price: 60000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    color: 'Gray',
    price: 45000,
    amount: 0,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Lamborghini',
    model: 'Huracan',
    year: 2023,
    color: 'Yellow',
    price: 300000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Ferrari',
    model: '488 GTB',
    year: 2022,
    color: 'Red',
    price: 350000,
    amount: 1,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Porsche',
    model: '911',
    year: 2021,
    color: 'White',
    price: 120000,
    amount: 2,
    isSportCar: true,
    type: 'Coupe',
  },
  {
    brand: 'Toyota',
    model: 'Golf',
    year: 2020,
    color: 'Black',
    price: 20000,
    amount: 6,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Subaru',
    model: 'Forester',
    year: 2021,
    color: 'Green',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Jeep',
    model: 'Wrangler',
    year: 2022,
    color: 'Orange',
    price: 35000,
    amount: 0,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Mazda',
    model: 'CX-5',
    year: 2020,
    color: 'Red',
    price: 28000,
    amount: 5,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Kia',
    model: 'Soul',
    year: 2021,
    color: 'Yellow',
    price: 20000,
    amount: 4,
    isSportCar: false,
    type: 'Hatchback',
  },
  {
    brand: 'Toyota',
    model: 'Tucson',
    year: 2022,
    color: 'White',
    price: 30000,
    amount: 3,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    color: 'Silver',
    price: 22000,
    amount: 3,
    isSportCar: false,
    type: 'Sedan',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    year: 2020,
    color: 'Blue',
    price: 40000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Lexus',
    model: 'RX',
    year: 2021,
    color: 'Black',
    price: 50000,
    amount: 2,
    isSportCar: false,
    type: 'SUV',
  },
  {
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    year: 2022,
    color: 'Gray',
    price: 60000,
    amount: 0,
    isSportCar: false,
    type: 'SUV',
  },
];

// 1. Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від
//    нових до старих.

// function task50(highPrice) {
//   const newCars = cars
//     .filter(item => {
//       return item.price > highPrice;
//     })
//     .toSorted((car1, car2) => {
//       return car2.year - car1.year;
//     });
//   return newCars;
// }

// const checkCars = task50(50000);

// console.table(checkCars);

// 1. Створити новий масив, що містить лише моделі доступних для продажу машин.

// function task51() {
//   const newCarsArray = cars
//     .filter(item => {
//       return item.amount > 0;
//     })
//     .map(item => {
//       return item.model;
//     });
//   return newCarsArray;
// }

// console.table(task51());

// 1. Знайти першу машину, яка не є спортивною та має кількість на на складі більше
//    0, потім повернути її колір.

// function task52() {
//   const firstCar = cars.find(item => {
//     return item.amount > 0 && !item.isSportCar;
//   });
//   return firstCar.color;
// }

// console.table(task52());

// 1. Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і
//    ціною менше 40 000.

// function task53(setPrice) {
//   let sum = 0;
//   const array = cars
//     .filter(item => {
//       return item.amount > 2 && item.price < setPrice;
//     })
//     .forEach(item => {
//       sum += item.price;
//     });
//   return sum;
// }

// console.table(task53(40000));

// 1. Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком
//    випуску від старих до нових і повернути масив тільки зі своїми моделями.

// function task54(typeCar) {
//   const definiteCar = cars
//     .filter(item => {
//       return item.type === typeCar;
//     })
//     .toSorted((car1, car2) => {
//       return car1.year - car2.year;
//     })
//     .map(item => {
//       return item.model;
//     });

//   return definiteCar;
// }

// const findCar = task54('SUV');

// console.table(findCar);

// 1. Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням
//    ціни і повернути масив, що містить лише бренди та моделі цих машин.

// function task55(setPrice) {
//   const spartCars = cars
//     .filter(item => {
//       return item.isSportCar && item.price > setPrice;
//     })
//     .toSorted((car1, car2) => {
//       return car2.price - car1.price;
//     })
//     .map(item => {
//       const obj = {
//         brandCar: item.brand,
//         modelCar: item.model,
//       };
//       return obj;
//     });
//   return spartCars;
// }

// const newCars = task55(60000);

// console.table(newCars);

// 1. Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після
//    2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише
//    моделі цих машин та ціну.

// function task56(setColor, setYear) {
//   const carsArray = cars
//     .filter(item => {
//       return item.color === setColor && item.year > setYear;
//     })
//     .toSorted((car1, car2) => {
//       return car1.price - car2.price;
//     })
//     .map(item => {
//       const obj = {
//         modelCar: item.model,
//         priceCar: item.price,
//       };
//       return obj;
//     });

//   return carsArray;
// }

// const findCars = task56('Blue', 2020);

// console.table(findCars);

// 1. Повернути масив, що містить лише кольори доступних для прродажу машин, та
//    зробити щоб колір не повторювався дівчі.

// function task57() {
//   const newArray = cars
//     .filter(item => {
//       return item.amount > 0;
//     })
//     .map(item => {
//       return item.color;
//     });
//   const originalCar = new Set(newArray);
//   return originalCar;
// }

// console.table(task57());

// 1. Знайти індекс першої машини з ціною менше 20000 та повернути масив, що
//    містить тільки бренди та моделі машин після знайденої.
// function task58(setPrice) {
//   const index = cars.findIndex(item => {
//     return item.price < setPrice;
//   });
//   const newArrayCars = cars.slice(index).map(item => {
//     const obj = {
//       carBrand: item.brand,
//       carModel: item.model,
//     };
//     return obj;
//   });
//   return newArrayCars;
// }

// const newBrandCars = task58(200000);

// console.table(newBrandCars);

// 1. Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком
//    випуску від нових до старих і повернути масив, що містить тільки моделі цих
//    машин.

// function task59(price1, price2) {
//   const carPrice = cars
//     .filter(item => {
//       return item.price > price1 && item.price < price2;
//     })
//     .toSorted((car1, car2) => {
//       return car1.year - car2.year;
//     })
//     .map(item => {
//       return item.model;
//     });

//   return carPrice;
// }

// const newCars = task59(40000, 60000);
// console.table(newCars);

// 1. Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище
//    70 000.

// function task60(setAmount, setPrice) {
//   const someCars = cars.some(item => {
//     return item.amount > setAmount && item.price > setPrice;
//   });

//   return someCars;
// }

// const findCars = task60(5, 70000);
// console.table(findCars);

// 1. Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по
//    спаданню кількості та повернути масив, що містить тільки бренди та моделі цих
//    машин.

// function task61(setAmount) {
//   const amountCars = cars
//     .filter(item => {
//       return item.amount > setAmount;
//     })
//     .toSorted((car1, car2) => {
//       return car1.amount - car2.amount;
//     })
//     .map(item => {
//       const obj = {
//         carBrand: item.brand,
//         carModel: item.model,
//       };

//       return obj;
//     });
//   return amountCars;
// }

// const newArray = task61(0);

// console.table(newArray);

const users = [
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 42,
    email: 'bob@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Eva',
    lastName: 'Williams',
    age: 35,
    email: 'eva@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    age: 22,
    email: 'david@gmail.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 29,
    email: 'sophia@gmail.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Miller',
    age: 50,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    age: 19,
    email: 'olivia@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Thompson',
    age: 31,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Harris',
    age: 27,
    email: 'ava@gmail.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jackson',
    age: 38,
    email: 'james@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Taylor',
    age: 23,
    email: 'emma@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    age: 45,
    email: 'william@gmail.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Martin',
    age: 29,
    email: 'mia@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Joseph',
    lastName: 'Clark',
    age: 33,
    email: 'joseph@poshta.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Rodriguez',
    age: 26,
    email: 'charlotte@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'John',
    lastName: 'Lopez',
    age: 31,
    email: 'john@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'Lee',
    age: 20,
    email: 'amelia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Benjamin',
    lastName: 'Gonzalez',
    age: 40,
    email: 'benjamin@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Chloe',
    lastName: 'Hernandez',
    age: 24,
    email: 'chloe@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Young',
    age: 37,
    email: 'daniel@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Olivia',
    lastName: 'Miller',
    age: 38,
    email: 'olivia@example.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'James',
    lastName: 'Jones',
    age: 29,
    email: 'james@poshta.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Sophia',
    lastName: 'Davis',
    age: 31,
    email: 'sophia@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'William',
    lastName: 'Wilson',
    age: 52,
    email: 'william@poshta.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Ava',
    lastName: 'Taylor',
    age: 19,
    email: 'ava@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Michael',
    lastName: 'Clark',
    age: 40,
    email: 'michael@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Emma',
    lastName: 'Lee',
    age: 27,
    email: 'emma@poshta.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Daniel',
    lastName: 'Martinez',
    age: 35,
    email: 'daniel@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Isabella',
    lastName: 'Hernandez',
    age: 42,
    email: 'isabella@poshta.com',
    isActive: false,
    gender: 'Female',
  },
  {
    firstName: 'Liam',
    lastName: 'Garcia',
    age: 26,
    email: 'liam@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Mia',
    lastName: 'Rodriguez',
    age: 30,
    email: 'mia@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Noah',
    lastName: 'Lopez',
    age: 24,
    email: 'noah@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Charlotte',
    lastName: 'Perez',
    age: 29,
    email: 'charlotte@example.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Ethan',
    lastName: 'Turner',
    age: 37,
    email: 'ethan@example.com',
    isActive: true,
    gender: 'Male',
  },
  {
    firstName: 'Amelia',
    lastName: 'White',
    age: 23,
    email: 'amelia@poshta.com',
    isActive: true,
    gender: 'Female',
  },
  {
    firstName: 'Alexander',
    lastName: 'Jackson',
    age: 41,
    email: 'alexander@example.com',
    isActive: false,
    gender: 'Male',
  },
  {
    firstName: 'Sofia',
    lastName: 'Brown',
    age: 33,
    email: 'sofia@example.com',
    isActive: true,
    gender: 'Female',
  },
];

// # USERS

// 1. Знайти користувачів віком від 25 до 40 років.

// function task62(fromAge, afterAge) {
//   const findUsers = users.filter(item => {
//     return item.age > fromAge && item.age < afterAge;
//   });
//   return findUsers;
// }

// const findNewUsers = task62(25, 40);
// console.table(findNewUsers);

// 1. Знайти всіх користувачів із активним статусом.

// function task63() {
//   const activeUser = users.filter(item => {
//     return item.isActive;
//   });

//   return activeUser;
// }

// console.table(task63());

// 1. Порахувати кількість користувачів молодше 30 років.

// function task64(setAge) {
//   const usersAmount = users.filter(item => {
//     return item.age < setAge;
//   }).length;

//   return usersAmount;
// }

// const newUsers = task64(30);
// console.log(newUsers);

// 1. Відсортувати користувачів віком від старшого до молодшого.

// function task65() {
//   const userAge = users.toSorted((age1, age2) => {
//     return age1.age - age2.age;
//   });

//   return userAge;
// }

// console.table(task65());

// 1. Знайти користувачів з електронною поштою на домені gmail.com.

// function task66(setEmail) {
//   const userEmail = users.filter(item => {
//     return item.email.endsWith(setEmail);
//   });
//   return userEmail;
// }

// const newEmail = task66('gmail.com');

// console.table(newEmail);

// 1. Знайти всіх жінок серед користувачів.

// function task67(womanGender) {
//   const findWoman = users.filter(item => {
//     return item.gender === womanGender;
//   });

//   return findWoman;
// }

// const newWoman = task67('Female');

// console.table(newWoman);

// 1. Порахувати кількість неактивних користувачів.

// function task68() {
//   const notActive = users.filter(item => {
//     return !item.isActive;
//   }).length;

//   return notActive;
// }

// console.table(task68());

// 1. Відсортувати користувачів на прізвище в алфавітному порядку.
// function task69() {
//   const sortUsers = users.toSorted((user1, user2) => {
//     return user1.lastName.localeCompare(user2.lastName);
//   });

//   return sortUsers;
// }

// console.table(task69());

// 1. Знайти користувача з найбільшим віком.

// function task70() {
//   const oldUser = users.toSorted((user1, user2) => {
//     return user2.age - user1.age;
//   })[0];
//   return oldUser;
// }

// console.table(task70());

// 1. Перевірити, чи є хоча б один користувач із прізвищем "Johnson".

// function task71(userName) {
//   const oneUser = users.some(item => {
//     return item.lastName === userName;
//   });

//   return oneUser;
// }

// const searchUser = task71('Johnson');

// console.log(searchUser);

// 1. Створити новий масив, який містить лише імена користувачів.

// function task72() {
//   const newUsers = users.map(item => {
//     const userName = `${item.firstName} ${item.lastName}`;
//     return userName;
//   });
//   return newUsers;
// }

// console.log(task72());

// function task72() {
//   const newUsers = users.map(item => {
//     return `<h1>${item.firstName} ${item.lastName}</h1>`;
//   });
//   return newUsers;
// }

// console.log(task72());

// 1. Створити масив з інформацією про користувачів у форматі JSON.

// function task73() {
//   const newsArray = users.map(item => {
//     return `{
//     "firstName": "${item.firstName}",
//     "lastName": "${item.lastName}",
//     "age": ${item.age},
//     "email": "${item.email}",
//     "isActive": ${item.isActive},
//     "gender": "${item.gender}"
//     }`;
//   });

//   return newsArray;
// }

// console.log(task73().join('_\n'));

// 1. Знайти індекс першого користувача під назвою "Jane".

// function task74(userName) {
//   const findUser = users.findIndex(item => {
//     return item.firstName === userName;
//   });
//   return findUser;
// }

// const newUser = task74('Amelia');
// console.log(newUser);

// 1. Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.

// function task75(youngAge, oldAge, userGender) {
//   const newMen = users.filter(item => {
//     const manUser = item.gender === userGender;
//     const manYoungAge = item.age > youngAge;
//     const manOldAge = item.age < oldAge;
//     return manUser && manYoungAge && manOldAge;
//   });
//   return newMen;
// }

// const newArrayMen = task75(30, 50, 'Male');

// console.table(newArrayMen);

// 1. Порахувати загальну кількість користувачів.

// function task76() {
//   const newArray = users.length;
//   return newArray;
// }
// console.log(task76());

// 1. Знайти всіх користувачів з активним статусом та віком старше 25 років.

// function task77(setAge) {
//   const newUsers = users.filter(item => {
//     const activeUsers = item.isActive;
//     const userAge = item.age > setAge;
//     return activeUsers && userAge;
//   });
//   return newUsers;
// }

// const newArrayUsers = task77(25);
// console.table(newArrayUsers);

// 1. Знайти користувачів із прізвищем, що починається на букву "S".

// function task78(setLetter) {
//   const newUsers = users.filter(item => {
//     const userLetter = item.lastName.startsWith(setLetter);
//     return userLetter;
//   });
//   return newUsers;
// }

// const newObj = task78('S');
// console.table(newObj);

// 1. Відсортувати користувачів за віком (від молодшого до старшого).

// function task79() {
//   const sortUsers = users.toSorted((user1, user2) => {
//     return user1.age - user2.age;
//   });
//   return sortUsers;
// }

// console.table(task79());

// 1. Знайти всіх користувачів електронної пошти на домені yahoo.com.
// 1. Знайти користувача з найменшим віком.
// 1. Перевірити, чи є хоча б один користувач з ім'ям John.
// 1. Створити новий масив, що містить лише прізвища користувачів.
// 1. Створити масив з інформацією про користувачів як рядкових описів.
// 1. Знайти індекс користувача з активним статусом і віком більшим або рівним 40
//    років.
