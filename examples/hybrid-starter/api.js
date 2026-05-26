const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

const MOCK_RECIPES = [
  {
    idMeal: "1",
    strMeal: "Spaghetti Carbonara",
    strMealThumb: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    strCategory: "Pasta",
    strInstructions: "Cook pasta. Fry pancetta. Mix eggs and cheese. Combine.",
    strIngredient1: "Spaghetti",
    strMeasure1: "200g",
    strIngredient2: "Eggs",
    strMeasure2: "2",
    strIngredient3: "Pancetta",
    strMeasure3: "100g"
  },
  {
    idMeal: "2",
    strMeal: "Chicken Curry",
    strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    strCategory: "Chicken",
    strInstructions: "Fry onions. Add chicken and spices. Simmer with coconut milk.",
    strIngredient1: "Chicken",
    strMeasure1: "500g",
    strIngredient2: "Coconut milk",
    strMeasure2: "400ml"
  }
];

export async function fetchRandomMeal() {
  try {
    const res = await fetch(`${API_BASE}/random.php`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  } catch {
    return null;
  }
}

export async function searchMeals(query) {
  try {
    const res = await fetch(`${API_BASE}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
  } catch {
    return [];
  }
}

export function getMockMeal() {
  return MOCK_RECIPES[Math.floor(Math.random() * MOCK_RECIPES.length)];
}

export { MOCK_RECIPES };