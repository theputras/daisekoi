function checkScreenWidth() {
    if (window.innerWidth <= 1024) {
        window.location.href = "./coming-soon.html";
    }
}

// Jalankan fungsi saat halaman dimuat dan saat ukuran layar berubah
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;



// Running Teks
const texts = document.querySelectorAll('.marquee-content p');
let index = 0;

function showNextText() {
    // Sembunyikan semua teks terlebih dahulu
    texts.forEach((text) => (text.style.display = 'none'));

    // Tampilkan teks saat ini
    const currentText = texts[index];
    currentText.style.display = 'block';
    currentText.style.animation = 'bounceUp 1200ms ease-in-out forwards';

    // Pindah ke teks berikutnya, ulang dari awal jika sudah sampai akhir
    index = (index + 1) % texts.length;

     // Panggil fungsi ini lagi setelah 800ms jeda + 600ms durasi animasi
    setTimeout(showNextText, 1600);
}

// Mulai animasi saat halaman dimuat
window.onload = showNextText;

document.addEventListener("DOMContentLoaded", function() {
    const portfolioPlacement = document.querySelector('.portfolioPlacement');
    const scrollAmount = 865; // Adjust this value based on the width of your items

    document.querySelector('.arrowRight').addEventListener('click', function() {
        portfolioPlacement.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth' // Smooth scrolling
        });
    });

    document.querySelector('.arrowLeft').addEventListener('click', function() {
        portfolioPlacement.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});


//Optimize Picture
document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll('.logo');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const logo = entry.target;
                const bgImage = logo.getAttribute('data-bg');
                logo.style.backgroundImage = `url(${bgImage})`;
                observer.unobserve(logo); // Hentikan pengamatan setelah gambar dimuat
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Memicu ketika 10% elemen terlihat
    });

    logos.forEach(logo => {
        observer.observe(logo);
    });
});