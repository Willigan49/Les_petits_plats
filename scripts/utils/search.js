/*function addToSearchArray(element, type) {
  if (type === "globalSearch") {
    let index = searchArray.findIndex((s) => {
      return s.type === "globalSearch";
    });
    if (index >= 0) {
      console.log(searchArray[index].element);
      searchArray[index].element = element;
      console.log(searchArray[index].element);
    } else {
      searchArray.push({ type, element });
    }
  } else {
    searchArray.push({ type, element });
  }
  search(searchArray);
}

function search(searchArray) {
  recipesContainer.innerHTML = "";
  if (searchArray.length >= 1) {
    recipes.map((recipe) => {
      if (
        searchArray.some((currentSearch) => {
          let word = currentSearch.element;
          return (
            recipe.name.toLowerCase().includes(word.toLowerCase()) ||
            recipe.description.toLowerCase().includes(word.toLowerCase()) ||
            recipe.ingredients.some((ing) =>
              ing.ingredient.toLowerCase().includes(word.toLowerCase())
            )
          );
        })
      ) {
        createRecipeCard(recipesContainer, recipe);
      }
    });
    //});
  } else {
    recipesContainer.innerHTML = "";
    displayAllRecipes();
  }
}
 */

function createRecipeSearchArray(word) {
  recipesContainer.innerHTML = "";
  const recipeArray = [];
  recipes.forEach((recipe) => {
    if (
      recipe.name.toLowerCase().includes(word.toLowerCase()) ||
      recipe.description.toLowerCase().includes(word.toLowerCase()) ||
      recipe.ingredients.forEach((i) => {
        i.ingredient.toLowerCase().includes(word.toLowerCase());
      })
    ) {
      recipeArray.push(recipe);
    }
  });
  return recipeArray;
}
