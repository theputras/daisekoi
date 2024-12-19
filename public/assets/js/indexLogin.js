// dark mode system //

// Select the button
const btnMode = document.querySelector('.btn-mode');

// Check localStorage for saved theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');  // Apply dark mode
        btnMode.classList.add('dark-active');  // Ensure button reflects dark mode state
    }
});

// Toggle dark mode when the button is clicked
btnMode.addEventListener('click', () => {
    btnMode.classList.toggle('dark-active'); // Toggle button active state
    document.body.classList.toggle('dark-mode'); // Toggle dark mode on body
    
    // Save theme preference in localStorage
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    
     
});


// Tombol tampilkan password  
document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');
    const loginForm = document.getElementById('login');

    // Set default icon to eyeClosed and hide eyeOpen
    eyeOpen.classList.add('hidden');
    eyeClosed.classList.remove('hidden');

    togglePassword.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';

        // Toggle Icons
        eyeOpen.classList.toggle('hidden', !isPassword);
        eyeClosed.classList.toggle('hidden', isPassword);
    });
    
                // Handle Form Submission
             
});


//Login Program

window.onload = () => {
    // Cek apakah sessionStorage memiliki 'username' yang menandakan login
    if (!sessionStorage.username) {
        // Jika tidak ada, arahkan ke halaman login tanpa memperlihatkan halaman dashboard
        window.location.replace("/d@1s3k01");
    }
};
// form loading animation
const form = [...document.querySelector('.form').children];
const redirectUrl = '/dashboard'; 
const btnModeSettings = document.querySelector('.Dashboard-container');
const btnModeDashboard = document.getElementById('dashboard');



form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
});

window.onload = () => {
    if (sessionStorage.name) {
        location.href = redirectUrl;
        btnModeSettings.classList.add('show');
          
    }
};



// form validation
const username = document.getElementById('username'); // Check if the username input exists
const password = document.getElementById('password'); // Check if the password input exists
const submitBtn = document.querySelector('.submit-btn'); // Make sure this button exists
const eyeOpen = document.getElementById('eyeOpen');
    const eyeClosed = document.getElementById('eyeClosed');


// Check if username and password inputs are found
if (username && password && submitBtn) {
    eyeOpen.classList.add('hidden');
    eyeClosed.classList.remove('hidden');
 // Handle Enter key press event for form submission
    // Handle button click event
    submitBtn.addEventListener('click', () => {
        loginUser();
    });

    // Handle Enter key press event for form submission
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            loginUser();
        }
    });
const loginUser = () => {
    eyeOpen.classList.add('hidden');
    eyeClosed.classList.remove('hidden');   
    fetch('/api/serverLogin', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        });
};
    
} else {
    console.error('Missing required elements in the DOM');
}

const validateData = (data) => {
    if (data.username) { // Cek apakah username ada
        sessionStorage.username = data.username; // Simpan hanya username
        location.href = redirectUrl; // Arahkan ke URL yang ditentukan
    } else {
        alertBox(data); // Tampilkan alert jika username tidak ada
    }
};

const alertBox = (data) => {
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert');
    alertMsg.innerHTML = data;

    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
};
