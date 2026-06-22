const HomebooksContainer = document.querySelector(".books_container")


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
