const currancyEl_one = document.getElementById("currancy-one");
const currancyEl_two = document.getElementById("currancy-two");
let amountEl_one = document.getElementById("amount-one");
let amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//Fetch Exchange

function calculate() {
  const currancy_one = currancyEl_one.value;
  const currancy_two = currancyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currancy_one}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const rate = data.rates[currancy_two];
      rateEl.innerText = `1 ${currancy_one} = ${rate} ${currancy_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}
currancyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currancyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currancyEl_one.value;
  currancyEl_one.value = currancyEl_two.value;
  currancyEl_two.value = temp;
  calculate();
});

calculate();
