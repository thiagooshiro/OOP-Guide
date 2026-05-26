export class MealModal {
  constructor() {
    this.modal = document.getElementById('modal');
    this.body = document.getElementById('modal-body');
    this._bindEvents();
  }

  _bindEvents() {
    const closeBtn = this.modal.querySelector('.modal-close');
    const overlay = this.modal.querySelector('.modal-overlay');
    closeBtn.addEventListener('click', () => this.close());
    overlay.addEventListener('click', () => this.close());
  }

  open(meal) {
    const ingredients = this._extractIngredients(meal);
    this.body.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" style="width:100%; border-radius:8px;">
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <h3>Ingredients</h3>
      <ul>${ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
      <h3>Instructions</h3>
      <p style="white-space:pre-line">${meal.strInstructions || ''}</p>
    `;
    this.modal.classList.remove('hidden');
  }

  close() {
    this.modal.classList.add('hidden');
  }

  _extractIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ing && ing.trim()) ingredients.push(`${measure} ${ing}`);
    }
    return ingredients;
  }
}