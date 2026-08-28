const search = document.getElementById('recipe-search');
const catSel = document.getElementById('recipe-category');
const countEl = document.getElementById('recipe-count');
const groups = document.querySelectorAll('.recipe-group');

const DIACRITICS = /[̀-ͯ]/g;

function normalize(s) {
  return s.normalize('NFD').replace(DIACRITICS, '').toLowerCase();
}

function apply() {
  const q = normalize(search.value.trim());
  const cat = catSel.value;
  let shown = 0;

  groups.forEach(g => {
    const groupCat = g.dataset.category;
    const matchesCat = cat === 'all' || cat === groupCat;
    let anyVisible = false;

    g.querySelectorAll('li').forEach(li => {
      const title = normalize(li.dataset.title || '');
      const matchesText = !q || title.includes(q);
      const show = matchesCat && matchesText;
      li.hidden = !show;
      if (show) { anyVisible = true; shown++; }
    });

    g.querySelectorAll('h4').forEach(h4 => {
      const sib = h4.nextElementSibling;
      h4.hidden = !(sib && [...sib.querySelectorAll('li')].some(li => !li.hidden));
    });

    g.hidden = !anyVisible;
  });

  countEl.textContent = `${shown} recipe${shown === 1 ? '' : 's'}`;
}

search.addEventListener('input', apply);
catSel.addEventListener('change', apply);
apply();
