const h1 = document.getElementsByTagName("div")
const firstH1 = document.getElementById("firstH1")
// output = h1[2];
const divs = document.getElementsByClassName("div");

const divWithQuerySelector = document.querySelector('#firstH1');

// for(let x = 0; x < divWithQuerySelector.length; x++) {
//     divWithQuerySelector[x].style.backgroundColor = 'blue';
// }

// console.log(divWithQuerySelector)
// console.log(divs);

// divs[0].style.backgroundColor = 'blue';
// divs[1].style.backgroundColor = 'red';
// divs[2].style.backgroundColor = 'blue';

firstH1.innerText = "Dami changed me the";

const button1 = document.getElementById('btn1');

button1.innerText = "Dont click me";
button1.addEventListener('click', function (){
    button1.innerText = "Clicked";
    alert("They have clicked me o!");
});

console.log(document.body.children[0].nextElementSibling);