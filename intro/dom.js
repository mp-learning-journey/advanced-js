const h1 = document.getElementsByTagName("div")
const firstH1 = document.getElementById("firstH1")
const secondH1 = document.getElementById("secondH1")

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
const toggleBtn = document.getElementById('togglebtn');

button1.onclick = function () {
    alert("Auch! Stop!");
}

toggleBtn.children

console.log(secondH1.className);
// toggleBtn.addEventListener('click', function () {
//     if(secondH1.className === ""){
//         secondH1.className = "in-active"
//     }else{
//         secondH1.className = ""
//     }
// })

toggleBtn.addEventListener('click', function () {
    this.setAttribute("data-color", 'red');
    console.log(this.getAttribute("data-dami"));
    if(secondH1.classList.contains("in-active")){
        secondH1.classList.remove("in-active")
    }else{
        secondH1.classList.add("in-active")
    }
})

// toggleBtn.addEventListener('click', () => {
//     this.setAttribute("data-color", 'red');
//     console.log(this.getAttribute("data-dami"));
//     if(secondH1.classList.contains("in-active")){
//         secondH1.classList.remove("in-active")
//     }else{
//         secondH1.classList.add("in-active")
//     }
// })

button1.innerText = "Dont click me";

// button1.addEventListener('click', function (){
//     button1.innerText = "Clicked";
//     alert("They have clicked me o!");
// });

console.log(document.body.children[0].nextElementSibling);