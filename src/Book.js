import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */
export function Book(title, year, user, authors) {
  this.title = title;
  this.authors = authors;
  this.year = year;
  this.likedUsers = [];
  this.publicationBy = user;

  Object.defineProperty(this, 'suggestedBooks', {
    get() {
      const allBooks = this.authors.reduce((resultArray, { books }) => {
        return resultArray.concat(books);
      }, []);

      const uniqueBooks = new Set(allBooks);
      const uniqueBooksInArray = [];
      uniqueBooks.forEach((item) => uniqueBooksInArray.push(item));

      const removedThisBook = uniqueBooksInArray.filter((book) => {
        if (book !== this) {
          return book
        }
      });
      const uniqueBooksTitles = removedThisBook.map(({ title }) => title);
      return uniqueBooksTitles.join(', ');
    }
  });

  Object.defineProperty(this, 'suggestedPublicators', {
    get() {
      const allBooks = this.authors.reduce((resultArray, { books }) => {
        return resultArray.concat(books);
      }, []);
      const uniqueBooks = new Set(allBooks);
      const uniqueBooksInArray = [];
      uniqueBooks.forEach((item) => uniqueBooksInArray.push(item));

      const allPublicators = uniqueBooksInArray.map(({ publicationBy }) => publicationBy);

      const uniquePublicators = new Set(allPublicators);
      const uniquePublicatorsInArray = [];
      uniquePublicators.forEach((item) => uniquePublicatorsInArray.push(item));

      const removedThisPublicator = uniquePublicatorsInArray.filter((person) => {
        if (person != this.publicationBy) {
          return person
        }
      });

      const uniquePublicatorsNames = removedThisPublicator.map(({ name }) => name);


      return uniquePublicatorsNames.join(', ');
    }
  });

  this.publicationBy.myBooks.push(this);
  this.authors.forEach(({ books }) => books.push(this));
}
