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
}

// Push book to myLibrary
function addBookToLibrary(book) {
  myLibrary.push(book);
}
// Add new book dynamically and push it to myLibrary
function createNewBook() {
  let bookStatus = "";
  if (addBookStatus.checked) {
    bookStatus = "Read";
  } else {
    bookStatus = "Not read yet";
  }
  let newBook = new Book(addBookTitle.value, addBookAuthor.value, bookStatus);
  // Clean the page before rerendering
  booksContainer.innerHTML = "";

  addBookToLibrary(newBook);
  displayBooks(myLibrary);
}

// Display all books in my library
function displayBooks(array) {
  for (i = 0; i < array.length; i++) {
    // create the element for the book
    let bookTitle = document.createElement("p");
    let bookAuthor = document.createElement("p");
    let bookRead = document.createElement("p");
    let removeButton = document.createElement("button");
    let bookContainer = document.createElement("div");
    // Set the id of an object based on the position in the array
    array[i].id = i;
    bookContainer.setAttribute("class", `book${i}`);
    removeButton.setAttribute("value", `${i}`);

    // Book t/a/r to element
    bookTitle.innerText = array[i].title;
    bookAuthor.innerText = array[i].author;
    bookRead.innerText = array[i].read;

    booksContainer.appendChild(bookContainer);
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookRead);
    bookContainer.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
      myLibrary.splice(removeButton.value, 1);
    });
  }
}

addBook.addEventListener("click", createNewBook);
