const inputnama = document.getElementById('nama');
const resetFormButton = document.getElementById('resetFormButton');
const loadingIndicator = document.getElementById('loadingIndicator');
const formRightImg = document.querySelector('.form-right img');
const formRight = document.querySelector('.form-right');
const searchInput = document.getElementById('search');
//submit
const khodam = document.getElementById('khodam');
const resetButton = document.getElementById('resetButton');
const result = document.getElementById('hasil-khodam');
const resultKhodam = document.getElementById('result');
const footer = document.querySelector('.footer');
const img = document.getElementById('img');
const nextButton = document.getElementById('nextButton');
const buttonDivs = document.getElementById('button');
const alert1 = document.getElementById('alert1');
const alert2 = document.getElementById('alert2');
const alert3 = document.getElementById('alert3');
const alerthapus1 = document.getElementById('alerthapus1');
const alerthapus2 = document.getElementById('alerthapus2');
const alertback = document.getElementById('alertback');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
var url = "https://instagram.com/daisekoi"; // Ganti dengan URL Grup Daisekoi tujuan Anda
var count = 5; // Waktu hitung mundur dalam detik
var scriptUrl = 'https://script.google.com/a/macros/dinamika.ac.id/s/AKfycbzLO7LNFO1RClCEh-lj_crqztFNgjPKepf0XNtslOC9NyjUkgSLO9Uf0bbHUElMUhmN/exec';





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
  khodam.style.display = 'none';
}

window.onbeforeunload = function(e) {
  if (localStorage.getItem('form1Data') || localStorage.getItem('form2Data')) {
    var message = "Anda yakin ingin meninggalkan halaman ini?";
    e.returnValue = message;
    return message;
  }
};



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
  }, 500); // Setelah 1 detik, perbarui progress bar ke 100%
  }
  

  
});

function cekKhodam(event) {
  event.preventDefault();
  let nama = $('#search').val();
  if (nama === '') {
    alert('Masukkan nama terlebih dahulu!');
  } else {
    let status = [
        'isi',
        'kosong',
    ]
    const randomStatus = Math.floor(Math.random() * status.length);
    if (randomStatus === 0) {
        let khodam = [
            'Jinn',
            'Syaitan',
            'Malaikat',
            'Peri',
            'Naga',
            'Setan',
            'Hantu',
            'Jin',
            'Iblis',
            'Kuntilanak',
            'Pocong', 'Keyboard Mechanical'
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


