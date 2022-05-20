import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
  this.name = name;
  this.date = date;
  this.myBooks = [];
  this.friends = [];
  this.likes = [];

  this.addToFriends = function (user) {
    if (this.friends.includes(user, 0)) {
      this.friends = this.friends.filter((friendUser) => {
        if (friendUser !== user) {
          return friendUser;
        }
      });
      user.friends = user.friends.filter((friendUser) => {
        if (friendUser !== this) {
          return friendUser;
        }
      })
    } else {
      this.friends.push(user);
      user.friends.push(this);
    }
  };
  this.likeBook = function (book) {
    if (this.likes.includes(book, 0)) {
      this.likes = this.likes.filter((bookItem) => {
        if (bookItem !== book) {
          return bookItem;
        }
      });
      book.likedUsers = book.likedUsers.filter((userItem) => {
        if (userItem !== this) {
          return userItem
        }
      })

    } else {
      this.likes.push(book);
      book.likedUsers.push(this);
    }
  };

  this.removeFriend = this.addToFriends;

  this.unlikeBook = this.likeBook;


  Object.defineProperty(this, 'friendsNames', {
    get() {
      const friendsArrayNames = this.friends.map(({ name }) => {
        return name;
      })
      return friendsArrayNames.join(', ')
    }
  });
  Object.defineProperty(this, 'likedBooks', {
    get() {
      const likesArrayNames = this.likes.map(({ title }) => {
        return title;
      })
      return likesArrayNames.join(', ');
    }
  });
  Object.defineProperty(this, 'publishedBooks', {
    get() {
      const booksArrayNames = this.myBooks.map(({ title }) => title)
      return booksArrayNames.join(', ');
    }
  });
}
