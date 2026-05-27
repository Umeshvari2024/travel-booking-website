const USER_KEY = "Wanderlust_User";

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    // already login
    if (localStorage.getItem(USER_KEY)) {

        window.location.href = "index.html";
    }

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        // validation
        if (!email || !password) {

            alert("Please fill all fields");
            return;
        }

        if (password.length !== 6) {

            alert("Password must be 6 digits");
            return;
        }

        // save user
        localStorage.setItem(USER_KEY, email);

        alert("Login Successful ✈️");

        // redirect
        window.location.href = "index.html";

    });

});