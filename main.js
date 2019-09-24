let stepOne = document.createElement ("h1");
let sOText = document.createTextNode("This is new.");
stepOne.appendChild(sOText);
sOText.className = "guide";

let element = document.getElementById("root");
element.appendChild(stepOne);
