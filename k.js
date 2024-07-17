// Form 1 (Formulir1)
const form1 = document.getElementById('Formulir1');
const form2 = document.getElementById('Formulir2');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', e => {
  e.preventDefault();
  // Get form 1 data
  const formData1 = new FormData(form1);
  // Save form 1 data to cache
  localStorage.setItem('form1Data', JSON.stringify(Object.fromEntries(formData1)));
  // Hide form 1 and show form 2
  form1.style.display = 'none';
  form2.style.display = 'flex';
  form2.style.flexDirection = 'column';
  form2.style.alignItems = 'start';
  form2.style.gap = '20px';
});
const backButton = document.getElementById('back');

backButton.addEventListener('click', e => {
  e.preventDefault();
  // Hide form 2 and show form 1
  form2.style.display = 'none';
  form1.style.display = 'flex';
  form1.style.flexDirection = 'column';
  form1.style.alignItems = 'start';
  form1.style.gap = '20px';
});

// Form 2 (Formulir2)
const submitButton = document.getElementById('submitButton');
const urlForm1 = 'https://script.google.com/macros/s/AKfycbyZrfJCK1ST6AK7myOY3p-rIJRFfBCiOTAVa7phmfEjOyJJXDx3igdp6logFYbRg2GxIQ/exec';
const urlForm2 = 'https://script.google.com/macros/s/AKfycbyj3WNoivM5zrZwhMRVXRKV1j-tcsfSE7Pt-GKaecHzIbX2l3onkpQuN3wYEvYrO8mcCw/exec';

submitButton.addEventListener('click', e => {
  e.preventDefault();
  // Get form 1 data from cache
  const formData1 = JSON.parse(localStorage.getItem('form1Data'));
  // Get form 2 data
  const formData2 = new FormData(form2);
  
  // Combine form 1 and form 2 data
  const combinedData = new FormData();
  for (const key in formData1) {
    if (formData1.hasOwnProperty(key)) {
      combinedData.append(key, formData1[key]);
    }
  }
  for (const [key, value] of formData2.entries()) {
    combinedData.append(key, value);
  }
  // Simulasi loading (misalnya, fetch data dari server)
  setTimeout(() => {
    progressBar2.style.transition = 'width 3s ease-in-out';
    progressBar2.style.width = "100%";
    setTimeout(() => {
    }, 500); // Setelah 3 detik, sembunyikan progress bar
  }, 500); // Setelah 1 detik, perbarui progress bar ke 100%
  // Submit combined data to both URLs
  fetch(urlForm1, { method: 'POST', body: combinedData })
    .then(response => {
      // Submit to second URL
      fetch(urlForm2, { method: 'POST', body: combinedData })
        .then(response => {
           // Hide form 1 and show form 2
    form.style.display = 'none';
    output.style.display = 'flex';
    //countdown output
      var url = "https://chat.whatsapp.com/Epm3Pet6hid8W99f4TlAjI"; // Ganti dengan URL tujuan Anda
      var count = 5; // Waktu hitung mundur dalam detik
      
      function countDown() {
          if (count > 0) {
              count--;
              var waktu = count + 1;
              document.getElementById('msg').innerHTML =  waktu;
              setTimeout(countDown, 1000); // Memanggil fungsi ini setiap 1 detik
          } else {
              window.location.replace(url); // Mengarahkan pengguna setelah hitung mundur selesai
          }
      }
      
      // Memulai hitung mundur saat halaman dimuat
      countDown();
        })
        .catch(error => console.error('Error!', error.message));
    })
    .catch(error => console.error('Error!', error.message));
});