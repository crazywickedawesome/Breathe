var circle = document.getElementById("breath");
var ctx = circle.getContext('2d');
ctx.beginPath();
ctx.arc(100, 75, 75, 1, 2 * Math.PI);
ctx.strokeStyle = "#FFFFF";
ctx.stroke();
console.log(ctx); // logs details about render to console;

let stepOne = document.createElement ("p");
let sOText = document.createTextNode("This is new.");
stepOne.appendChild(sOText);
sOText.className = "guide";

let element = document.getElementById("root");
element.appendChild(stepOne);
