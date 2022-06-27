function createFilterByType(recipes) {
  const filterType = ["ingredients", "appliance", "ustensils"];
  filterType.forEach((type) => {
    const listContainer = document.querySelector(`.${type}-container`);
    createFilters(type, recipes, listContainer);
    changeSizeButton(type);
  });

  function createFilters(type, recipes, listContainer) {
    listContainer.innerHTML = "";
    const filters = [];
    recipes.forEach((recipe) => {
      let { ingredients, appliance, ustensils } = recipe;
      switch (type) {
        case "ingredients":
          ingredients.forEach((i) => {
            filters.push(i.ingredient);
          });
          break;

        case "appliance":
          filters.push(appliance);
          break;

        case "ustensils":
          ustensils.forEach((ustensil) => {
            filters.push(ustensil);
          });
          break;

        default:
          break;
      }
    });
    removeDuplication(type, filters, listContainer);

    function removeDuplication(type, filters, listContainer) {
      let result = [];
      filters.forEach((item, index) => {
        if (filters.indexOf(item) == index) result.push(item);
      });
      displayFilters(type, result, listContainer);
    }

    function displayFilters(type, filters, listContainer) {
      filters.forEach((filter) => {
        createListElement(listContainer, type, filter);
      });
      const search = document.querySelector(`.${type}-search`);
      search.addEventListener("keyup", () => {
        searchFilter(type, filters, listContainer, search.value);
      });
      addClickEvent(type);
    }

    function searchFilter(type, filters, listContainer, input) {
      listContainer.innerHTML = "";
      filters.forEach((filter) => {
        if (filter.toLowerCase().includes(input.toLocaleLowerCase())) {
          createListElement(listContainer, type, filter);
          addClickEvent(type);
        }
      });
    }

    function createListElement(listContainer, type, filter) {
      listContainer.innerHTML += `<li><button class="dropdown-item ${type}-item">${filter}</button></li>`;
    }

    function addClickEvent(type) {
      const listFilter = document.querySelectorAll(`.${type}-item`);
      listFilter.forEach((item) => {
        item.addEventListener("click", () => {
          createTag(item, type);
          searchRecipes(inputSearch.value);
        });
      });
    }
  }

  function changeSizeButton(type) {
    const button = document.querySelector(`.btn-${type}`);
    const searchFilter = document.querySelector(`.${type}-search`);
    addOnclickEvent(button, searchFilter);
    addOnclickEvent(searchFilter, searchFilter);
    const column = document.querySelector(`.${type}`);
    let word = "";
    switch (type) {
      case "ingredients":
        word = "ingrédients";
        break;

      case "appliance":
        word = "appareils";
        break;

      case "ustensils":
        word = "ustensiles";
        break;

      default:
        break;
    }

    function addOnclickEvent(element, searchFilter) {
      element.onclick = () => {
        column.classList.remove("col-1");
        column.classList.add("col-6");
        searchFilter.placeholder = `Rechercher des ${word}`;
      };
    }

    document.addEventListener("click", (event) => {
      if (event.target !== button) {
        if (event.target !== searchFilter) {
          column.classList.remove("col-6");
          column.classList.add("col-1");
          searchFilter.placeholder = `${word}`;
        }
      }
    });
  }

  function createTag(filter, type) {
    if (filter.className.toLowerCase().includes("ingredients")) {
      displayTag(filter, type);
    } else if (filter.className.toLowerCase().includes("appliance")) {
      displayTag(filter, type);
    } else {
      displayTag(filter, type);
    }

    function displayTag(filter, type) {
      const tagList = document.querySelector(".tag-list");
      let text = filter.innerText.replace(/\s/g, "");
      const tagElement = `<div class="tag-${type} d-flex justify-content-around align-items-center" id="tag-${text}">
        <span class="tag-${text} tag-item">${filter.innerText}</span>
        <i class="fa-solid fa-xmark cross" id="cross-${text}"></i>
        </div>`;
      tagList.innerHTML += tagElement;
      const crosses = document.querySelectorAll(".cross");
      crosses.forEach((cross) => {
        cross.addEventListener("click", () => {
          removeTag(cross);
        });
      });
    }

    function removeTag(cross) {
      let tagName = cross.id.split("-")[1];
      const currentTag = document.getElementById(`tag-${tagName}`);
      currentTag.remove();
      searchRecipes(inputSearch.value);
    }
  }
}
