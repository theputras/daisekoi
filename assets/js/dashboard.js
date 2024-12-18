// Check Login

window.onload = () => {
    // Cek apakah sessionStorage memiliki 'username' yang menandakan login
    if (!sessionStorage.username) {
        // Jika tidak ada, arahkan ke halaman login tanpa memperlihatkan halaman dashboard
        window.location.replace("/d@1s3k01");
    }
};


// // Menampilkan data dari sessionStorage di konsol
// const displaySessionStorageData = () => {
//     console.log("Data di sessionStorage:");
//     console.log("Username:", sessionStorage.getItem('username'));
// };

// // Panggil fungsi untuk menampilkan data
// displaySessionStorageData();



// User HTML Show

// Mengambil username dari sessionStorage yang sudah disimpan saat login
const storedUsername = sessionStorage.getItem("username"); // Mengambil username dari sessionStorage

// Fungsi untuk menampilkan data pengguna dari sessionStorage dan JSON
async function fetchAndDisplayUserData() {
    // Target container
    const container = document.getElementById("userContainer");
    const containerMobile = document.getElementById("userContainerMobile");

    // Cek apakah username ada di sessionStorage
    if (storedUsername) {
        try {
            // Ambil data dari file JSON
            const response = await fetch("/assets/json/awokwa.json");
            const data = await response.json();

            // Cari role berdasarkan username
            const user = data.find(user => user.username === storedUsername);

            if (user) {
                // Buat elemen baru untuk desktop
                const userDivDesktop = document.createElement("div");
                userDivDesktop.innerHTML = `
                    <div class="text-right"><strong>${user.username}</strong></div>
                    <div class="text-right">${user.role}</div>
                `;
                container.appendChild(userDivDesktop);

                // Buat elemen baru untuk mobile
                const userDivMobile = document.createElement("div");
                userDivMobile.innerHTML = `
                    <div class="text-right"><strong>${user.username}</strong></div>
                    <div class="text-right">${user.role}</div>
                `;
                containerMobile.appendChild(userDivMobile);
            } else {
                 container.innerHTML =
                    '<div class="text-center text-gray-500">Pengguna tidak ditemukan.</div>';
                containerMobile.innerHTML =
                    '<div class="text-center text-gray-500">Pengguna tidak ditemukan.</div>';
            
            }
        } catch (error) {
            console.error("Error fetching JSON:", error);
            container.innerHTML =
                '<div class="text-center text-gray-500">Terjadi kesalahan saat mengambil data pengguna.</div>';
            containerMobile.innerHTML =
                '<div class="text-center text-gray-500">Terjadi kesalahan saat mengambil data pengguna.</div>';
        }
    } else {
        container.innerHTML =
            '<div class="text-center text-gray-500">Tidak ada data pengguna yang ditemukan.</div>';
        containerMobile.innerHTML =
            '<div class="text-center text-gray-500">Tidak ada data pengguna yang ditemukan.</div>';
    
    }
}

// Panggil fungsi saat halaman dimuat
fetchAndDisplayUserData();


    // Menambahkan event listener untuk logout
    
    
    document.getElementById('logout').addEventListener('click', () => {
        // Hapus data pengguna dari sessionStorage
        sessionStorage.removeItem("username");
        // Arahkan pengguna ke halaman login
        window.location.href = "/"; // Ganti dengan URL halaman login Anda
    });



//Grettings

// Fungsi untuk menentukan kondisi waktu
function getWaktuKondisi() {
    const currentHour = new Date().getUTCHours() + 7; // GMT +7
    if (currentHour >= 2 && currentHour < 9) {
        return "Pagi"; // Jam 2 sampai jam 9
    } else if (currentHour >= 9 && currentHour < 15) {
        return "Siang"; // Jam 9 sampai jam 15
    } else if (currentHour >= 15 && currentHour < 17) {
        return "Sore"; // Jam 15 sampai jam 17
    } else {
        return "Malam"; // Jam 17 sampai jam 2
    }
}



// Ambil username dari sessionStorage
const username = sessionStorage.getItem("username") || "Pengguna"; // Default ke "Pengguna" jika tidak ada

// Dapatkan kondisi waktu
const waktuKondisi = getWaktuKondisi();

