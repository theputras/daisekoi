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
                loginForm.addEventListener('submit', async (e) => {
                    e.preventDefault(); // Prevent default form submission
                    const username = document.getElementById('username').value;
                    const password = document.getElementById('password').value;
    
                    // Send POST request to backend
                    const response = await fetch('/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: new URLSearchParams({ username, password })
                    });
    
                    if (response.ok) {
                        const result = await response.text();
                        document.body.innerHTML = result; // Display response
                    } else {
                        const error = await response.text();
                        alert(error); // Show error message
                    }
                });
});

    
    
//Verifikasi password



