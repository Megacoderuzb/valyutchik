let input = document.querySelector("input");
let currency = document.getElementById("currency");
let to = document.getElementById("tocurrency");
let btn = document.getElementById("convert");
let result = document.getElementById("result");
let opt = document.createElement("option");
let opt1 = document.createElement("option");
let opt2 = document.createElement("option");
// let opt3 = document.createElement("option");
currency.addEventListener("input", (e) => {
  if (currency.value == "usd") {
    opt.innerText = "EUR";
    opt.setAttribute("value", "eur");
    to.appendChild(opt);
    opt1.innerText = "UZS";
    opt1.setAttribute("value", "uzs");
    to.appendChild(opt1);
    opt2.innerText = "RUB";
    opt2.setAttribute("value", "rub");
    to.appendChild(opt2);
  } else if (currency.value == "eur") {
    opt.innerText = "USD";
    opt.setAttribute("value", "usd");
    to.appendChild(opt);
    opt1.innerText = "UZS";
    opt1.setAttribute("value", "uzs");
    to.appendChild(opt1);
    opt2.innerText = "RUB";
    opt2.setAttribute("value", "rub");
    to.appendChild(opt2);
  } else if (currency.value == "uzs") {
    opt.innerText = "USD";
    opt.setAttribute("value", "usd");
    to.appendChild(opt);
    opt1.innerText = "EUR";
    opt1.setAttribute("value", "eur");
    to.appendChild(opt1);
    opt2.innerText = "RUB";
    opt2.setAttribute("value", "rub");
    to.appendChild(opt2);
  } else if (currency.value == "rub") {
    opt.innerText = "USD";
    opt.setAttribute("value", "usd");
    to.appendChild(opt);
    opt1.innerText = "EUR";
    opt1.setAttribute("value", "eur");
    to.appendChild(opt1);
    opt2.innerText = "UZS";
    opt2.setAttribute("value", "uzs");
    to.appendChild(opt2);
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currency.value == "usd" && to.value == "uzs") {
    let a = input.value * 11260;
    console.log(input.value);
    result.innerText = `${a} So'm`;
  }
  if (currency.value == "usd" && to.value == "eur") {
    let a = input.value / 1.05;
    console.log(input.value);
    result.innerText = `${a} Yevro`;
  }
  if (currency.value == "usd" && to.value == "rub") {
    let a = input.value * 63;
    console.log(input.value);
    result.innerText = `${a} Rubl`;
  }
  if (currency.value == "uzs" && to.value == "usd") {
    let a = input.value / 11260;
    console.log(input.value);
    result.innerText = `${a} Dollar`;
  }
  if (currency.value == "uzs" && to.value == "eur") {
    let a = input.value / 11960;
    console.log(input.value);
    result.innerText = `${a} Yevro`;
  }
  if (currency.value == "uzs" && to.value == "rub") {
    let a = input.value / 178;
    console.log(input.value);
    result.innerText = `${a} Rubl`;
  }
  if (currency.value == "eur" && to.value == "usd") {
    let a = input.value * 1.05;
    console.log(input.value);
    result.innerText = `${a} Dollar`;
  }
  if (currency.value == "eur" && to.value == "uzs") {
    let a = input.value * 11822;
    console.log(input.value);
    result.innerText = `${a} Yevro`;
  }
  if (currency.value == "eur" && to.value == "rub") {
    let a = input.value * 66;
    console.log(input.value);
    result.innerText = `${a} Rubl`;
  }
  if (currency.value == "rub" && to.value == "usd") {
    let a = input.value * 0.016;
    console.log(input.value);
    result.innerText = `${a} Dollar`;
  }
  if (currency.value == "rub" && to.value == "eur") {
    let a = input.value * 0.015;
    console.log(input.value);
    result.innerText = `${a} Yevro`;
  }
  if (currency.value == "rub" && to.value == "uzs") {
    let a = input.value * 180;
    console.log(input.value);
    result.innerText = `${a} So'm`;
  }
  return;
});
