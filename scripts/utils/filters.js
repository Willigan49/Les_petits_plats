let filterContainer;

function createFilterLists(type) {
  type.forEach((t) => {
    recipes.forEach((r) => {
      let { ingredients, appliance, ustensils } = r;
      switch (t) {
        case "ingredients":
          filterContainer = document.querySelector(".ingredient-container");
          ingredients.forEach((i) => {
            addFilterListItem(i.ingredient);
          });
          break;

        case "appareils":
          filterContainer = document.querySelector(".appareil-container");
          addFilterListItem(appliance);
          break;

        case "ustensils":
          filterContainer = document.querySelector(".ustensil-container");
          ustensils.forEach((ustensil) => {
            addFilterListItem(ustensil);
          });
          break;

        default:
          break;
      }
    });
  });
}

function addFilterListItem(item) {
  if (!filterContainer.innerHTML.includes(item)) {
    filterContainer.innerHTML += `<li><button class="dropdown-item">${item}</button></li>`;
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

function createTags() {
  const options = document.querySelectorAll(".dropdown-item");
  options.forEach((element) => {
    element.addEventListener("click", () => {
      let text = element.innerText.replace(/\s/g, "");
      const tag = `<div class="tag d-flex justify-content-around align-items-center" id="tag-${text}">
    <span class="tag-title">${element.innerText}</span>
    <i class="fa-solid fa-xmark cross" id="cross-${text}"></i>
    </div>`;
      const tagList = document.querySelector(".tag-list");
      tagList.innerHTML += tag;
      const tags = document.querySelectorAll(".cross");
      tags.forEach((tag) => {
        tag.addEventListener("click", () => {
          let tagName = tag.id.split("-")[1];
          const currentTag = document.getElementById(`tag-${tagName}`);
          currentTag.remove();
        });
      });
    });
  });
}
