document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. Dark Mode Logic ---
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeBtn.innerText = "☀️ Light";
        }

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeBtn.innerText = "☀️ Light";
            } else {
                localStorage.setItem('theme', 'light');
                themeBtn.innerText = "🌙 Mode";
            }
        });
    }

    // --- 2. Mobile Menu Logic ---
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.navbar nav');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- 3. Search Bar Logic ---
    const searchBtn = document.querySelector('.hero-search .btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = document.querySelector('.hero-search input').value;
            alert(query ? "Searching for: " + query : "Please enter a destination!");
        });
    }

    // --- 4. Booking Form Logic ---
    const bookingForm = document.getElementById('travelBookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('fullName').value;
            const destination = document.getElementById('destination').value;
            if (name && destination) {
                alert(`Thank you, ${name}! Your booking for ${destination} is confirmed.`);
                bookingForm.reset();
            } else {
                alert('Please fill in all details.');
            }
        });
    }

    // --- 5. Sign In Logic ---
    const authBtn = document.getElementById('auth-btn');
    if (authBtn) {
        authBtn.addEventListener('click', function (e) {
            e.preventDefault();
            // येथे तुम्ही पॉप-अप किंवा नवीन पेजवर नेऊ शकता
            const userChoice = prompt("Sign In:\n1. Click OK to simulate login\n2. Cancel to exit");
            if (userChoice !== null) {
                authBtn.innerText = "Logged In";
                authBtn.style.color = "green";
                alert("Successfully Signed In!");
            }
        });
    }
});