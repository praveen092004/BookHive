const HomebooksContainer = document.querySelector(".books_container")

// function createBookCard(book) {
//     return `
//         <article class="book-card" data-id="${book.id}">
//             <img src="${book.image}" alt="${book.title}" loading="lazy">
//             <h3>${book.title}</h3>
//             <p class="author">${book.author}</p>
//             <p class="price">
//                     ₹${book.price}
//                     <small><s>₹${book.originalPrice}</s></small>
//             </p>
//             <button
//                 class="add-to-cart"
//                 data-id="${book.id}"
//                 ${!book.inStock ? "disabled" : ""}
//             >
//                 ${book.inStock ? "Add to Cart" : "Out of Stock"}
//             </button>
//         </article>
//     `
// }

// function renderBook(bookList) {
//     if (!HomebooksContainer) return;

//     const allHTML = bookList.map(book => createBookCard(book)).join("")

//     HomebooksContainer.innerHTML = allHTML
// }

function attachAddToCartListeners() {

    const buttons = document.querySelectorAll(".add-to-cart")

    buttons.forEach( button => {
        button.addEventListener("click", function() {
            const bookId = parseInt(this.getAttribute("data-id"));
            addToCart(bookId)
        })
    })
}

renderBook(books)
attachAddToCartListeners()

function showLoader() {
    const container = document.getElementById("book-contaier")
    if(container){
        container.innerHTML = `<div class="spinner"></div>`
    }
}

showLoader()

setTimeout(() => {
    renderBook(books)
    attachAddToCartListeners();
}, 500)
