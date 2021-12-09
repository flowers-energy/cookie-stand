'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allCities = [];

function Store(city, minCust, maxCust, avgCookiePerCust) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.custPerHourArr = [];
  this.cookiesPerHourArr = [];
  this.dailyTotal = 0;
  allCities.push(this);

  //use when build is complete


}

Store.prototype.getRandomCust = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Store.prototype.helpRandomCust = function () {
  for (let i = 0; i < hours.length; i++) {
    // let cust = this.getRandomCust(this.minCust, this.maxCust);
    // console.log(cust);
    this.custPerHourArr.push(this.getRandomCust(this.minCust, this.maxCust));
  }
};

Store.prototype.getCookiePerHour = function () {
  this.helpRandomCust();
  for (let i = 0; i < hours.length; i++) {
    let perHour = Math.ceil(this.avgCookiePerCust * this.custPerHourArr[i]);
    this.cookiesPerHourArr.push(perHour); this.dailyTotal += perHour;
  }
};

Store.prototype.renderSales = function () {
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

};

function tableHeader() {
  let thead = document.getElementById('thead'); // creates the table head
  let tr = document.createElement('tr'); // creates the table row
  thead.appendChild(tr); // puts row in head
  let td = document.createElement('td'); // preps data
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }


  function tableFooter() {
    let tfoot = document.getElementById('tfoot');
    let tr = document.getElementById('tr');
    tfoot.appendChild(tr);
    let td = document.createElement('td');

  }

}

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);



allCities[0].getCookiePerHour();
allCities[0].renderSales();

