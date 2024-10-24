const img = document.getElementById('img');
    const formleft = document.querySelector('.form-left');
    const textContainer = document.getElementById('text-comingsoon');
const texts = ['Something New', 'Coming Soon'];
formleft.classList.remove('show');
img.classList.remove('show');
formleft.classList.add('show');
img.classList.add('show');
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


function checkScreenWidth() {
    if (window.innerWidth > 1020) {
        window.location.href = "index.html";
    }
}

// Jalankan fungsi saat halaman dimuat dan saat ukuran layar berubah
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;