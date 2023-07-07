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

//EVENT LISTENERS START
OPEN_MODAL_BTN.onclick = function () {
    MODAL.style.display = "flex";
}

//close modal when clicking outside of it
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
})


// FUNCTIONS START

let myLibrary = [];

function closeModalAndResetForm() {
    MYFORM.reset()
    MODAL.style.display = "none";
};

function Book(name, author, pages, read) {

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {

    let readButton;
    
    // use different class for button if book is read or not
    if (book.read) {
        readButton = `<button class="read-notread read">Read</button>`;
    } else {
        readButton = `<button class="read-notread">Not Read</button>`;
    }

    BOOK_GRID.insertAdjacentHTML(
        "beforeend",
        `<div class="book">
            <span class="delete-card material-symbols-outlined">close</span>
            <div class="container-card">
                <div class="label title">Title</div>
                <div id="title-card">${book.name}</div>
            </div>
            <div class="container-card">
                <div class="label author">Author</div>
                <div id="author-card">${book.author}</div>
            </div>
            <div class="container-card">
                <div class="label pages">Pages</div>
                <div id="pages-card">${book.pages}</div>
            </div>
            <div class="container-card">
                ${readButton}
            </div>
        </div>`
    );

    let index = myLibrary.length-1;

    //associate DOM elements with actual book object via data-index attribute
    let recentBook = BOOK_GRID.lastChild;
    recentBook.setAttribute("data-index",index)

    let iconOfRecentBook = document.querySelector("#main :last-child > span")
    iconOfRecentBook.setAttribute("data-index", index)

    let readToggleOfRecentBook = document.querySelector("#main :last-child :last-child > button")
    readToggleOfRecentBook.setAttribute("data-index", index)
    console.log(readToggleOfRecentBook)


    // add event listener to delete respective book 
    iconOfRecentBook.addEventListener("click", () => {

        let index = iconOfRecentBook.getAttribute("data-index");

        let associatedCard = document.querySelectorAll(`.book[data-index="${index}"]`)
        associatedCard.forEach( (element) => element.remove())
    });

    // add event listener to change read status
    readToggleOfRecentBook.addEventListener("click", () => {

        readToggleOfRecentBook.classList.toggle("read")

        if (readToggleOfRecentBook.textContent == "Read") {
            
            readToggleOfRecentBook.textContent = "Not Read"
        } else {
            readToggleOfRecentBook.textContent = "Read"
        };

    })

};



