const input = document.getElementById('provinsi');
const dropdownContent = document.querySelector('.dropdown-content');

input.addEventListener('click', (e) => {
    dropdownContent.style.display = 'block';
  });
input.addEventListener('focus', (e) => {
  dropdownContent.style.display = 'block';
});

input.addEventListener('blur', (e) => {
  dropdownContent.style.display = 'none';
});

input.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContent.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    if (optionValue.includes(inputValue)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});

dropdownContent.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      input.value = e.target.getAttribute('data-value');
      dropdownContent.style.display = 'none';
    }
  });