// Ambil data dari JSON dan tampilkan pesan
async function displayGreeting() {
    try {
        const response = await fetch("/assets/json/awokwa.json");
        const data = await response.json();

        // Cari pengguna berdasarkan username
        const user = data.find(user => user.username === username);

        // Target elemen untuk menampilkan pesan
        const greetingMessage = document.getElementById("greetingMessage");

        if (user) {
            // Tampilkan pesan dengan nama dan role
            greetingMessage.innerHTML = `Selamat ${waktuKondisi}, <strong>${user.nama}</strong>`;
        } else {
            // Jika pengguna tidak ditemukan, tampilkan pesan default
            greetingMessage.innerHTML = `Selamat ${waktuKondisi}, <strong>${username}</strong> (Role tidak ditemukan)`;
        }
    } catch (error) {
        console.error("Error fetching JSON:", error);
        const greetingMessage = document.getElementById("greetingMessage");
        greetingMessage.innerHTML = `Terjadi kesalahan saat mengambil data pengguna.`;
    }
    
    
}

// Panggil fungsi untuk menampilkan pesan saat halaman dimuat
displayGreeting();


//Show on Profiles

// Mengambil username dan role dari sessionStorage yang sudah disimpan saat login
const storedRole = sessionStorage.getItem("role"); // Mengambil role dari sessionStorage

// Fungsi untuk mengambil data dari JSON dan menampilkan sesuai username dan role dari sessionStorage
async function fetchAndProfile() {

// Target container
const container = document.getElementById("kaka");
// Cek apakah username ada di sessionStorage
if (storedUsername) {
    try {
        // Ambil data dari file JSON
        const response = await fetch("/assets/json/awokwa.json");
        const data = await response.json();

        // Cari role berdasarkan username
        const user = data.find(user => user.username === storedUsername);

        if (user) {
            const userDiv = document.createElement("div");
            userDiv.className =
                "p-4 bg-gray-50 border rounded-md shadow text-sm font-semibold max-w-auto";

            userDiv.innerHTML = `
                <div class="text-left w-auto"><strong>Username:</strong> ${user.username}</div>
                <div class="text-left w-auto"><strong>Name:</strong> ${user.nama}</div>
                <div class="text-left w-auto"><strong>Email:</strong> ${user.email}</div>
                <div class="text-left w-auto"><strong>Role:</strong> ${user.role}</div>
            `;
            container.appendChild(userDiv);
        } else {
            container.innerHTML =
            '<div class="text-left text-gray-500">Tidak ada data yang cocok dengan username dan role ini.</div>';
        
        }
    } catch (error) {
        console.error("Error fetching JSON:", error);
        container.innerHTML =
            '<div class="text-center text-gray-500">Terjadi kesalahan saat mengambil data pengguna.</div>';
        containerMobile.innerHTML =
            '<div class="text-center text-gray-500">Terjadi kesalahan saat mengambil data pengguna.</div>';
    }
} else {
    container.innerHTML =
        '<div class="text-center text-gray-500">Tidak ada data pengguna yang ditemukan.</div>';
    containerMobile.innerHTML =
        '<div class="text-center text-gray-500">Tidak ada data pengguna yang ditemukan.</div>';

}
}

// Panggil fungsi saat halaman dimuat
fetchAndProfile();


//JavaScript (Menangani Klik dan Menampilkan Konten) yang tersedia di Navigasi
document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen navigasi
    const homeLink = document.getElementById("home");
    const profileLink = document.getElementById("profile");
    const usersLink = document.getElementById("users");

    // Ambil elemen konten
    const homeContent = document.getElementById("homeContent");
    const profileContent = document.getElementById("profileContent");
    const usersContent = document.getElementById("usersContent");

    // Fungsi untuk menampilkan konten yang sesuai
    const showContent = (contentToShow) => {
        // Sembunyikan semua konten
        homeContent.classList.add("hidden");
        profileContent.classList.add("hidden");
        usersContent.classList.add("hidden");

        // Tampilkan konten yang dipilih
        contentToShow.classList.remove("hidden");
    };

    // Event listener untuk navigasi
    homeLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(homeContent); // Tampilkan konten home
    });

    profileLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(profileContent); // Tampilkan konten profil
    }); 
    usersLink.addEventListener("click", (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        showContent(usersContent); // Tampilkan konten profil
    });

    // Tampilkan konten home secara default saat halaman dimuat
    showContent(homeContent);
});



