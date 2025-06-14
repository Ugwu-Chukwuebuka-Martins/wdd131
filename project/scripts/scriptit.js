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
const products = [
{
id: "tw-1888",
name: "Typewritter",
price: 5
},
{
id: "c-1909",
name: "Camera",
price: 10
},
{
id: "e-1008",
name: "Earphone",
price: 4
},
{
id: "tv-1888",
name: "Television",
price: 20
},
];
let options = document.querySelectorAll('option');
let select = document.getElementById('product');
let img = document.getElementById('img');
const details = document.getElementById('detail');
let named = document.getElementById('name');

let addProducts = (productList,opt)=>{
for(i=0; i<productList.length; i++){
opt.item(i).textContent = productList[i].name;
opt.item(i).setAttribute('id',productList[i].id);
opt.item(i).setAttribute('value',productList[i].name);
}
}
let detailArr = [];
img.setAttribute('src','images/typewritter.png');
select.value = "";
addProducts(products,options);
select.addEventListener('change',()=>{addToArr(products)});
function addToArr(list)
{
img.src = `images/${select.value.toLowerCase()}.png`; 
products.forEach(product => {
if(product.name == select.value)
{
detailArr.push(product.name);
detailArr.push(product.id);
detailArr.push(`N${product.price}`);
}})
}
details.addEventListener('click',()=>{
detailArr.push(named.value);
localStorage.setItem('detail',JSON.stringify(detailArr));
})
