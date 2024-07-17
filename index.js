const inputJurusan = document.getElementById('jurusan');
const inputSekte = document.getElementById('sekte');
const dropdownContent = document.querySelector('.dropdown-content');
const alasanForm = document.querySelector('.alasan-form');
const resetFormButton = document.getElementById('resetFormButton');
const dropdownContentSekte = inputSekte.nextElementSibling; // get the dropdown content element

const hololive = document.querySelector('.hololive');
const jkt48 = document.querySelector('.jkt48');
const game = document.querySelector('.game');
const kritik = document.querySelector('.kritik');
const anime = document.querySelector('.anime');
const kpop = document.querySelector('.kpop');
const tokusatsu = document.querySelector('.tokusatsu');

// Show dropdown on input click or focus
inputJurusan.addEventListener('click', (e) => {
  dropdownContent.style.display = 'block';
});

inputJurusan.addEventListener('focus', (e) => {
  dropdownContent.style.display = 'block';
});

inputSekte.addEventListener('click', (e) => {
  dropdownContentSekte.style.display = 'block';
});

inputSekte.addEventListener('focus', (e) => {
  dropdownContentSekte.style.display = 'block';
});

// Hide dropdown on blur if not clicking within it
inputJurusan.addEventListener('blur', (e) => {
  const dropdownContent = document.querySelector('.dropdown-content');
  if (!dropdownContent.contains(document.activeElement)) {
    dropdownContent.style.display = 'none';
  }
});

// Hide dropdown on blur if not clicking within it
inputJurusan.addEventListener('blur', (e) => {
  const dropdownContent = document.querySelector('.dropdown-content');
  if (!dropdownContent.contains(document.activeElement)) {
    dropdownContent.style.display = 'none';
  }
});

// Prevent default behavior on mousedown in dropdown
dropdownContent.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

// Hide dropdown on blur if not clicking within it
inputJurusan.addEventListener('blur', (e) => {
  if (!dropdownContent.contains(document.activeElement)) {
    dropdownContent.style.display = 'none';
  }
});

inputSekte.addEventListener('blur', (e) => {
  if (!dropdownContent.contains(document.activeElement)) {
    dropdownContent.style.display = 'none';
  }
});

// Filter dropdown options based on input value
inputJurusan.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContent.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    option.style.display = optionValue.includes(inputValue)? 'block' : 'none';
  });
});



inputSekte.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContentSekte.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    option.style.display = optionValue.includes(inputValue) ? 'block' : 'none';
  });
});


// Handle dropdown option click Jurusan
dropdownContent.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const value = e.target.getAttribute('data-value');
    inputJurusan.value = value;
    dropdownContent.style.display = 'none';
    inputJurusan.blur();
  }


    if (selectedSection) {
      selectedSection.style.display = 'flex';
      selectedSection.style.flexDirection = 'column';
      selectedSection.style.alignItems = 'tart';
      selectedSection.style.gap = '20px';
      selectedSection.querySelectorAll('input').forEach((input) => {
        input.setAttribute('required', 'equired');
      });

      // Append the alasan-form to the selected section
      selectedSection.appendChild(alasanForm);
      alasanForm.style.display = 'block';
    }
  });
  
  dropdownContentSekte.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      const value = e.target.getAttribute('data-value');
      inputSekte.value = value;
      dropdownContentSekte.style.display = 'none';
      inputSekte.blur();
  
      // Hide all sections and remove required attribute
      [hololive, jkt48, game, anime, kritik, tokusatsu, kpop].forEach((section) => {
        section.style.display = 'none';
        section.querySelectorAll('input').forEach((input) => {
          input.removeAttribute('required');
        });
      });
  
      // Show the relevant section and set required attribute
      let selectedSection;
      switch (value) {
        case 'Hololive':
          selectedSection = hololive;
          break;
        case 'JKT48':
          selectedSection = jkt48;
          break;
        case 'Game':
          selectedSection = game;
          break;
        case 'Anime':
          selectedSection = anime;
          break;
        case 'Tokusatsu':
          selectedSection = tokusatsu;
          break;
        case 'KPOP':
          selectedSection = kpop;
          break;
        case 'Kritik':
          selectedSection = kritik;
          break;
        default:
          selectedSection = null;
      }
  
      if (selectedSection) {
        selectedSection.style.display = 'flex';
        selectedSection.style.flexDirection = 'column';
        selectedSection.style.alignItems = 'start';
        selectedSection.style.gap = '20px';
        selectedSection.querySelectorAll('input').forEach((input) => {
          input.setAttribute('required', 'required');
        });
  
        // Append the alasan-form to the selected section
        selectedSection.appendChild(alasanForm);
        alasanForm.style.display = 'block';
      }
    }
  });

// Handle form reset
resetFormButton.addEventListener('click', () => {
  const form = document.forms['submit-to-survey'];

  // Clear all input fields
  form.reset();

  // Hide all sections
  [hololive, jkt48, game, anime, kritik, tokusatsu, kpop].forEach((section) => {
    section.style.display = 'none';
  });

  // Hide the alasan form
  alasanForm.style.display = 'none';

  // Clear the dropdown input field
  inputSekte.value = '';
});

// Handle next button click
document.getElementById('nextButton').addEventListener('click', () => {
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');

  // Hide form 1 and show form 2
  form1.style.display = 'none';
  form2.style.display = 'block';
});

