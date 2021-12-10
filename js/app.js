'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allCities = [];

let allPatCookiesPerHourArr = [];

function Store(city, minCust, maxCust, avgCookiePerCust) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.custPerHourArr = [];
  this.cookiesPerHourArr = [];
  this.dailyTotal = 0;
  allCities.push(this);
  this.renderSales();
}
//use when build is complete


//create random number generator for customer count
Store.prototype.getRandomCust = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//performs random number and pushes to custPerHourArr array
Store.prototype.helpRandomCust = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custPerHourArr.push(this.getRandomCust(this.minCust, this.maxCust));
  }
};
//calculates product of average cookie sales per customer and customer per hour pushes  sum to dailyTotal
Store.prototype.getCookiePerHour = function () {
  this.helpRandomCust();
  for (let i = 0; i < hours.length; i++) {
    let perHour = Math.ceil(this.avgCookiePerCust * this.custPerHourArr[i]);
    this.cookiesPerHourArr.push(perHour); this.dailyTotal += perHour;
  }
};

Store.prototype.renderSales = function () {
  this.getCookiePerHour();
  let tBody = document.getElementById('tbody'); // creates the table body
  let tr = document.createElement('tr'); // creates the table row
  tBody.appendChild(tr); // put the rows in the table
  let td = document.createElement('td'); // creates space for data
  td.textContent = this.city; // data that fills the td
  tr.appendChild(td);// puts the data in the td
  for (let i = 0; i < this.cookiesPerHourArr.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHourArr[i];
    tr.appendChild(td);

  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);

};

function tableHeader() {
  let thead = document.getElementById('thead'); // creates the table head
  let tr = document.createElement('tr'); // creates the table row
  thead.appendChild(tr); // puts row in head
  let td = document.createElement('td'); // preps data
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  let th = document.createElement('th');
  th.textContent = 'Daily Store Total';
  tr.appendChild(th);
}

function allPatCookiesPerHour() {
  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let c = 0; c < allCities.length; c++) {
      sum += allCities[c].cookiesPerHourArr[i];
      //console.log(sum);
    }
    console.log(sum);
    allPatCookiesPerHourArr.push(sum);

    //console.log(allPatCookiesPerHourArr[i]);
  }
}

function tableFooter () {
  allPatCookiesPerHour();
  let tfoot = document.getElementById('tfoot');
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = allPatCookiesPerHourArr[i];
    tr.appendChild(td);
  }
}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

tableHeader();
tableFooter();


