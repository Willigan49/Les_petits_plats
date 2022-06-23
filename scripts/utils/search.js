const inputSearch = document.querySelector(".input-search");
let globalSearch = [];
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

  if (searchValue.length >= 3 && tags.length == 0) {
    globalSearch = [];
    recipes.forEach((recipe) => {
      if (
        recipe.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        recipe.ingredients.forEach((i) => {
          i.ingredient.toLowerCase().includes(searchValue.toLowerCase());
        })
      ) {
        globalSearch.push(recipe);
      }
    });
    displayRecipes(globalSearch);
    createFilterByType(globalSearch);
  } else if (searchValue.length < 3 && tags.length >= 1) {
    if (searchValue.length < 3 && tags.length < 2) {
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
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    } else {
      tagSearch.forEach((recipe) => {
        recipe.ingredients.find((ing) => {
          if (ing.ingredient.toLowerCase() == lastTag.toLowerCase()) {
            tagSearch = [];
            tagSearch.push(recipe);
          }
        });
      });
      tagSearch.forEach((recipe) => {
        if (recipe.appliance.toLowerCase() == lastTag.toLowerCase()) {
          tagSearch = [];
          tagSearch.push(recipe);
        }
      });
      tagSearch.forEach((recipe) => {
        recipe.ustensils.find((ust) => {
          if (ust.toLowerCase() == lastTag.toLowerCase()) {
            tagSearch = [];
            tagSearch.push(recipe);
          }
        });
      });
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    }
  } else if (searchValue.length >= 3 && tags.length >= 1) {
    if (tags.length == 1) {
      tagSearch = [];
      globalSearch.forEach((recipe) => {
        recipe.ingredients.find((ing) => {
          if (ing.ingredient.toLowerCase() == lastTag.toLowerCase()) {
            tagSearch.push(recipe);
          }
        });
      });
      globalSearch.forEach((recipe) => {
        if (recipe.appliance.toLowerCase() == lastTag.toLowerCase()) {
          tagSearch.push(recipe);
        }
      });
      globalSearch.forEach((recipe) => {
        recipe.ustensils.find((ust) => {
          if (ust.toLowerCase() == lastTag.toLowerCase()) {
            tagSearch.push(recipe);
          }
        });
      });
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    } else {
      tagSearch.forEach((recipe) => {
        recipe.ingredients.find((ing) => {
          if (ing.ingredient.toLowerCase() == lastTag.toLowerCase()) {
            tagSearch = [];
            tagSearch.push(recipe);
          }
        });
      });
      tagSearch.forEach((recipe) => {
        if (recipe.appliance.toLowerCase() == lastTag.toLowerCase()) {
          tagSearch = [];
          tagSearch.push(recipe);
        }
      });
      tagSearch.forEach((recipe) => {
        recipe.ustensils.find((ust) => {
          if (ust.toLowerCase() == lastTag.toLowerCase()) {
            tagSearch = [];
            tagSearch.push(recipe);
          }
        });
      });
      displayRecipes(tagSearch);
      createFilterByType(tagSearch);
    }
  } else if (searchValue.length < 3 && tags.length == 0) {
    displayAllRecipes();
    createFilterByType(recipes);
  }

  function displayRecipes(recipes) {
    recipesContainer.innerHTML = "";
    recipes.forEach((recipe) => {
      createRecipeCard(recipe);
    });
  }
}
