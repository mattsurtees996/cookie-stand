function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const table = document.getElementById("myTable");

const state = {

}

for(){}

function CookieStore(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalDailyCookies = 0;
}

CookieStore.prototype.calcCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCust = randomNum(this.minCust, this.maxCust);
    this.custPerHour.push(numCust);
  }
};

CookieStore.prototype.calcCookiesPerHour = function () {
  for (let i = 0; i < this.custPerHour.length; i++) {
    let cookiesSold = Math.floor(this.custPerHour[i] * this.avgSale);
    this.cookiesPerHour.push(cookiesSold);
  }
};

CookieStore.prototype.render = function () {
  this.calcCustPerHour();
  this.calcCookiesPerHour();

  // table

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // table cell
  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  // get data into the row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  const tableHeader = document.createElement("th");
  tableHeader.textContent = this.totalDailyCookies;
  tr.appendChild(tableHeader);
  table.appendChild(tableRow);
};

function makeHeaderRow() {
  // table

  // table row
  const tr = document.createElement("tr");
  let tableHeader = document.createElement("th");
  tableHeader.textContent = "Locations";
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement("th");
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }

  tableHeader = document.createElement("th");
  tableHeader.textContent = "Totals";
  tableRow.appendChild(tableHeader);
  table.appendChild(tableRow);
}

function makeFooterRow(){

const tableRow = document.createElement("tr");

let tableHeader = document.createElement("th");

tableHeader.textContent = "Hourly Totals";
tableRow.appendChild(tableHeader)

let totalOfTotals = 0;

for(let i= 0; i < hours.length; i++) {
  let hourlyTotal = 0;{
    for(let j = 0; j < StaticRange.allCookieStands.length){}
  }

}

}

const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
const dubai = new CookieStore("Dubai", 11, 38, 3.7);
const paris = new CookieStore("Paris", 20, 38, 2.3);
const lima = new CookieStore("Lima", 2, 16, 4.6);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// Submit Form

const form = document.getElementById("new-store-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeNameInput = event.target.name.value;
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
  const avgCookieInput = event.target.avgCookies.value;

  console.log(storeNameInput);
  console.log(minCustInput);
  console.log(maxCustInput);
  console.log(avgCookieInput);

  form.reset();

  const newStore = new CookieStore(
    storeNameInput,
    minCustInput,
    maxCustInput,
    avgCookieInput
  );

  newStore.render();
});
