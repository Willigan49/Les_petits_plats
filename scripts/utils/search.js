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
  let lastTag = tags[tags.length - 1];

  // Si la recherche global contient 3 caractères ou plus, sans tag.
  if (searchValue.length >= 3 && tags.length == 0) {
    globalSearchRecipes = [];
    searchRecipesByGlobalSearch(recipes);
    displayRecipes(globalSearchRecipes);
    createFilterByType(globalSearchRecipes);
    // Si la recherche ne contient que des tag.
  } else if (searchValue.length < 3 && tags.length >= 1) {
    if (searchValue.length < 3 && tags.length < 2) {
      searchRecipesByTags(recipes);
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    } else {
      searchRecipesByTags(tagSearch);
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    }
  } else if (searchValue.length >= 3 && tags.length >= 1) {
    if (tags.length == 1) {
      searchRecipesByTags(globalSearchRecipes);
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    } else {
      searchRecipesByTags(tagSearch);
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    }
  } else if (searchValue.length < 3 && tags.length == 0) {
    displayAllRecipes();
    createFilterByType(recipes);
  }

  function searchRecipesByTags(recipes) {
    tagSearch = [];
    recipes.forEach((recipe) => {
      recipe.ingredients.find((ing) => {
        if (ing.ingredient.toLowerCase() == lastTag.toLowerCase()) {
          tagSearch.push(recipe);
        }
      });
    });
    recipes.forEach((recipe) => {
      if (recipe.appliance.toLowerCase() == lastTag.toLowerCase()) {
        tagSearch.push(recipe);
      }
    });
    recipes.forEach((recipe) => {
      recipe.ustensils.find((ust) => {
        if (ust.toLowerCase() == lastTag.toLowerCase()) {
          tagSearch.push(recipe);
        }
      });
    });
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
