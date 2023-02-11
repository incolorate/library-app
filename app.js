let booksContainer = document.querySelector(".books-container");
let myLibrary = [];
// New book query selectors
let addBookTitle = document.querySelector("#title");
let addBookAuthor = document.querySelector("#author ");
let addBookStatus = document.querySelector("#status");
let addBook = document.querySelector("#add-book");
// Tesst

// Create new book
function Book(title, author, read, id) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.id = id;
  this.remove = function (id) {
    delete myLibrary[id];
  };
}

// Push book to myLibrary
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//

// Display all books in my library
function displayBooks(array) {
  for (i = 0; i < array.length; i++) {
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookRead = document.createElement("p");
    let removeButton = document.createElement("button");
    let divForBook = document.createElement("div");
    array[i].id = i;
    bookTitle.innerText = array[i].title;
    bookAuthor.innerText = array[i].author;
    bookRead.innerText = array[i].read;
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookRead);
    bookContainer.appendChild(removeButton);
  }
}

// Remove the book button
function removeBook(x) {
  myLibrary[x].remove(myLibrary[x].id);
}

// Add new book dynamically
function createNewBook() {
  let bookStatus = "";
  if (addBookStatus.checked) {
    bookStatus = "Read";
  } else {
    bookStatus = "Not read yet";
  }
  let newBook = new Book(addBookTitle.value, addBookAuthor.value, bookStatus);
  addBookToLibrary(newBook);
  displayBooks(myLibrary);
}

addBook.addEventListener("click", createNewBook);
