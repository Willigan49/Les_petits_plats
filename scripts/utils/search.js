const inputSearch = document.querySelector(".input-search");

inputSearch.addEventListener("keyup", () => {
  if (inputSearch.value.length >= 3) {
    recipeSearchArray = createRecipeSearchArray(inputSearch.value);
    recipeSearchArray.forEach((recipe) => {
      createRecipeCard(recipe);
    });
    createFilterByType(recipeSearchArray);
  } else {
    displayAllRecipes();
    createFilterByType(recipes)
  }
});

function createRecipeSearchArray(searchValue, tags) {
  recipesContainer.innerHTML = "";
  const recipeArray = [];
  if (searchValue && tags) {
    tags.forEach((tag) => {
      recipes.forEach((recipe) => {
        if (
          (recipe.name.toLowerCase().includes(searchValue.toLowerCase()) &&
            recipe.name.toLowerCase().includes(tag.toLowerCase())) ||
          (recipe.description
            .toLowerCase()
            .includes(searchValue.toLowerCase()) &&
            recipe.description.toLowerCase().includes(tag.toLowerCase())) ||
          recipe.ingredients.forEach((i) => {
            i.ingredient.toLowerCase().includes(searchValue.toLowerCase());
          }) ||
          recipe.ingredients.forEach((i) => {
            i.ingredient.toLowerCase().includes(tag.toLowerCase());
          })
        ) {
          recipeArray.push(recipe);
        }
      });
    });
  } else {
    recipes.forEach((recipe) => {
      if (
        recipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        recipe.ingredients.forEach((i) => {
          i.ingredient.toLowerCase().includes(searchValue.toLowerCase());
        })
      ) {
        recipeArray.push(recipe);
      }
    });
  }
  return recipeArray;
}
