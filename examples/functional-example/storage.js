const STORAGE_KEY = "user_recipes";

function getUserRecipes() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveUserRecipe(recipeData) {
  const recipes = getUserRecipes();
  const newRecipe = {
    idMeal: "user_" + Date.now(),
    strMeal: recipeData.name,
    strMealThumb: recipeData.image,
    strCategory: recipeData.category,
    strInstructions: recipeData.instructions,
    isUserRecipe: true,
  };
  // Add ingredients
  recipeData.ingredients.forEach((ing, idx) => {
    newRecipe[`strIngredient${idx+1}`] = ing.name;
    newRecipe[`strMeasure${idx+1}`] = ing.measure;
  });
  recipes.unshift(newRecipe);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  return newRecipe;
}

function isUserRecipe(meal) {
  return meal && meal.isUserRecipe === true;
}