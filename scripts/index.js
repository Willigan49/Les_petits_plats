const recipesContainer = document.getElementById("recipes-container");
recipes.forEach((r) => {
  //recipesContainer.innerHTML += `<div class="col-4"><h2>${r.name}</h2></div>`;
});

function search(word, recipes) {
  recipesContainer.innerHTML = "";
  for (let i = 0; i < recipes.length; i++) {
    if (
      recipes[i].name.toLowerCase().includes(word.toLowerCase()) ||
      recipes[i].description.toLowerCase().includes(word.toLowerCase())
    ) {
      recipesContainer.innerHTML += `<div class="col-4"><h2>${recipes[i].name}</h2></div>`;
    } else {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        if (
          recipes[i].ingredients[j].ingredient
            .toLowerCase()
            .includes(word.toLowerCase())
        ) {
          recipesContainer.innerHTML += `<div class="col-4"><h2>${recipes[i].name}</h2></div>`;
          j = recipes[i].ingredients.length;
        }
      }
    }
  }
}
