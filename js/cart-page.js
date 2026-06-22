const cartItemsContainer = document.getElementById("cart-items")
const cartTotalElement = document.getElementById("cart-total")
const cartTotalList = document.getElementById("order_list")

const checkoutbtn = document.querySelector(".btn-primary")

checkoutbtn.addEventListener('click', () => {
    if(cart.length === 0) 
        alert("There is nothing in your cart")
    else {
        alert(`Congratulations! Your Ordered Confirmed. total items : ${cart.length} book${cart.length > 1 ? 's': ''}`)
        cart=[]
        saveCart()
        renderCart()
        updateCartCount()
        updateOrderSummary()
    }
})


function renderCart() {
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <tr> <td colspan="6" style = "text-align:center; padding: 40px;">Your Cart is empty.<a href="books.html">Browse books</a>
            </td></tr>`
        cartTotalElement.textContent = "₹0"
        return
    }

    const rowsHTML = cart.map(item => `
        <tr data-id="${item.id}">
            <td>
                <img src="${item.image}" alt="${item.title}" width="60"/>
            </td>
            <td>
                <strong>${item.title}</strong><br />
                <small>${item.author}</small>
            </td>
            <td>₹${item.price}</td>
            <td>
                <input 
                type="number"
                value="${item.quantity}"
                min="1"
                max="10"
                class="qty-input"
                data-id="${item.id}"
                />
            </td>
            <td>₹${item.price * item.quantity}</td>
            <td>
                <button class="remove-btn" data-id="${item.id}">❌</button> 
            </td>
        </tr>
    `).join("")

    cartItemsContainer.innerHTML = rowsHTML

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    cartTotalElement.textContent = `₹${total}`

    attachQuantityListeners()
    updateOrderSummary()
    attachRemoveListeners()
}

// function updateQuantity() {
//     const quantity = document.querySelectorAll(".qty-input").addEventListener('change', (event) => {
//         console.log(event.target.id)
//         update_qtn = cart.find(event.target.id)
//         saveCart();
//         renderCart()
//         updateOrderSummary()
//         console.log('Clicked Quantity :',)
//     })
// }

function updateOrderSummary() {
    if (!cartItemsContainer) return;

    const total = cart.reduce((t, item) => { return t + item.price * item.quantity }, 0);

    cartTotalList.innerHTML = `
    <dt>Subtotal:</dt>
    <dd>₹${total}</dd>

    <dt>Shipping:</dt>
    <dd>FREE</dd>

    <dt>Tax (5% GST):</dt>
    <dd>₹${(total * 0.05).toFixed(2)}</dd>

    <dt><strong>Grand Total:</strong></dt>
    <dd><strong>₹${(total + (total * 0.05)).toFixed(2)}</strong></dd>
    `
}

function attachQuantityListeners() {
    const inputs = document.querySelectorAll(".qty-input")
    inputs.forEach(input => {
        input.addEventListener("change", function () {
            const id = parseInt(this.getAttribut("data-id"))
            const newQty = parseInt(this.value)

            const item = cart.find(i => i.id === id)
            if (item) {
                item.quantity = newQty
                saveCart()
                renderCart()
                updateCartCount()
            }
        })
    })
}

renderCart()
updateOrderSummary();

function attachRemoveListeners() {
    const removebuttons = document.querySelectorAll(".remove-btn")

    removebuttons.forEach(removebtn => {
        removebtn.addEventListener('click', function (event) {
            const button = event.target.closest(".remove-btn")
            const itemId = button.dataset.id;

            console.log("The id is :", itemId);
            cart = cart.filter(book => book.id != itemId)

            saveCart()
            renderCart()
            updateCartCount()
            updateOrderSummary()
        })
    })
}