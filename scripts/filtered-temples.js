const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
let cYear = document.getElementById("currentyear");
let date = new Date();
cYear.textContent = date.getFullYear();
let lModified = document.querySelector("#lastModified");
const lDate = new Date(2025,4,31);
lModified.innerText =  lDate;
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Phoenix Arizona Temple",
	  location: "Phoenix, Arizona",
	  dedicated: "2014, November, 2",
	  area: 64870,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
	},
	{
	  templeName: "Chicago Illinois Temple",
	  location: "Glenview, Illinois ",
	  dedicated: "1989, October, 2",
	  area: 37062,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
	},
	{
	  templeName: "Draper Utah Temple",
	  location: "Draper, Utah",
	  dedicated: "2009, March, 20-22",
	  area: 58300,
	  imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-38937-main.jpg"
	},
]
let div = document.querySelector(".dis"); 
const old = document.querySelector("#old");
const new1 = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");
const home = document.querySelector("#home");

createTemple(temples);
old.addEventListener("click",()=>
{
div.innerHTML = "";
createTemple(temples.filter(temple => parseInt(temple.dedicated.charAt(0)+temple.dedicated.charAt(1)+temple.dedicated.charAt(2)+temple.dedicated.charAt(3)) < 1900));
})
new1.addEventListener("click",()=>
{
div.innerHTML = "";
createTemple(temples.filter(temple => parseInt(temple.dedicated.charAt(0)+temple.dedicated.charAt(1)+temple.dedicated.charAt(2)+temple.dedicated.charAt(3)) > 2000));
})
large.addEventListener("click",()=>
{
div.innerHTML = "";
createTemple(temples.filter(temple => temple.area >90000));
})
small.addEventListener("click",()=>
{
div.innerHTML = "";
createTemple(temples.filter(temple => temple.area < 10000));
})
home.addEventListener("click",()=>
{
div.innerHTML = "";
createTemple(temples);
})


function createTemple(templeObj)
{
templeObj.forEach(temple => {
let fig = document.createElement("figure");
let name = document.createElement("h2");
let locate = document.createElement("p");
let dedicate = document.createElement("p");
let area = document.createElement("p");
let figcapt = document.createElement("figcaption");
let image = document.createElement("img");

name.textContent = temple.templeName;
locate.innerHTML = `<span style="color:green; font-weight: bolder;">LOCATION: </span> ${temple.location}`;
dedicate.innerHTML = `<span style="color:red; font-weight: bolder;">DEDICATED: </span> ${temple.dedicated}`;
area.innerHTML = `<span style="color:green; font-weight: bolder;">SIZE: </span> ${temple.area}`;

image.setAttribute("src",temple.imageUrl);
image.setAttribute("alt", temple.templeName);
image.setAttribute("loading","lazy");

figcapt.appendChild(name);
figcapt.appendChild(locate);
figcapt.appendChild(dedicate);
figcapt.appendChild(area);
fig.appendChild(figcapt);
fig.appendChild(image);

div.appendChild(fig);
});
}