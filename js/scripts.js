var myform = document.querySelector("form");
var myInput = document.querySelector('[name="list-item"]');
var myList = document.querySelector("ul");
myform.addEventListener("submit", function (event) {
    event.preventDefault();
    var formValue = myInput.value;
    var newListItem = document.createElement('LI');
    newListItem.textContent = formValue; //populate the element
    myList.appendChild(newListItem);
});
