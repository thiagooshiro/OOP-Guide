export class MealCard {
  constructor(meal, onClick) {
    this.meal = meal;
    this.onClick = onClick;
    this.element = null;
  }

  render() {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${this.meal.strMealThumb}" alt="${this.meal.strMeal}">
      <div class="card-info">
        <div class="card-title">${this.meal.strMeal}</div>
        <div class="card-category">${this.meal.strCategory || ''}</div>
      </div>
    `;
    card.addEventListener('click', () => this.onClick(this.meal));
    this.element = card;
    return card;
  }
}