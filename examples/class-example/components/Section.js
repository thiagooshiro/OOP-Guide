import { MealCard } from './MealCard.js';

export class Section {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    this.items = [];
    this.renderer = null;
  }

  setRenderer(renderer) {
    this.renderer = renderer;
  }

  setItems(items) {
    this.items = items;
    this.render();
  }

  addItem(item) {
    this.items.unshift(item);
    this.render();
  }

  render() {
    if (!this.renderer) return;
    this.container.innerHTML = '';
    this.items.forEach(item => {
      const cardElement = this.renderer(item);
      this.container.appendChild(cardElement);
    });
  }
}