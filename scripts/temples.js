const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
cYear = document.getElementById("currentyear");
date = new Date();
cYear.textContent = date.getFullYear();
lModified = document.querySelector("#lastModified");
lDate = new Date(2025,4,17);
lModified.innerText =  lDate;