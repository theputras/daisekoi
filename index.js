const input = document.getElementById('sekte');
const dropdownContent = document.querySelector('.dropdown-content');
const hololive = document.querySelector('.hololive');
const jkt48 = document.querySelector('.jkt48');
const gameturu = document.querySelector('.Game-Turu');
const kritik = document.querySelector('.kritik');
const anime = document.querySelector('.anime');

// Show dropdown on input click or focus
input.addEventListener('click', (e) => {
  dropdownContent.style.display = 'block';
});

input.addEventListener('focus', (e) => {
  dropdownContent.style.display = 'block';
});

// Prevent default behavior on mousedown in dropdown
dropdownContent.addEventListener('mousedown', (e) => {
  e.preventDefault();
});

// Hide dropdown on blur if not clicking within it
input.addEventListener('blur', (e) => {
  if (!dropdownContent.contains(document.activeElement)) {
    dropdownContent.style.display = 'none';
  }
});

// Filter dropdown options based on input value
input.addEventListener('input', (e) => {
  const inputValue = e.target.value.toLowerCase();
  const options = dropdownContent.querySelectorAll('a');

  options.forEach((option) => {
    const optionValue = option.textContent.toLowerCase();
    option.style.display = optionValue.includes(inputValue) ? 'block' : 'none';
  });
});

// Handle dropdown option click
dropdownContent.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const value = e.target.getAttribute('data-value');
    input.value = value;
    dropdownContent.style.display = 'none';
    input.blur();

    // Hide all sections and remove required attribute
    [hololive, jkt48, gameturu,anime,kritik].forEach(section => {
      section.style.display = 'none';
      section.querySelectorAll('input').forEach(input => {
        input.removeAttribute('required');
        if (input.name.startsWith('alasan')) {
          input.style.display = 'none';
        }
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
      case 'Game Turu':
        selectedSection = gameturu;
        break;
      case 'Anime':
          selectedSection = anime;
        break;
        case 'kritik':
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
      selectedSection.querySelectorAll('input').forEach(input => {
        input.setAttribute('required', 'required');
        if (input.name.startsWith('alasan')) {
          input.style.display = 'block';
        }
      });
    }
  }
});
