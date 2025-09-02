// Кодын зорилго
    // Dark Mode (хараанхуй горим) асаах/унтраах боломж олгоно.

    // Сонгосон горимыг Local Storage-д хадгална.

    // Хуудас ачаалахад өмнөх горимыг автоматаар сэргээнэ.

    // #login-section хэсгийг анхны ачаалал дээр нууна.
const HarTsanaanTovch = document.getElementById('toggle-dark-mode');

document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    loginSection.style.display = 'none';
});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    console.log('Dark mode is true');
} else {
    console.log('Dark mode is false');
}

HarTsanaanTovch.addEventListener('click', () => {
    const assanEseh = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', assanEseh);

  if (assanEseh) {
    console.log('Dark mode enabled');
  } else {
        console.log('Dark mode disabled');
  }
});