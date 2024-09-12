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
function newBook(genre, rating) {
  const task49 = books
    .filter(item => {
      return item.genre === genre && item.rating === rating;
    })
    .toSorted((book1, book2) => {
      return book1.year - book2.year;
    })
    .slice(-3);

  return task49;
}

const newBookGenre = newBook('Historical', 4.7);

console.table(newBookGenre);
