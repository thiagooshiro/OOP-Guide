export class MealModal {
  constructor() {
    this.modalElement = document.getElementById('modal');
    this.modalBody = document.getElementById('modal-body');
    this.closeBtn = document.querySelector('.modal-close');
    this.overlay = document.querySelector('.modal-overlay');
    this._bindEvents();
  }

  _bindEvents() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', () => this.close());
  }

  open(meal) {
    const ingredients = this._extractIngredients(meal);
    this.modalBody.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" style="width:100%; border-radius:8px;">
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <h3>Ingredients</h3>
      <ul>${ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <h3>Instructions</h3>
      <p style="white-space:pre-line">${meal.strInstructions || ''}</p>
    `;
    this.modalElement.classList.remove('hidden');
  }

  close() {
    this.modalElement.classList.add('hidden');
  }

  _extractIngredients(meal) {
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
}

export class SearchBar {
  constructor(onSearch, onFilter) {
    this.searchInput = document.getElementById('search-input');
    this.filterButtons = document.querySelectorAll('.filter-buttons button');
    this.onSearch = onSearch;
    this.onFilter = onFilter;
    this._bindEvents();
  }

  _bindEvents() {
    this.searchInput.addEventListener('input', (e) => {
      this.onSearch(e.target.value);
    });
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.onFilter(btn.dataset.category);
      });
    });
  }

  getCurrentFilter() {
    const active = document.querySelector('.filter-buttons button.active');
    return active ? active.dataset.category : 'all';
  }
}

// NOTE: MealCard class is NOT provided. Students will implement it during live coding.
export class MealCard {
  constructor(meal, openModal) {
    this.meal = meal;
    this.openModal = openModal
  }

  getView() {
    const card = document.createElement('div');
    card.classList.add('card')
    
    const cardImage = document.createElement('img');
    cardImage.src = `${this.meal.strMealThumb}`
    cardImage.alt = `${this.meal.strMeal}`
    
    const cardInfo = document.createElement('div')
    cardInfo.classList.add('card-info')
    
    const cardTitle = document.createElement('div')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = `${this.meal.strMeal || ''} `
    
    const cardCategory = document.createElement('div');
    cardCategory.classList.add('card-category')
    cardCategory.textContent = `${this.meal.strCategory || ''}`
    
    cardInfo.append(cardTitle)
    cardInfo.append(cardCategory)
    card.append(cardImage)
    card.append(cardInfo)

    card.addEventListener('click', this.openModal)

    return card;
  }
  
}
