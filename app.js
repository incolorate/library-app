let booksContainer = document.querySelector(".books-container");
let myLibrary = [];
// New book query selectors
let addBookTitle = document.querySelector("#title");
let addBookAuthor = document.querySelector("#author ");
let addBookStatus = document.querySelector("#status");
let addBook = document.querySelector("#add-book");
// Tesst
let newBook = new Book("You don't know JS", "Kyle S.", "Read");
let newBook1 = new Book("You don't know JS 1", "Kyle S.", "Read");
let newBook2 = new Book("You don't know JS 2", "Kyle S.", "Read");
addBookToLibrary(newBook);
addBookToLibrary(newBook1);
addBookToLibrary(newBook2);

// Create new book
function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

// Push book to myLibrary
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Display all books in my library
function displayBooks(array) {
  for (i = 0; i < array.length; i++) {
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookRead = document.createElement("p");
    bookTitle.innerText = array[i].title;
    bookAuthor.innerText = array[i].author;
    bookRead.innerText = array[i].read;
    booksContainer.appendChild(bookTitle);
    booksContainer.appendChild(bookAuthor);
    booksContainer.appendChild(bookRead);
  }
}

// Add new book dynamically

function createNewBook() {
  let newBook = new Book(addBookTitle.value, addBookAuthor.value, "read");
  addBookToLibrary(newBook);
  displayBooks(myLibrary);
}

addBook.addEventListener("click", createNewBook);
