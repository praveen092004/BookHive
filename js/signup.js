const signupForm = document.querySelector(".signup-form")

signupForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const fullname = document.getElementById("fullname").value.trim()
    const email = document.getElementById("email").value.trim()
    const phone = document.getElementById("phone").value.trim()
    const password = document.getElementById("password").value
    const confirmpassword = document.getElementById("confirm-password").value
    const city = document.getElementById("city").value
    const terms = document.getElementById("terms").checked

    // Name check
    if(fullname.length < 3) {
        alert('Please enter your full name(atleast 3 characters')
        return
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)) {
        alert("Please enter a valid Email Address")
        return;
    }

    // Phone check (10 number, optional field)
    if(phone && !/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits")
        return
    }

    // Password strength 
    if(password.length < 8) {
        alert("Password must be atleast 8 charaters")
        return;
    }

    // Password match
    if(password !== confirmpassword) {
        alert("Password doesn't match! Enter again")
        return
    }

    // Terms check
    if(!terms) {
        alert("Please accept the Terms and Conditions")
        return
    }

    // create user object
    const newUser = {
        fullname: fullname,
        email: email,
        phone: phone,
        city: city,
        signupDate: new Date().toISOString()
    }

    localStorage.setItem("bookhive-user", JSON.stringify(newUser))

    alert(`Welcome to BookHive, ${fullname}!`)

    window.location.href = "index.html"
})