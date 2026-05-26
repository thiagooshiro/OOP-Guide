import { MealApi } from './api.js';
import { MOCK_RECIPES } from './models.js';
import { MealModal } from './components/MealModal.js';
import { SearchBar } from './components/SearchBar.js';
import { Section } from './components/Section.js';
import { MealCard } from './components/MealCard.js';

class App {
  constructor() {
    this.api = new MealApi();
    this.modal = new MealModal();
    this.section = new Section('#cards-container');
    this.allMeals = [...MOCK_RECIPES];
    
    this.currentFilter = 'all';
    this.currentSearch = '';
    
    this.init();
  }

  init() {
    // Setup section renderer
    this.section.setRenderer((meal) => {
      const card = new MealCard(meal, (m) => this.modal.open(m));
      return card.render();
    });
    this.section.setItems(this.getFilteredMeals());

    // Setup search bar
    this.searchBar = new SearchBar(
      (query) => {
        this.currentSearch = query;
        this.updateSection();
      },
      (category) => {
        this.currentFilter = category;
        this.updateSection();
      }
    );

    // Surprise button
    const surpriseBtn = document.getElementById('surprise-btn');
    surpriseBtn.addEventListener('click', () => this.loadRandomMeal());
  }

  getFilteredMeals() {
    let filtered = [...this.allMeals];
    if (this.currentFilter !== 'all') {
      filtered = filtered.filter(m => m.strCategory === this.currentFilter);
    }
    if (this.currentSearch.trim()) {
      const q = this.currentSearch.toLowerCase();
      filtered = filtered.filter(m => m.strMeal.toLowerCase().includes(q));
    }
    return filtered;
  }

  updateSection() {
    const filtered = this.getFilteredMeals();
    this.section.setItems(filtered);
  }

  async loadRandomMeal() {
    let meal = await this.api.getRandom();
    if (!meal) meal = MOCK_RECIPES[0]; // fallback
    if (!this.allMeals.some(m => m.idMeal === meal.idMeal)) {
      this.allMeals.unshift(meal);
      this.updateSection();
    } else {
      alert('Recipe already exists');
    }
  }
}

// Start the app
console.log("Start")
new App();