// Кодын зорилго
    // Dark Mode (хараанхуй горим) асаах/унтраах боломж олгоно.

    // Сонгосон горимыг Local Storage-д хадгална.

    // Хуудас ачаалахад өмнөх горимыг автоматаар сэргээнэ.

    // #login-section хэсгийг анхны ачаалал дээр нууна.
// Dark mode toggle with LocalStorage persistence
const toggleBtn = document.getElementById('toggle-dark-mode');

// Apply saved preference on first paint
(() => {
  try {
    const saved = localStorage.getItem('dark-mode');
    if (saved === 'true') document.body.classList.add('dark-mode');
  } catch (e) {
    console.warn('LocalStorage not available.', e);
  }
})();

// Toggle & save on click
toggleBtn?.addEventListener('click', () => {
  const on = document.body.classList.toggle('dark-mode');
  try { localStorage.setItem('dark-mode', on); } catch {}
});

// NOTE: Хуучин кодонд #login-section байхгүй мөртлөө display:none хийж байсан тул
// null reference алдаа гарч болзошгүй. Тиймээс түүнийг бүр мөсөн авч хаясан.
