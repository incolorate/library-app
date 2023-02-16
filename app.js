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
  if (title.length > 1 && author.length >= 3) {
    let book = new Book(title, author, read);
    myLibrary.push(book);
  }
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
    title.innerText = `Title: ` + currentBook.title;

    // Author
    let author = document.createElement("p");
    author.innerText = `Author: ` + currentBook.author;

    // Read status
    let read = document.createElement("p");
    read.innerHTML =
      "Read" +
      (currentBook.read
        ? ": <span class=yes>Yes</span>"
        : ": <span class=no>No</span>");

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
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(read);
    bookContainer.appendChild(toggleButton);
    // Add  classes
    bookContainer.classList.add("book-card");
    removeButton.classList.add("remove-button");
    toggleButton.classList.add("read-button");
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

// Toggle add book modal
function toggleModal() {
  let modalButton = document.querySelector(".new-book-container");
  document.querySelector(".modal-button").classList.toggle("rotate");
  document.querySelector(".modal-button").classList.toggle("normal-rotate");
  if (modalButton.style.display == "" || modalButton.style.display == "none") {
    modalButton.style.display = "contents";
  } else if (modalButton.style.display === "contents")
    modalButton.style.display = "none";
}

document.querySelector(".modal-button").addEventListener("click", toggleModal);
document.querySelector("#add-book").addEventListener("click", addBookToLibrary);
