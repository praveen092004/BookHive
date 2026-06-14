const HomebooksContainer = document.querySelector(".books_container")

function createBookCard(book) {
    return `
        <article class="book-card" data-id="${book.id}">
            <img src="${book.image}" alt="${book.title}" loading="lazy">
            <h3>${book.title}</h3>
            <p class="author">${book.author}</p>
            <p class="price">
                    ₹${book.price}
                    <small><s>₹${book.originalPrice}</s></small>
            </p>
            <button
                class="add-to-cart"
                data-id="${book.id}"
                ${!book.inStock ? "disabled" : ""}
            >
                ${book.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
        </article>
    `
}

function renderBook(bookList) {
    if (!HomebooksContainer) return;

    const allHTML = bookList.map(book => createBookCard(book)).join("")

    HomebooksContainer.innerHTML = allHTML
}

renderBook(books)

let cartcount = 0
const btn = document.querySelectorAll('.add-to-cart')
const cartCountElement = document.getElementById('cart-count')

btn.forEach(button => {
    button.addEventListener('click', () => {
        cartcount++;
        updateCartCount(cartcount);
    })
})

function updateCartCount(cartcount) {
    if (cartCountElement) {
        cartCountElement.innerHTML = cartcount;
    }
}

btn.addEventListener('click', () => {
    cartcount++;
    updateCartCount(cartcount)
})
