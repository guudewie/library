/****************** TO DO *************************/

// event listener delete book
// display books in array
// add book to array




//query selectors
OPEN_MODAL_BTN = document.getElementById("add-book")
MODAL = document.getElementById("modal")
ADD_BOOK = document.getElementById("form-submit")

MYFORM = document.getElementById("myform") //form start
NAME = document.getElementById("name")
AUTHOR = document.getElementById("author")
PAGES = document.getElementById("pages")
READ = document.getElementById("read")


//event listener
OPEN_MODAL_BTN.onclick = function () {
    MODAL.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target == MODAL) {
      MODAL.style.display = "none";
    }
}

MYFORM.addEventListener("submit", function(event) {

    let newBook = new Book(NAME.value, AUTHOR.value, PAGES.value, READ.value);
    closeModalAndResetForm();
    event.preventDefault();

})


function closeModalAndResetForm() {
    MYFORM.reset()
    MODAL.style.display = "none";
    
};


let myLibrary = [];



// the constructor...
function Book(name, author, pages, read) {

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

}



// do stuff here
function addBookToLibrary() {

}