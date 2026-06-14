const cartItemsContainer = document.getElementById("cart-items")
const cartTotalElement = document.getElementById("cart-total")

const removebuttons = document.querySelector(".remove-btn")

console.log(removebuttons)

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
    attachRemoveListeners()
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

console.log("Cart page console")

removebuttons.forEach(removebtn => {
    removebtn.addEventListener('click', function(event) {
        const button = event.target.closest(".remove-btn")
        const itemId = button.dataset.id;

        console.log("The id is :", itemId);
    })
})