// Combined code

// Form 1 (submit-to-form)
const form1 = document.forms['submit-to-form'];
const scriptURL1 = 'https://script.google.com/macros/s/AKfycbyZrfJCK1ST6AK7myOY3p-rIJRFfBCiOTAVa7phmfEjOyJJXDx3igdp6logFYbRg2GxIQ/exec';
const success1 = document.getElementById('success');
const progressBar1 = document.getElementById('progressBar');
const Formulir1 = document.getElementById('Formulir1');
const Formulir2 = document.getElementById('Formulir2');

form1.addEventListener('submit', e => {
  e.preventDefault()
  // Simulasi loading (misalnya, fetch data dari server)
  setTimeout(() => {
    progressBar1.style.transition = 'width 5s ease-in-out';
    progressBar1.style.width = "100%";
    setTimeout(() => {
    }, 3000); // Setelah 3 detik, sembunyikan progress bar
  }, 1000); // Setelah 1 detik, perbarui progress bar ke 100%
  fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
  .then(response =>{
    // Hide form 1 and show form 2
    Formulir1.style.display = 'none';
    Formulir2.style.display = 'flex';
    Formulir2.style.flexDirection = 'column';
    Formulir2.style.alignItems = 'start';
    Formulir2.style.gap = '20px';
  })
    .catch(error => console.error('Error!', error.message))
});

// Form 2 (submit-to-survey)
const form2 = document.forms['submit-to-survey'];
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyj3WNoivM5zrZwhMRVXRKV1j-tcsfSE7Pt-GKaecHzIbX2l3onkpQuN3wYEvYrO8mcCw/exec';
const url2 = './output.html';
const success2 = document.getElementById('success');
const progressBar2 = document.getElementById('progressBar2');

form2.addEventListener('submit', e => {
  e.preventDefault()
  // Simulasi loading (misalnya, fetch data dari server)
  setTimeout(() => {
    progressBar2.style.transition = 'width 3s ease-in-out';
    progressBar2.style.width = "100%";
    setTimeout(() => {
    }, 3000); // Setelah 3 detik, sembunyikan progress bar
  }, 1000); // Setelah 1 detik, perbarui progress bar ke 100%
  fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
    .then(response =>{
      window.location.replace(url2);
    })
    .catch(error => console.error('Error!', error.message))
});

// Hide form 2 on page load
Formulir2.style.display = 'none';

// Show form 1 on page load
Formulir1.style.display = 'flex';
Formulir1.style.flexDirection = 'column';
Formulir1.style.alignItems = 'start';
Formulir1.style.gap = '20px';