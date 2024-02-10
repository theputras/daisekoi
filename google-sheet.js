const scriptURL = 'https://script.google.com/macros/s/AKfycbwYQEcNueSfDRTWfehHvmsfvuce14CZFW3NmhAyMUgspuy-5bbgRGPdpdt6rjKiYGCT7Q/exec'
const form = document.forms['submit-to-google-sheet']
const url = '/daisekoi/output.html'

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => window.location.replace(url))
    .catch(error => console.error('Error!', error.message))
})