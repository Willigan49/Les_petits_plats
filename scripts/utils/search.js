const inputSearch = document.querySelector(".input-search");
let globalSearchRecipes = [];
let tagSearch = [];

inputSearch.addEventListener("keyup", () => {
  searchRecipes(inputSearch.value);
});

function searchRecipes(searchValue) {
  let tags = [];
  let tagList = document.querySelectorAll(".tag-item");
  tagList.forEach((tag) => {
    tags.push(tag.innerText);
  });

  if (searchValue.length >= 3 && tags.length === 0) {
    globalSearchRecipes = [];
    searchRecipesByGlobalSearch(recipes);
    displayRecipes(globalSearchRecipes);
    createFilterByType(globalSearchRecipes);
  } else if (searchValue.length < 3 && tags.length >= 1) {
    searchRecipesByTags(tags, recipes);
  } else if (searchValue.length >= 3 && tags.length >= 1) {
    searchRecipesByTags(tags, globalSearchRecipes);
  } else if (searchValue.length < 3 && tags.length == 0) {
    displayAllRecipes();
    createFilterByType(recipes);
  }

  function searchRecipesByTags(tags, recipes) {
    const recipesFiltered = [];
    for (const recipe of recipes) {
      const recipesInfo = [];
      recipesInfo.push(...recipe.ingredients.map((i) => i.ingredient));
      recipesInfo.push(recipe.appliance);
      recipesInfo.push(...recipe.ustensils);
      if (tags.every((t) => recipesInfo.includes(t))) {
        recipesFiltered.push(recipe);
      }
    }
    displayRecipes(recipesFiltered);
    createFilterByType(recipesFiltered);
  }

  function searchRecipesByGlobalSearch(recipes) {
    recipes.forEach((recipe) => {
      if (
        recipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        recipe.ingredients.forEach((i) => {
          i.ingredient.toLowerCase().includes(searchValue.toLowerCase());
        })
      ) {
        globalSearchRecipes.push(recipe);
      }
    });
  }

  function displayRecipes(recipes) {
    recipesContainer.innerHTML = "";
    recipes.forEach((recipe) => {
      createRecipeCard(recipe);
    });
  }
}