//Side bar menu Mobile
document.addEventListener("DOMContentLoaded", () => {
    const toggleSidebarButton = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");

    // Fungsi untuk toggle sidebar
    const toggleSidebar = () => {
        if (sidebar.classList.contains("-translate-x-full")) {
            sidebar.classList.remove("-translate-x-full");
            sidebar.classList.add("translate-x-0");
            sidebar.setAttribute("aria-hidden", "false");
        } else {
            sidebar.classList.remove("translate-x-0");
            sidebar.classList.add("-translate-x-full");
            sidebar.setAttribute("aria-hidden", "true");
        }
    };

    // Event listener untuk tombol toggle
    toggleSidebarButton.addEventListener("click", toggleSidebar);
});




// Hover Sidebar toggle
const navLinks = document.querySelectorAll('.nav-link');

// Set default active link
navLinks[0].classList.add('text-white', 'bg-[#f4a3ba]');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => {
            nav.classList.remove('text-white');
            nav.classList.remove('text-gray-700');
            nav.classList.remove('bg-[#f4a3ba]');
        });
        this.classList.add('text-white');
        this.classList.remove('text-gray-700');
        this.classList.add('bg-[#f4a3ba]');
    });
});



//Show list data users
const userList = document.getElementById('userList');
    const addUserButton = document.getElementById('addUser');

    let usersData = []; // Variabel untuk menyimpan data pengguna

    // Function to fetch users from JSON file
    async function fetchUsers() {
        try {
            const response = await fetch('/assets/json/awokwa.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            usersData = await response.json(); // Simpan data pengguna ke dalam variabel
            displayUsers(usersData);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    function displayUsers(users) {
        const tbody = document.querySelector('#userList tbody');
        tbody.innerHTML = ''; // Clear existing rows
        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="text-left px-4 py-2 border border-dark">
                    <input class="cursor-pointer" type="checkbox" data-username="${user.username}" data-name="${user.nama || 'N/A'}" ${user.isChecked ? 'checked' : ''}>
                </td>
                <td class="text-left px-4 py-2 border border-dark text-wrap">${user.username}</td>
                <td class="text-left px-4 py-2 border border-dark text-wrap">${user.nama || 'N/A'}</td>
                <td class="text-left px-4 py-2 border border-dark text-wrap">${user.email}</td>
                <td class="text-left px-4 py-2 border border-dark text-wrap">${user.role}</td>
            `;
            tbody.appendChild(tr);
        });
    
    
    }





//Select All
const selectAll = document.getElementById('selectAll');

selectAll .addEventListener('click', () => {
    // Get all checkboxes on the page
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Toggle the checked state of each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAll.checked; // Set each checkbox to the state of the selectAll checkbox
    });
});

// Add event listener to individual checkboxes to update the selectAll checkbox
const individualCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
individualCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        // Check if all individual checkboxes are checked
        const allChecked = Array.from(individualCheckboxes).every(cb => cb.checked);
        selectAll.checked = allChecked; // Update the selectAll checkbox state
    });
});


    
// Function to delete user
async function deleteUser (username) {
    if (confirm(`Are you sure you want to delete ${username}?`)) {
        try {
            const response = await fetch(`/api/users/${username}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                alert(`User ${username} deleted!`);
            } else {
                throw new Error('Error deleting user');
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
    
}

// Function to handle delete button click
async function handleDeleteButtonClick() {
    // Get the checked checkboxes
    const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCheckboxes.length === 0) {
        alert('Please select a user to delete!');
        return;
    }

   
        // Loop through checked checkboxes
        for (const checkbox of checkedCheckboxes) {
            // Get the username from the data-username attribute
            const username = checkbox.dataset.username;

            // Delete the user and wait for the operation to complete
            await deleteUser (username);
        }
        // Refresh the user list after all deletions
        fetchUsers();
    
}

// Event listener for delete button click
document.getElementById('deleteUsers').addEventListener('click', handleDeleteButtonClick);


  // Event listener untuk menampilkan form
  document.getElementById('addUsers').addEventListener('click', function() {
    // const userForm = document.getElementById('userForm');
    // // Toggle visibility
    // userForm.classList.toggle('hidden');
    
    alert(`Fungsi masih belum bisa`);
});
// Function to add user
addUserButton.onclick = async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, role: 'user' }) // Default role
    });

    if (response.ok) {
        alert(`User  ${username} added!`);
        fetchUsers(); // Refresh the user list
    } else {
        alert('Error adding user');
    }
};
    // Fetch users on page load
    fetchUsers();
    
    
  // Event listener untuk edit form
  document.getElementById('editUserss').addEventListener('click', function() {
    // const userForm = document.getElementById('userForm');
    // // Toggle visibility
    // userForm.classList.toggle('hidden');
    
    alert(`Fungsi masih belum bisa`);
});