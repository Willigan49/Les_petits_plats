/* const filtersType = ["ingredients", "appareils", "ustensils"];
let filterContainer;

function createFilterLists(type, recipes) {
  type.forEach((t) => {
    recipes.forEach((r) => {
      let { ingredients, appliance, ustensils } = r;
      switch (t) {
        case "ingredients":
          filterContainer = document.querySelector(".ingredient-container");
          ingredients.forEach((i) => {
            addFilterToFilterArray(i.ingredient);
          });
          break;

        case "appareils":
          filterContainer = document.querySelector(".appareil-container");
          addFilterToFilterArray(appliance);
          break;

        case "ustensils":
          filterContainer = document.querySelector(".ustensil-container");
          ustensils.forEach((ustensil) => {
            addFilterToFilterArray(ustensil);
          });
          break;

        default:
          break;
      }
    });
  });

  function addFilterToFilterArray(filter) {
    let itemsArray = [];
    let filteredArray = [];
    itemsArray.push(filter);
    itemsArray.forEach((item, index) => {
      if (itemsArray.indexOf(item) == index) {
        filteredArray.push(item);
      }
    });
    console.log(filteredArray);
    /* filteredArray.forEach(filter => {
      filterContainer.innerHTML += `<li><button class="dropdown-item">${filter}</button></li>`;
    })
  }
}

function addEventButtons(type) {
  type.forEach((t) => {
    const button = document.getElementById(`btn-${t}`);
    const column = document.querySelector(`.${t}`);

    button.onclick = () => {
      column.classList.remove("col-1");
      column.classList.add("col-4");
    };

    document.addEventListener("click", (event) => {
      if (event.target !== button) {
        column.classList.remove("col-4");
        column.classList.add("col-1");
      }
    });
  });
}

function createTag(element) {
  let text = element.innerText.replace(/\s/g, "");
  const tag = `<div class="tag d-flex justify-content-around align-items-center" id="tag-${text}">
    <span class="tag-${text}">${element.innerText}</span>
    <i class="fa-solid fa-xmark cross" id="cross-${text}"></i>
    </div>`;
  const tagList = document.querySelector(".tag-list");
  tagList.innerHTML += tag;
  addToSearchArray(element.innerText, "tag");
  const tags = document.querySelectorAll(".cross");
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      deleteTag(tag);
    });
  });
}

function deleteTag(tag) {
  let tagName = tag.id.split("-")[1];
  let currentTagTitle = document.querySelector(`.tag-${tagName}`);
  const index = searchArray.indexOf(currentTagTitle.innerText);
  searchArray.splice(index, 1);
  search(searchArray);
  const currentTag = document.getElementById(`tag-${tagName}`);
  currentTag.remove();
}
 */

function createIngredientButton() {
  const ingredientButton = document.getElementById("btn-ingredients");
  const ingredientColumn = document.querySelector(`.ingredients`);

  ingredientButton.addEventListener("click", () => {
    ingredientColumn.classList.remove("col-1");
    ingredientColumn.classList.add("col-4");
  });

  document.addEventListener("click", (event) => {
    if (event.target !== ingredientButton) {
      ingredientColumn.classList.remove("col-4");
      ingredientColumn.classList.add("col-1");
    }
  });

  const ingredientSearch = document.querySelector(".ingredient-search");
  ingredientSearch.addEventListener("keyup", () => {
    if (ingredientSearch.value.length > 0) {
      createFilterLists(recipes, ingredientSearch.value);
    } else {
      createFilterLists(recipes);
    }
  });
}

function createAppareilButton() {
  const appareilButton = document.getElementById("btn-appareils");
  const appareilColumn = document.querySelector(`.appareils`);

  appareilButton.addEventListener("click", () => {
    appareilColumn.classList.remove("col-1");
    appareilColumn.classList.add("col-4");
  });

  document.addEventListener("click", (event) => {
    if (event.target !== appareilButton) {
      appareilColumn.classList.remove("col-4");
      appareilColumn.classList.add("col-1");
    }
  });
}

function createUstensilButton() {
  const ustensilButton = document.getElementById("btn-ustensils");
  const ustensilColumn = document.querySelector(`.ustensils`);

  ustensilButton.addEventListener("click", () => {
    ustensilColumn.classList.remove("col-1");
    ustensilColumn.classList.add("col-4");
  });

  document.addEventListener("click", (event) => {
    if (event.target !== ustensilButton) {
      ustensilColumn.classList.remove("col-4");
      ustensilColumn.classList.add("col-1");
    }
  });
}

function createFilterLists(recipes, search) {
  ingredientContainer = document.querySelector(".ingredient-container");
  applianceContainer = document.querySelector(".appareil-container");
  ustensilContainer = document.querySelector(".ustensil-container");
  const ingredientsArray = [];
  const applianceArray = [];
  const ustensilArray = [];
  if (search) {
    recipes.forEach((recipe) => {
      let { ingredients, appliance, ustensils } = recipe;
      ingredients.forEach((i) => {
        if (i.ingredient.includes(search)) {
          ingredientsArray.push(i.ingredient);
        }
      });
      applianceArray.push(appliance);
      ustensils.forEach((u) => {
        ustensilArray.push(u);
      });
    });
  } else {
    recipes.forEach((recipe) => {
      let { ingredients, appliance, ustensils } = recipe;
      ingredients.forEach((i) => {
        ingredientsArray.push(i.ingredient);
      });
      applianceArray.push(appliance);
      ustensils.forEach((u) => {
        ustensilArray.push(u);
      });
    });
  }
  let filteredUstensilArray = [];
  filteredUstensilArray = removeDuplication(applianceArray);
  ustensilContainer.innerHTML = "";
  filteredUstensilArray.forEach((ustensil) => {
    ustensilContainer.innerHTML += `<li><button class="dropdown-item">${ustensil}</button></li>`;
  });
  let filteredApplianceArray = [];
  filteredApplianceArray = removeDuplication(applianceArray);
  applianceContainer.innerHTML = "";
  filteredApplianceArray.forEach((appliance) => {
    applianceContainer.innerHTML += `<li><button class="dropdown-item">${appliance}</button></li>`;
  });
  filteredIngredientArray = removeDuplication(ingredientsArray);
  ingredientContainer.innerHTML = "";
  filteredIngredientArray.forEach((ingredient) => {
    ingredientContainer.innerHTML += `<li><button class="dropdown-item">${ingredient}</button></li>`;
  });

  function removeDuplication(array) {
    let result = [];
    array.forEach((item, index) => {
      if (array.indexOf(item) == index) result.push(item);
    });
    return result;
  }
}
