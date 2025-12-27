 
const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  isRead: true,

  getSummary: function () {
    return this.title + " by " + this.author + ", " + this.pages + " pages";
  }
};

 
console.log(book.title);        // Expected: The Hobbit
console.log(book.getSummary()); // Expected: The Hobbit by J.R.R. Tolkien, 310 pages
