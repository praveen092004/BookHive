const passwordInput = document.getElementById("password")
const toggleBtn = document.getElementById("toggle-password")

toggleBtn.addEventListener("click", function() {
    if( passwordInput.type === "password") {
        passwordInput.type = "text"
        this.textContent = "👁"
    } else {
        passwordInput.type = "password"
        this.textContent = "⌣"
    }
})