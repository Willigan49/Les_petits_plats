const inputSearch = document.querySelector(".input-search");

inputSearch.addEventListener("keyup", () => {
  if (inputSearch.value.length >= 3) {
    recipeSearchArray = createRecipeSearchArray(inputSearch.value);
    recipeSearchArray.forEach((recipe) => {
      createRecipeCard(recipesContainer, recipe);
    });
    createFilterLists(recipeSearchArray);
  } else {
    recipesContainer.innerHTML = "";
    displayAllRecipes();
    createFilterLists(recipes);
  }
});

displayAllRecipes();
createAppareilButton();
createIngredientButton();
createUstensilButton()
createFilterLists(recipes);
//addEventButtons(filtersType);

/* const options = document.querySelectorAll(".dropdown-item");
options.forEach((element) => {
  element.addEventListener("click", () => {
    createTag(element);
  });
}); */
