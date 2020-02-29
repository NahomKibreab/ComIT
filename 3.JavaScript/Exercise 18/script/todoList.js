let newItem = document.getElementById("newItem");
let addButton = document.getElementById("addButton");
let allItems = document.getElementById("allItems");

function onAddItem() {
  let newTodoText = newItem.value;
  if (newTodoText.trim() == "") {
    alert("Ple");
  }
  let previousAllItems = allItems.innerHTML;
  allItems.innerHTML = previousAllItems + "<li>" + newTodoText + "</li>";
  newItem.value = "";
}

function validate() {
  if (newItem.value.trim() == "") {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
}

addButton.addEventListener("click", onAddItem);
newItem.addEventListener("keyup", validate);
