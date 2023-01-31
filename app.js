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

function CookieStore(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
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
  const table = document.getElementById("myTable");

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
};

function makeHeaderRow() {
  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // starting cell
  let th = document.createElement("th");
  tr.appendChild(th);
  // get data into the row
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
}

makeHeaderRow();

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

// const seattle = {
//   name: "Seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   calcCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCust = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCust);
//     }
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
//     }
//   },
//   render: function () {
//     this.calcCustPerHour();
//     this.calcCookiesPerHour();

//     const div = document.getElementById(this.name);

//     const h2 = document.createElement("h2");
//     h2.textContent = this.name;
//     div.appendChild(h2);

//     const ul = document.createElement("ul");
//     div.appendChild(ul);

//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       const li = document.createElement("li");
//       li.textContent = this.cookiesPerHour[i] + " cookies";
//       ul.appendChild(li);
//     }
//   },
// };

// const tokyo = {
//   name: "Tokyo",
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   custPerHour: [],
//   cookiesPerHour: [],
//   calcCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCust = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCust);
//     }
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
//     }
//   },
//   render: function () {
//     this.calcCustPerHour();
//     this.calcCookiesPerHour();

//     const div = document.getElementById(this.name);

//     const h2 = document.createElement("h2");
//     h2.textContent = this.name;
//     div.appendChild(h2);

//     const ul = document.createElement("ul");
//     div.appendChild(ul);

//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       const li = document.createElement("li");
//       li.textContent = this.cookiesPerHour[i] + " cookies";
//       ul.appendChild(li);
//     }
//   },
// };

// const hours = [
//   "6am",
//   "7am",
//   "8am",
//   "9am",
//   "10am",
//   "11am",
//   "12pm",
//   "1pm",
//   "2pm",
//   "3pm",
//   "4pm",
//   "5pm",
//   "6pm",
//   "7pm",
// ];

// function CookieStore(name, minCust, maxCust, avgsale) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgsale = avgsale;
//   this.custPerHour = [];
//   this.Cookiesperhour = [];
// }

// CookieStore.prototype.calcCustPerHour = function () {
//   for (let i = 0; i < hours.length; i++) {
//     const oneHour = Math.ceil(this.custPerHour[i] * this.avgSale);
//     this.cookiesEachHour.push(oneHour);
//     this.totalDailyCookies += oneHour;
//   }
// };

// CookieStore.prototype.calcCookiesPerHour = function () {
//   for (let i = 0; i < hours.length; i++) {
//     const oneHour = Math.ceil(this.custPerHour[i] * this.avgSale);
//     this.Cookiesperhour.push(cookiesSold);
//   }
// };

// CookieStore.prototype.render =
// const seattle = {
//   name: "Seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   custPerHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCusts = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCusts);
//     }
//     this.calcCookiesEachHour();
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       const oneHour = Math.ceil(this.custPerHour[i] * this.avgSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render: function () {
//     this.getCustPerHour();
//     const underorderedList = document.getElementById("seattle");
//     for (let i = 0; i < hours.length; i++) {
//       const listItem = document.createElement("li");
//       listItem.textContent =
//         hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
//       underorderedList.appendChild(listItem);
//     }
//     const listItem = document.createElement("li");
//     listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
//     underorderedList.appendChild(listItem);
//   },
// };

// seattle.getCustPerHour();
// console.log(seattle);

///////////

// const tokyo = {
//   name: "tokyo",
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   custPerHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCusts = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCusts);
//     }
//   },
//   calcCookiesEachHour: function () {
//     this.getCustPerHour();
//     for (let i = 0; i < hours.length; i++) {
//       const oneHour = Math.ceil(this.custPerHour[i] * this.avgSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render() {
//     this.calcCookiesEachHour();
//     const underorderedList = document.getElementById("tokyo");
//     for (let i = 0; i < hours.length; i++) {
//       const listItem = document.createElement("li");
//       listItem.textContent =
//         hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
//       underorderedList.appendChild(listItem);
//     }
//     const listItem = document.createElement("li");
//     listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
//     underorderedList.appendChild(listItem);
//   },
// };

// tokyo.getCustPerHour();
// console.log(tokyo);

// /////////

// const dubai = {
//   name: "Dubai",
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   custPerHour: [],
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCusts = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCusts);
//     }
//   },
// };

// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// dubai.getCustPerHour();
// console.log(dubai);

// //////

// const paris = {
//   name: "Paris",
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   custPerHour: [],
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCusts = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCusts);
//     }
//   },
// };

// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// paris.getCustPerHour();
// console.log(paris);

// ////////

// const lima = {
//   name: "Lima",
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   custPerHour: [],
//   getCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCusts = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCusts);
//     }
//   },
// };

// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// lima.getCustPerHour();
// console.log(lima);

// ////////

// const cookieStands = document.getElementById("Cookie-Stores");

// console.log(cookieStands);

// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const allShops = [seattle, tokyo, Dubai, paris, lima];

// function renderAllShops() {
//   for (let i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// }

// renderAllShops();
