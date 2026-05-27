import { fetchRandomMeal, searchMeals, getMockMeal, MOCK_RECIPES } from './api.js';
import { MealModal, SearchBar, MealCard } from './components.js';

// DOM elements
const container = document.getElementById('cards-container');
const surpriseBtn = document.getElementById('surprise-btn');

// App state
let allMeals = [];
let currentFilter = 'all';
let currentSearch = '';

// Initialize components
const modal = new MealModal();
const searchBar = new SearchBar(
  (query) => {
    currentSearch = query;
    renderCards();
  },
  (category) => {
    currentFilter = category;
    renderCards();
  }
);

// Helper: get filtered meals
function getFilteredMeals() {
  let filtered = [...allMeals];
  if (currentFilter !== 'all') {
    filtered = filtered.filter(meal => meal.strCategory === currentFilter);
  }
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(meal => meal.strMeal.toLowerCase().includes(q));
  }
  return filtered;
}

// ============================================
// CHALLENGE: Implement MealCard class
// ============================================
// The following code expects a class named MealCard with:
// - constructor(meal, onClickHandler)
// - getView() method returning the card DOM element
// Currently, this will throw "MealCard is not defined".
// Students must create MealCard class and import it.
//
// Uncomment the import and the line inside forEach after implementing.
// ============================================

// import { MealCard } from './MealCard.js';

function renderCards() {
  const meals = getFilteredMeals();
  container.innerHTML = '';
  if (meals.length === 0) {
    container.innerHTML = '<p>No recipes found.</p>';
    return;
  }
  meals.forEach(meal => {
    // This line will error until MealCard is defined and imported.
    const card = new MealCard(meal, () => modal.open(meal)).getView();
    container.appendChild(card);
  });
}

// Data loading
async function loadRandomMeal() {
  let meal = await fetchRandomMeal();
  if (!meal) meal = getMockMeal();
  if (!allMeals.some(m => m.idMeal === meal.idMeal)) {
    allMeals.unshift(meal);
    renderCards();
  } else {
    alert('Already in collection');
  }
}

surpriseBtn.addEventListener('click', loadRandomMeal);

// Initialize
allMeals = [...MOCK_RECIPES];
renderCards();