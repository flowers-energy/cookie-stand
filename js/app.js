'use strict';

let ul = document.getElementById('seattle');
console.log(ul);


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// object literals defined by city
//console.log(cookiesPerHour)
let seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  custPerHourArr: [],
  cookiesPerHourArr: [],
  dailyTotal: 0,


  helpRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHourArr.push(getRandomCust(this.minCust, this.maxCust))
    }
  },

  helpCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let perHour = Math.ceil(this.avgCookiePerCust * this.custPerHourArr[i])
      this.cookiesPerHourArr.push(perHour); this.dailyTotal += perHour;
    }
  },

}

//getRandomCust(23, 65)
//console.log(hours.length)
seattle.helpRandomCust(this.minCust, this.maxCust)
seattle.helpCustPerHour()
//console.log(seattle.custPerHourArr)
// console.log("Seattle " + seattle.cookiesPerHourArr)
//console.log("Daily Total " + this.dailyTotal)

seattle.render = function () {

  this.helpCustPerHour();

  for (let i = 0; i < seattle.cookiesPerHourArr.length; i++) {

    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${seattle.cookiesPerHourArr[i]}
    perHour`;
    ul.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${seattle.dailyTotal}`;
  ul.appendChild(li);
};

seattle.render();

let ul2 = document.getElementById('tokyo');
console.log(ul2);

let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,
  custPerHourArr: [],
  cookiesPerHourArr: [],
  dailyTotal: 0,

  helpRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHourArr.push(getRandomCust(this.minCust, this.maxCust))
    }
  },
  helpCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const perHour = Math.ceil(this.avgCookiePerCust * this.custPerHourArr[i])
      this.cookiesPerHourArr.push(perHour); this.dailyTotal += perHour;
    }
  },


}


tokyo.helpRandomCust(this.minCust, this.maxCust)
tokyo.helpCustPerHour()
console.log(tokyo.custPerHourArr)
console.log("Tokyo " + tokyo.cookiesPerHourArr)

tokyo.render = function () {

  this.helpCustPerHour();

  for (let i = 0; i < tokyo.cookiesPerHourArr.length; i++) {

    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${tokyo.cookiesPerHourArr[i]}
    perHour`;
    ul2.appendChild(li);
  }
  let li = document.createElement('li');
  li.textContent = `Total: ${tokyo.dailyTotal}`;
  ul2.appendChild(li);
};

tokyo.render();

let ul3 = document.getElementById('dubai');
console.log(ul3);

let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookiePerCust: 3.7,
  custPerHourArr: [],
  cookiesPerHourArr: [],
  dailyTotal: 0,

  helpRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHourArr.push(getRandomCust(this.minCust, this.maxCust))
    }
  },
  helpCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const perHour = Math.ceil(this.avgCookiePerCust * this.custPerHourArr[i])
      this.cookiesPerHourArr.push(perHour); this.dailyTotal += perHour;
    }
  }

}

dubai.helpRandomCust(this.minCust, this.maxCust)
dubai.helpCustPerHour()
console.log(dubai.custPerHourArr)
console.log("Dubai " + dubai.cookiesPerHourArr)

dubai.render = function () {

  this.helpCustPerHour();

  for (let i = 0; i < dubai.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${dubai.cookiesPerHourArr[i]}
    perHour`;
    ul3.appendChild(li);

  }

  let li = document.createElement('li');
  li.textContent = `Total: ${dubai.dailyTotal}`;
  ul3.appendChild(li);

};

dubai.render();

let ul4 = document.getElementById('paris');
console.log(ul4);

let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookiePerCust: 2.3,
  custPerHourArr: [],
  cookiesPerHourArr: [],
  dailyTotal: 0,

  helpRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHourArr.push(getRandomCust(this.minCust, this.maxCust))
    }
  },
  helpCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const perHour = Math.ceil(this.avgCookiePerCust * this.custPerHourArr[i])
      this.cookiesPerHourArr.push(perHour); this.dailyTotal += perHour;
    }
  }

}
paris.helpRandomCust(this.minCust, this.maxCust)
paris.helpCustPerHour()
console.log(paris.custPerHourArr)
console.log("Paris " + paris.cookiesPerHourArr)

paris.render = function () {

  this.helpCustPerHour();

  for (let i = 0; i < paris.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${paris.cookiesPerHourArr[i]}
      perHour`;
    ul4.appendChild(li);

  }

  let li = document.createElement('li');
  li.textContent = `Total: ${paris.dailyTotal}`;
  ul4.appendChild(li);

};

paris.render()

let ul5 = document.getElementById('lima');
console.log(ul4);

let lima = {
  minCust: 2,
  maxCust: 16,
  avgCookiePerCust: 4.6,
  custPerHourArr: [],
  cookiesPerHourArr: [],
  dailyTotal: 0,

  helpRandomCust: function () {
    for (let i = 0; i < hours.length; i++) {
      this.custPerHourArr.push(getRandomCust(this.minCust, this.maxCust))
    }
  },
  helpCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const perHour = Math.ceil(this.avgCookiePerCust * this.custPerHourArr[i])
      this.cookiesPerHourArr.push(perHour); this.dailyTotal += perHour;
    }
  }

}

lima.helpRandomCust(this.minCust, this.maxCust)
lima.helpCustPerHour()
console.log(lima.custPerHourArr)
console.log("Lima " + lima.cookiesPerHourArr)

lima.render = function () {

  this.helpCustPerHour();

  for (let i = 0; i < lima.cookiesPerHourArr.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${lima.cookiesPerHourArr[i]}
      perHour`;
    ul5.appendChild(li);

  }

  let li = document.createElement('li');
  li.textContent = `Total: ${lima.dailyTotal}`;
  ul5.appendChild(li);  

};


function getRandomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

