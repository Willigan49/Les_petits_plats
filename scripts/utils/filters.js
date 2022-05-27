function createFilterByType(recipes) {
  const filterType = ["ingredients", "appliance", "ustensils"];
  filterType.forEach((type) => {
    createFilterLists(type, recipes);
  });

  function createFilterLists(type, recipes) {
    const listContainer = document.querySelector(`.${type}-container`);
    listContainer.innerHTML = "";
    const array = [];
    recipes.forEach((recipe) => {
      let { ingredients, appliance, ustensils } = recipe;
      switch (type) {
        case "ingredients":
          ingredients.forEach((i) => {
            array.push(i.ingredient);
          });
          break;

        case "appliance":
          array.push(appliance);
          break;

        case "ustensils":
          ustensils.forEach((u) => {
            array.push(u);
          });
          break;

        default:
          break;
      }
    });
    let filterArray = [];
    filterArray = removeDuplication(array);
    filterArray.forEach((filter) => {
      listContainer.innerHTML += `<li><button class="dropdown-item">${filter}</button></li>`;
    });

    const button = document.getElementById(`btn-${type}`);
    const column = document.querySelector(`.${type}`);

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

    const search = document.querySelector(`.${type}-search`);
    search.addEventListener("keyup", () => {
      listContainer.innerHTML = "";
      filterArray.forEach((filter) => {
        if (filter.toLowerCase().includes(search.value.toLocaleLowerCase())) {
          let filterArray = [];
          filterArray.push(filter);
          filterArray.forEach((filter) => {
            listContainer.innerHTML += `<li><button class="dropdown-item">${filter}</button></li>`;
          });
        }
      });
    });

    function removeDuplication(array) {
      let result = [];
      array.forEach((item, index) => {
        if (array.indexOf(item) == index) result.push(item);
      });
      return result;
    }
  }
  const listItem = document.querySelectorAll(".dropdown-item");
  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      createTag(item);
    });
  });
}

function createTag(element) {
  let filterArray = [];
  filterArray.push(element.innerText);
  filterArray.forEach((filter) => {
    filterArray = [];
    let text = filter.replace(/\s/g, "");
    const tag = `<div class="tag d-flex justify-content-around align-items-center" id="tag-${text}">
      <span class="tag-${text}">${filter}</span>
      <i class="fa-solid fa-xmark cross" id="cross-${text}"></i>
      </div>`;
    const tagList = document.querySelector(".tag-list");
    tagList.innerHTML += tag;
  });
  const tags = document.querySelectorAll(".cross");
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      let tagName = tag.id.split("-")[1];
      let currentTagTitle = document.querySelector(`.tag-${tagName}`);
      const index = filterArray.indexOf(currentTagTitle.innerText);
      filterArray.splice(index, 1);
      const currentTag = document.getElementById(`tag-${tagName}`);
      currentTag.remove();
    });
  });
}
