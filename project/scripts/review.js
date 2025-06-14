let cYear = document.getElementById("currentyear");
let date = new Date();
cYear.textContent = date.getFullYear();
let lModified = document.querySelector("#lastModified");
const lDate = new Date(2025,5,6);
lModified.innerText =  lDate;

let pName = document.querySelector('#nd');
let pId = document.querySelector('#dd');
let pPri = document.querySelector('#pr');
let img = document.getElementById('img');

let detailArray = JSON.parse(localStorage.getItem('detail'));
pName.textContent = detailArray[0];
pId.textContent = detailArray[1];
pPri.textContent = detailArray[2];
img.src = `images/${detailArray[0].toLowerCase()}.png`; 
alert(`Hi ${detailArray[3]}`)
