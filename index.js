function addItemEvent() {
  const button = document.querySelector("button#submit-item");
  button.addEventListener("click", event => {
    event.preventDefault();
    const input = document.querySelector("input#item-input");
    const item = input.value;
    if (item === "") {
      window.alert("You must write an item first!");
      return;
    }
    input.value = "";
    const itemElement = `
      <li>
        <div class="item-container">
          <div class="item-text">${item}</div>
          <div class="buttons-container">
            <button id="check-btn">Check</button>
            <button id="delete-btn">Delete</button>
          </div> 
        </div>
      </li>
    `;
    const itemsList = document.getElementById("items-list");
    itemsList.innerHTML += itemElement;
  });
}

// Check button on a LI element
function handleCheck(button) {
  const itemContainer = button.parentElement.parentElement;
  const text = itemContainer.querySelector(".item-text");
  if (text.className.search(/item-text-checked/g) !== -1) {
    text.className = "item-text";
  } else {
    text.className = "item-text item-text-checked";
  }
}

// Delete button on a LI element.
function handleDelete(button) {
  const li = button.parentElement.parentElement.parentElement;
  li.parentElement.removeChild(li);
}

function handleClickList() {
  const itemsList = document.querySelector("ul#items-list");
  itemsList.addEventListener("click", event => {
    if (event.target && event.target.tagName === "BUTTON") {
      const button = event.target;
      if (button.id === "check-btn") {
        handleCheck(button);
      } else if (button.id === "delete-btn") {
        handleDelete(button);
      }
    }
  });
}

function handleChangeTitle() {
  const title = document.querySelector("h1#page-title");
  title.addEventListener("click", event => {
    title.innerHTML = "A01176590 - Jorge Arturo Torres Cruz";
  });

  title.addEventListener("mouseleave", event => {
    title.innerHTML = "Shopping List";
  });
}

function init() {
  addItemEvent();
  handleClickList();
  handleChangeTitle();
}

document.addEventListener("DOMContentLoaded", () => {
  init();
});
