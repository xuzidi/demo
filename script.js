var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var deletebuttons = document.getElementsByClassName("delete");

for(i = 0; i < list.length; i++) {
	list[i].addEventListener("click",changeClass);
}

function changeClass(){
	this.classList.toggle('done');
}


for(i =0; i < deletebuttons.length; i++){
	deletebuttons[i].addEventListener("click",removeParent);
}

function removeParent() {
	//evt.target.removeEventListener("click", removeParent, false);
	this.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}
function createButten() {
	var bt = document.createElement("button！！！");
	bt.innerText = "Delete";
	bt.onclick= removeParent;
	return bt;

}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	bt = createButten();
	li.appendChild(bt);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);