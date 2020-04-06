const myform: HTMLElement = document.querySelector("form");
const myInput: HTMLInputElement = document.querySelector('[name="list=item"]');
const myList: HTMLElement = document.querySelector("ul");

myform.addEventListener("submit", (event) => {
  event.preventDefault();

  const formValue: string = myInput.value;
  const newListItem: HTMLElement = document.createElement("LI");
  newListItem.textContent = formValue; //populate the element

  myList.appendChild(newListItem);
});
