var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); //create element
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = " ";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut)

    var deleteButton = document.createElement("button")
    deleteButton.appendChild(document.createTextNode("X"))
    li.appendChild(deleteButton);

    function deletListItem() {
        li.classList.add("delete");
    }
    deleteButton.addEventListener("click", deletListItem);

}

function addListAfterClick(){
    if(inputLength()>0){
        createListElement()
    }
}
enterButton.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("enter").click();
    }
  });