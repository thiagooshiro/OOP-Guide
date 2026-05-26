const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

export class MealApi {
  async getRandom() {
    try {
      const res = await fetch(`${API_BASE}/random.php`);
      const data = await res.json();
      return data.meals ? data.meals[0] : null;
    } catch {
      return null;
    }
  }
  async search(query) {
    try {
      const res = await fetch(`${API_BASE}/search.php?s=${query}`);
      const data = await res.json();
      return data.meals || [];
    } catch {
      return [];
    }
  }
}