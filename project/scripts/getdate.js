cYear = document.getElementById("currentyear");
date = new Date();
cYear.textContent = date.getFullYear();
lModified = document.querySelector("#lastModified");
lDate = new Date(2025,5,7);
lModified.innerText =  lDate;