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
const lDate = new Date(2025,4,29);
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
let images = document.querySelectorAll("img");
let figcapts = document.querySelectorAll("figcaption");
for(i=0; i<images.length; i++)
{
	images.item(i).src = temples[i].imageUrl;
	let a = document.createElement("h2");
	let b = document.createElement("p");
	let c = document.createElement("p");
	let d = document.createElement("p");
	a.textContent = temples[i].templeName;
	b.innerHTML = `<span style="color:green; font-weight: bolder;">LOCATION: </span> ${temples[i].location}`;
	c.innerHTML = `<span style="color:red; font-weight: bolder;">DEDICATION: </span> ${temples[i].dedicated}`;
	d.innerHTML = `<span style="color:green; font-weight: bolder;">AREA: </span> ${temples[i].area.toLocaleString()} sq ft`;
	figcapts.item(i).appendChild(a);
	figcapts.item(i).appendChild(b);
	figcapts.item(i).appendChild(c);
	figcapts.item(i).appendChild(d);
}