//create variables
const picChange = document.querySelector(".imgs");
const stopR = document.querySelector(".stop-logo");
const conR = document.querySelector(".con-logo");
const btn = document.querySelector(".click");

const RandomDev = document.querySelector(".random");
const h1one = document.querySelectorAll(".hone");
btn.addEventListener("click", () => {
  RandomDev.classList.toggle("open");
});

//Random pic
const arraysPic = [
  "2318050.jpg",
  "five.jpg",
  "four.jpg",
  "three.jpg",
  "two.jpg",
];

let randomPi;
function Cont() {
  conR.addEventListener("click", () => {
    randomPi = setInterval(change, 2000);
    if (conR) {
      conR.classList.add("yes-logo");
      stopR.classList.remove("no-logo");
    }
  });
}
Cont();

function change() {
  const random = Math.floor(Math.random() * arraysPic.length);
  picChange.style.backgroundImage = 'url("img/' + arraysPic[random] + '")';

  function StopRandom() {
    stopR.addEventListener("click", () => {
      clearInterval(randomPi);
      if (stopR) {
        stopR.classList.add("no-logo");
        conR.classList.remove("yes-logo");
      }
    });
  }
  StopRandom();
}

change();

//End of random pic
//toogle div up and down

function scroll() {
  window.onscroll = function () {
    for (i = 0; i < h1one.length; i++) {
      var top = window.scrollY;
      console.log(top);
      if (top >= 650 && top <= 1650) {
        console.log("yes");
        h1one[i].style.opacity = 2;
      } else {
        h1one[i].style.opacity = 0;
      }
    }
  };
}
scroll();
