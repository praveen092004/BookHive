let cart = []

const savedCart = localStorage.getItem("bookhive-cart")
if(savedCart) {
    cart = JSON.parse(savedCart)
}

// Add TO Cart

function addToCart(bookId) {

    const book = books.find(book => book.id === bookId)

    if(!book) {
        alert('Book Not Found')
    }

    if(!book.inStock)
        alert('Sorry, This book is Currently Out of Stock')

    const existingItem = cart.find(item => item.id === bookId)

    if(existingItem) {
        existingItem.quantity += 1;
    }
    else {
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image,
            quantity: 1
        })
    }

    saveCart()

    updateCartCount()

    showNotification(`Added "${book.title}" to cart!`)
}

function saveCart() {
    localStorage.setItem('bookhive-cart', JSON.stringify(cart))
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count')
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    cartCountElement.textContent = totalQuantity
}

// Show Notification
function showNotification(message) {

    const notification = document.createElement("div")
    notification.className = "notification"
    notification.textContent = message

    document.body.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 3000)
}

updateCartCount();