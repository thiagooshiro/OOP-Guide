// DOM elements
const container = document.getElementById('cards-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-buttons button');
const surpriseBtn = document.getElementById('surprise-btn');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

// App state
let allMeals = [];
let currentFilter = 'all';
let currentSearch = '';

// Helper: extract ingredients from meal object
function extractIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push(`${measure} ${ing}`);
    }
  }
  return ingredients;
}

// Filter + search logic
function getFilteredMeals() {
  let filtered = [...allMeals];
  if (currentFilter !== 'all') {
    filtered = filtered.filter(meal => meal.strCategory === currentFilter);
  }
  if (currentSearch.trim()) {
    const query = currentSearch.toLowerCase();
    filtered = filtered.filter(meal => meal.strMeal.toLowerCase().includes(query));
  }
  return filtered;
}

// Render cards
function renderCards() {
  const meals = getFilteredMeals();
  container.innerHTML = '';
  if (meals.length === 0) {
    container.innerHTML = '<p>No recipes found.</p>';
    return;
  }
  meals.forEach(meal => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div class="card-info">
        <div class="card-title">${meal.strMeal}</div>
        <div class="card-category">${meal.strCategory || ''}</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(meal));
    container.appendChild(card);
  });
}

// Modal
function openModal(meal) {
  const ingredients = extractIngredients(meal);
  modalBody.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" style="width:100%; border-radius:8px;">
    <p><strong>Category:</strong> ${meal.strCategory}</p>
    <h3>Ingredients</h3>
    <ul>${ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    <h3>Instructions</h3>
    <p style="white-space:pre-line">${meal.strInstructions || ''}</p>
  `;
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

// Data loading
async function loadRandomMeal() {
  let meal = await fetchRandomMeal();
  if (!meal) meal = getMockMeal();
  if (!allMeals.some(m => m.idMeal === meal.idMeal)) {
    allMeals.unshift(meal);
    renderCards();
  } else {
    alert('This recipe is already in your collection.');
  }
}

async function handleSearch() {
  const query = searchInput.value.trim();
  currentSearch = query;
  if (query === '') {
    // If search cleared, we need to reload original meals
    // For simplicity, we keep the existing allMeals and filter client-side.
    renderCards();
    return;
  }
  // Optional: Use API search to get fresh results
  const results = await searchMeals(query);
  if (results.length) {
    // Merge without duplicates
    results.forEach(meal => {
      if (!allMeals.some(m => m.idMeal === meal.idMeal)) {
        allMeals.push(meal);
      }
    });
  }
  renderCards();
}

// Event listeners
surpriseBtn.addEventListener('click', loadRandomMeal);
searchInput.addEventListener('input', handleSearch);
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.category;
    renderCards();
  });
});
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Initialize with mock data
allMeals = [...MOCK_RECIPES];
renderCards();