function init() {
  const inputSearch = document.querySelector(".input-search");
  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      let searchValue = "";
      searchValue = inputSearch.value;
      addToSearchArray(searchValue, "globalSearch");
    } else {
      recipesContainer.innerHTML = "";
      displayAllRecipes();
    }
  });

  displayAllRecipes();
  createFilterLists(filtersType);
  addEventButtons(filtersType);

  const options = document.querySelectorAll(".dropdown-item");
  options.forEach((element) => {
    element.addEventListener("click", () => {
      createTag(element);
    });
  });
}

init();
