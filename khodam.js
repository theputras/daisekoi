const resetFormButton = document.getElementById('resetFormButton');
const loadingIndicator = document.getElementById('loadingIndicator');
const searchInput = document.getElementById('search');
const khodamInputs = document.querySelectorAll('#khodam input');
//submit
const output = document.querySelector('.output-container');
const khodamContainer = document.querySelector('.form-container');
const khodam = document.getElementById('khodam');
const resetButton = document.getElementById('resetButton');
const result = document.getElementById('hasil-khodam');
const resultKhodam = document.getElementById('result');
const footer = document.querySelector('.footer');
const img = document.getElementById('img');
const nextButton = document.getElementById('nextButton');
const buttonDivs = document.getElementById('button');
const alert1 = document.getElementById('alert1');
const alerthapus1 = document.getElementById('alerthapus1');
const title1 = document.getElementById('title1');




//Reset form
    function resetForm(form) {
      form.reset();
      form.querySelectorAll('input, select, textarea').forEach(input => {
        input.value = '';
        input.removeAttribute('required');
      });
    }

    resetFormButton.addEventListener('click', () => {
      resetForm(khodam);
      localStorage.removeItem('form1Data');
      title1.style.display = 'none';
      alerthapus1.style.display = 'block';
      setTimeout(() => {
        alerthapus1.style.display = 'none';
        title1.style.display = 'block';
      }, 2000); // show the alert for 2 seconds
    });



// ...
const errorElement = document.getElementById('error-message');
function handleError(error) {
  
  errorElement.style.display = 'flex';
  errorElement.textContent = 'Website Error: ' + error.message;
  khodamContainer.style.display = 'none';
}


window.onerror = function(error) {
  handleError(error);
};

const textContainer = document.getElementById('text-container');
const texts = ['Website Cek Khodam', 'Silakan cek Khodammu disini'];
let currentIndex = 0;
let currentText = '';
let currentCharIndex = 0;
let typingInterval;
let delayInterval;

function typeText() {
  if (currentCharIndex < currentText.length) {
    textContainer.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    typingInterval = setTimeout(typeText, 100);
  } else {
    currentCharIndex = 0;
    delayInterval = setTimeout(function() {
      textContainer.textContent = ''; // clear text
      currentIndex = (currentIndex + 1) % texts.length; // loop to next text
      currentText = texts[currentIndex];
      typeText();
    }, 1000); // 1 second delay
  }
}

currentText = texts[currentIndex];
typeText();

document.querySelectorAll('.btn-submit, .form-left-title .btn-submit, .btn-reset').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('clicked');
  });
});
//submit
// Form 1 (Formulir1)
// Initialize the forms
khodam.classList.add('show');
footer.classList.add('show');
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('form1Data');
  localStorage.removeItem('form2Data');
});



resetButton.addEventListener('click', () => {
  location.reload();
});


// Form 2 (Formulir2)
const submitButton = document.getElementById('submitButton');

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitButton.click();
  }
});


submitButton.addEventListener('click', e => {
  e.preventDefault();
  let nama = $('#search').val();
  if (nama === '') {
    alert('Masukkan nama terlebih dahulu!');
  } else {
  progressBar.style.width = "0%";  
  // Simulasi loading (misalnya, fetch data dari server)
  khodamInputs.forEach(input => {
    input.disabled = true;
  });
  setTimeout(() => {
    progressBar.style.transition = 'width 3s ease-in-out';
   progressBar.style.width = "100%";   
    alert1.style.display = 'block';
    title1.style.display = 'none';  
    textContainer.style.display = 'none';  
    buttonDivs.style.display = 'none';
    // Show loading indicator
    loadingIndicator.classList.add('loading-animation');
    loadingIndicator.style.display = 'flex';
     // Run the cekKhodam function
     cekKhodam(e);
                  //Success Warning
                  alert1.style.display = 'none';
                  alert1.style.display = 'block';
                    // Hide form 1 and show form 2
                    setTimeout(() => {
                      loadingIndicator.classList.remove('loading-animation');
                      loadingIndicator.style.display = 'none';
                      
                      // Hide form 1 and show form 2
                      khodam.classList.remove('show');
                      khodam.style.display = 'none';
                      result.classList.add('show');                      
                    }, 1000); // Setelah 1 detik, tampilkan output
        
     

    setTimeout(() => {
      progressBar.style.transition = 'width 3s ease-in-out';
    progressBar.style.display ='none';
    // Submit combined data to both URLs
  
    }, 3000); // Setelah 3 detik, sembunyikan progress bar
  }, 500  ); // Setelah 1 detik, perbarui progress bar ke 100%
  }
  

  
});

function cekKhodam(event) {
  event.preventDefault();
  let nama = $('#search').val();
  if (nama === '') {
    alert('Masukkan nama terlebih dahulu!');
  } else {
    let status = [
    'kosong',
    
    ]
    const randomStatus = Math.floor(Math.random() * status.length);
    
    if (randomStatus === 0) {
        let khodam = [
            'Keyboard Mechanical',
            'Harimau Sunda', 
            'Ular Piton', 
            'Ikan Mas',
            'Iwak Lele', 
            'Iwak Gatul',
            'Kucing Garong',
            'Ayam Jago',
            'Bebek Peking',
            'Kambing Hitam',
            'Kelinci Loncat',
            'Burung Hantu',
            'Lebah Suka',
            'Panda Raksasa',
            'Merak Kalem',
            'Kijang Kejang',
            'Kijang Innova',
            'Avanza',
            'Panther',
            'Kucing Lincah',
            'Ikan Pari',
            'Lemper Jawa',
            'Manchester United',
            'Oli Samping', 
            'Manusia Silver',
            'Tikus Berdasi',
            'Banteng Merah',
            'Sekop',
            'Presiden Konoha',
            'Tang Handy Many',
            'Lebah Ganteng',
            'Roger Sumatera',
            'Semut Bersepatu',
            'Ular Berkacamata',
            'Cacing Kepanasan',
            'Kecoa Manis',
            'Buwung Puyuh',
            'Bjirr',
            'Beliau',
            'Komodo Galau',
            'Kosong',
            'Anas Hisyam',
            'Knalpot Mberr',
            'Kosong',
            'City Pop',
            'Joni'
            
            
        ];
        const random = Math.floor(Math.random() * khodam.length);
        
        $(resultKhodam).html(`${nama.toUpperCase()} - Khodam Kamu (<span id="resultKhodam">${khodam[random]}</span>)`);
        $('#search').val('');
    }
    else {
        $(resultKhodam).html(`${nama.toUpperCase()} - KOSONG`);
        $('#search').val('');
    }
  }
}


