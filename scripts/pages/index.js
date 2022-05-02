function displayRecipe(recipe) {
  const { id, name, time, description, ingredients } = recipe;
  recipesContainer.innerHTML += `<div class="col-4">
  <article class="card">
    <div class="card-header"></div>
    <div class="card-body container grey-bg">
      <div class="row">
        <div class="col-9">
          <h2 class="fs-6">${name}</h2>
        </div>
        <div class="col-3">
          <p class="fs-6 fw-bolder">
            <i class="fa-solid fa-clock"></i> ${time} min
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul class="list-unstyled ingredient-list-${id}">
          </ul>
        </div>
        <div class="col">
          <p>
            ${description}
          </p>
        </div>
      </div>
    </div>
  </article>
</div>`;
  const ingredientContainer = document.querySelector(`.ingredient-list-${id}`);
  ingredientContainer.innerHTML = "";
  ingredients.forEach((i) => {
    if (i.quantity && i.unit) {
      ingredientContainer.innerHTML += `<li class="fw-bolder">
        ${i.ingredient}:
        <span class="fw-normal">${i.quantity} ${i.unit}</span>
      </li>`;
    } else if(i.quantity && !i.unit) {
      ingredientContainer.innerHTML += `<li class="fw-bolder">
        ${i.ingredient}:
        <span class="fw-normal">${i.quantity}</span>
      </li>`;
    } else {
      ingredientContainer.innerHTML += `<li class="fw-bolder">
        ${i.ingredient}
      </li>`;
    }
  });
}

function displayAllRecipes(){
  recipes.forEach((r) => {
    displayRecipe(r);
  });
}

function search(word) {
  recipesContainer.innerHTML = "";
  for (let i = 0; i < recipes.length; i++) {
    if (
      recipes[i].name.toLowerCase().includes(word.toLowerCase()) ||
      recipes[i].description.toLowerCase().includes(word.toLowerCase())
    ) {
      displayRecipe(recipes[i]);
    } else {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        if (
          recipes[i].ingredients[j].ingredient
            .toLowerCase()
            .includes(word.toLowerCase())
        ) {
          displayRecipe(recipes[i]);
          j = recipes[i].ingredients.length;
        }
      }
    }
  }
}

const recipesContainer = document.getElementById("recipes-container");
displayAllRecipes();
const inputSearch = document.querySelector(".input-search");
inputSearch.addEventListener("keyup", () => {
  if (inputSearch.value.length >= 3) {
    search(inputSearch.value);
  } else {
    displayAllRecipes()
  }
});
