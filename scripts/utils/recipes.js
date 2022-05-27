const recipesContainer = document.getElementById("recipes-container");

function displayAllRecipes() {
  recipesContainer.innerHTML = "";
  recipes.forEach((r) => {
    createRecipeCard(r);
  });
}

function createRecipeCard(recipe) {
  let { id, name, time, description, ingredients } = recipe;
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
    } else if (i.quantity && !i.unit) {
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
