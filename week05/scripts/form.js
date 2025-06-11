let cYear = document.getElementById("currentyear");
let date = new Date();
cYear.textContent = date.getFullYear();
let lModified = document.querySelector("#lastModified");
const lDate = new Date(2025,4,29);
lModified.innerText =  lDate;
let product = document.querySelectorAll("option");
let review = document.getElementById("submit");

const products = [
{
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
},
{
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
},
{
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
},
{
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
},
{
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
}
];

for (i=0; i<products.length; i++)
{
    product.item(i+1).textContent = products[i].name;
    product.item(i+1).value = products[i].id;
}
let count = 0;
review.addEventListener("click",function(){
count +=1;
localStorage.setItem("count",count);
});