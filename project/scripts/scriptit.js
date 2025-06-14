let cYear = document.getElementById("currentyear");
let date = new Date();
cYear.textContent = date.getFullYear();
let lModified = document.querySelector("#lastModified");
const lDate = new Date(2025,5,6);
lModified.innerText =  lDate;

const ul = document.querySelector('ul');
const show = document.querySelector('.hide');
show.addEventListener('click', ()=>{
ul.classList.toggle('showd');
show.classList.toggle('show');
});