let myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let read = document.querySelector("#status").checked;

  let book = new Book(title, author, read);
  myLibrary.push(book);

  renderBooks();
}

function renderBooks() {
  let booksContainer = document.querySelector(".books-container");
  // Rerender the books every time
  booksContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    //  Get the book from my library
    let currentBook = myLibrary[i];

    // Individual book container
    let bookContainer = document.createElement("div");
    bookContainer.setAttribute("id", `book${i}`);

    // Title
    let title = document.createElement("p");
    title.innerText = currentBook.title;

    // Author
    let author = document.createElement("p");
    author.innerText = currentBook.author;

    // Read status
    let read = document.createElement("p");
    read.innerText = "Read" + (currentBook.read ? " Yes" : "No");

    // Remove a book
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "X";
    removeButton.onclick = function () {
      removeBook(i);
    };

    // Change the read status
    let toggleButton = document.createElement("button");
    toggleButton.innerHTML = "Read";
    toggleButton.onclick = function () {
      toggleRead(i);
    };

    // Al the components to book container
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(read);
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(toggleButton);
    // Book container to BOOKS container

    booksContainer.appendChild(bookContainer);
  }
}

function removeBook(i) {
  myLibrary.splice(i, 1);
  renderBooks();
}

function toggleRead(i) {
  myLibrary[i].read = !myLibrary[i].read;
  renderBooks();
}

document.querySelector("#add-book").addEventListener("click", addBookToLibrary);
