var clear = document.querySelector(".clear");
var date = document.querySelector("#date");
var input = document.querySelector("#input");
var list = document.querySelector("#list");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

var newDate = new Date();
console.log(newDate);
var month = newDate.getMonth();
var date1 = newDate.getDate();
var year = newDate.getFullYear();
date.textContent = `${month} .${date1} .${year}`;

var LIST;
var id;

//get item to local storage
let data = localStorage.getItem("ToDo");
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

function loadList(array) {
  array.forEach(function (item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    var inputValue = input.value;
    console.log(inputValue);
    addToDo(inputValue, id, false, false);
    LIST.push({
      name: inputValue,
      id: 0,
      done: false,
      trash: false,
    });
    localStorage.setItem("ToDo", JSON.stringify(LIST));
    id++;
  }
});

function addToDo(inputValue, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  var output = "";
  output += `
    <li class = "item">
    <i class="co fa ${DONE}" job="complete" id=${id}></i>
    <p class = "text ${LINE}"> ${inputValue} </p>
    <i class = "de fa fa-trash-o" job = "delete" id="del"></i> 
    </li>`;
  list.insertAdjacentHTML("beforeEnd", output);
  localStorage.setItem("ToDo", JSON.stringify(LIST));
}

clear.addEventListener("click", clearToDo);

function clearToDo(output) {
  list.innerHTML = "";
}

function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element) {
    console.log() 
  element.parentNode.parentNode.removeChild(element.parentNode);
  localStorage.setItem("ToDo", JSON.stringify(LIST));
  console.log('nikalllll')
  LIST[element.id].trash = LIST[element.id].trash ? false : true;;
}

list.addEventListener("click", function (event) {
  const element = event.target;
  console.log(element)
  const elementJob = element.attributes.job.value;

  if (elementJob === "complete") {
    completeToDo(element);
    localStorage.setItem("ToDo", JSON.stringify(LIST));
  }
  if (elementJob === "delete") {
    removeToDo(element);
    
    console.log(lkhkjshll)
  }
});
