import { User } from './User.js';
import { Book } from './Book.js';
import { Author } from './Author.js';

let user1 = new User('Test1', new Date());
let user2 = new User('Test2', new Date());
let user3 = new User('Test3', new Date());

console.log(user1);
user1.addToFriends(user2);
user1.addToFriends(user3);

let author1 = new Author('Author1', new Date());
let author2 = new Author('Author1', new Date());

console.log(author1);

let book1 = new Book('Book1', 2022, user1, [author1, author2]);
let book2 = new Book('Book2', 2021, user1, [author1, author2]);
let book3 = new Book('Book3', 2021, user1, [author1, author2]);
let book4 = new Book('Book4', 2021, user2, [author1, author2]);
console.log(book1);

user1.likeBook(book1);


