let cYear = document.getElementById("currentyear");
let date = new Date();
cYear.textContent = date.getFullYear();
let lModified = document.querySelector("#lastModified");
let lDate = new Date(2025,4,30);
lModified.innerText =  lDate;
let windChill = document.querySelector("#wc");
function calculateWindChill(temperature,windspeed){
return (((35.74 + 0.6215)*(temperature)) - (35.75*((windspeed)**0.16)) + (0.4275*(temperature))*((windspeed)**0.16)).toFixed(3);
}
windChill.textContent = calculateWindChill(26.9,10);