const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
if (input.value.trim() !=""){
    input.value = "";
    input.focus();
}
button.addEventListener("click",function(){
if (input.value !=""){
const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.textContent = input.value;
input.value = "";
deleteButton.textContent = "❌";
list.append(li);
li.append(deleteButton);
deleteButton.addEventListener("click",function(){
list.removeChild(li);
input.focus();
})}
});