const recipesContainer = document.getElementById("recipes-container");
const searchArray = [];

function init() {
  const inputSearch = document.querySelector(".input-search");
  const filtersType = ["ingredients", "appareils", "ustensils"];

  displayAllRecipes();
  createFilterLists(filtersType);
  addEventButtons(filtersType);
  createTags();

  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      search(inputSearch.value);
    } else {
      recipesContainer.innerHTML = "";
      displayAllRecipes();
    }
  });
}

function displayAllRecipes() {
  recipes.forEach((r) => {
    createRecipeCard(recipesContainer, r);
  });
}

function search(word) {
  recipesContainer.innerHTML = "";
  recipes.map((recipe) => {
    if (
      recipe.name.toLowerCase().includes(word.toLowerCase()) ||
      recipe.description.toLowerCase().includes(word.toLowerCase()) ||
      recipe.ingredients.some((ing) =>
        ing.ingredient.toLowerCase().includes(word.toLowerCase())
      )
    ) {
      createRecipeCard(recipesContainer, recipe);
    }
  });
}

init();
