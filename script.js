const itm1 = document.getElementById("itm1");
const itm2 = document.getElementById("itm2");
const itm3 = document.getElementById("itm3");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  numOne();
  numTwo();
  numThree();
});

function numOne() {
  itm1.value = Math.floor(Math.random() * 10);
}

function numTwo() {
  itm2.value = Math.floor(Math.random() * 10);
}

function numThree() {
  itm3.value = Math.floor(Math.random() * 10);
}
