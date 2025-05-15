cYear = document.getElementById("currentyear");
date = new Date();
cYear.textContent = date.getFullYear();
lModified = document.querySelector("#lastModified");
lDate = new Date(2025,4,15);
lModified.innerText =  lDate;