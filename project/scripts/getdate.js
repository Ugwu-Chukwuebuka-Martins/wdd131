let cYear = document.getElementById("currentyear");
let date = new Date();
cYear.textContent = date.getFullYear();
let lModified = document.querySelector("#lastModified");
let lDate = new Date(2025,5,7);
lModified.innerText =  lDate;