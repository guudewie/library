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
BOOK_GRID = document.getElementById("main")

//event listeners
OPEN_MODAL_BTN.onclick = function () {
    MODAL.style.display = "flex";
}



function deleteCard() {

    let cardsDeleteIcons = document.querySelectorAll(".book>span")

    cardsDeleteIcons.forEach(() => {
        addEventListener("click", () => {console.log()})
    });

    //cardToBeDeleted.remove()
}


window.onclick = function(event) {
    if (event.target == MODAL) {
      MODAL.style.display = "none";
    }
}

MYFORM.addEventListener("submit", function(event) {
    let book = new Book(NAME.value, AUTHOR.value, PAGES.value, READ.checked);
    myLibrary.push(book);
    
    addBookToLibrary(book);
    closeModalAndResetForm();

    event.preventDefault();
    deleteCard()
})



function closeModalAndResetForm() {
    MYFORM.reset()
    MODAL.style.display = "none";
};


let myLibrary = [];


function Book(name, author, pages, read) {

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {

    BOOK_GRID.insertAdjacentHTML(
        "beforeend",
        `<div class="book">
            <span class="delete-card material-symbols-outlined">close</span>
            <div class="container-card">
                <div class="label title">Title</div>
                <div id="title-card"">${book.name}</div>
            <div class="container-card">
                <div class="label author">Author</div>
                <div id="author-card">${book.author}</div>
            <div class="container-card">
                <div class="label pages">Pages</div>
                <div id="pages-card">${book.pages}</div>
            <div class="container-card">
                <div class="label read">Read</div>
                <div id="read-card">${book.read}</div>
        </div>`
    );

    let index = myLibrary.length-1;

    //associate DOM element with actual book object
    let recentBook = BOOK_GRID.lastChild;
    recentBook.setAttribute("data-index",index)
    console.log(recentBook)

    // associating index to delete-icon via data-index
    let IconOfRecentBook = document.querySelector("#main :last-child > span")
    IconOfRecentBook.setAttribute("data-index", index)

    IconOfRecentBook.addEventListener("click", () => {

        let index = IconOfRecentBook.getAttribute("data-index");

        let associatedCard = document.querySelectorAll(`.book[data-index="${index}"]`)
        associatedCard.forEach( (element) => element.remove())
    
    });
};



