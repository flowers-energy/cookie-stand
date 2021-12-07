'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// object literals defined by city
//console.log(cookiesPerHour)
let seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cust: 0,
  //cPR: [0],
  

  getCust: function () {
    this.cust = getRandomCust(this.minCust, this.maxCust);
    console.log(this.cust);

    // console.log(this.cPR);
    
    // function cPR () {
    //   let hours = 1;
    //   for (let i = 0; i < hours.length; i++) {
    //     this.cPR = getCust * avgCookie;
    //     let cPRstr = ("yup");
    //     return cPR [this.cPR.push, cPRstr];

        // function mult(a, b) {
        //   let prod = (getCust * 2)
        //   console.log("prod " + prod);

        }
        
       
      //console.log(cPR)
      
    //function cookPerHour (a, b) {
    //  let cookiesPerHour = this.getCust * this.avgCookie;
    // }
    // console.log(cust);
    // seattle.cookiesPerHour = function(){
    // for (let [i] = this.cookiesPerHour; i < hours.length; i++) [
    //    this.cookiesPerHour = (this.getCust * this.avgCookie),]  
   }

//}
//}

//seattle.cookiesPerHr();
seattle.getCust();
let tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cust: 0,

  getCust: function () {
    this.cust = getRandomCust(this.minCust, this.maxCust);
    console.log(this.cust);
    // console.log(cust);
  }
}

tokyo.getCust();

let dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cust: 0,
  getCust: function () {
    this.cust = getRandomCust(this.minCust, this.maxCust);
    console.log(this.cust);
    // console.log(cust);
  }
}

dubai.getCust();

let paris = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cust: 0,
  getCust: function () {
    this.cust = getRandomCust(this.minCust, this.maxCust);
    console.log(this.cust);
    // console.log(cust);
  }
}

paris.getCust();
// 
let lima = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  cust: 0,
  getCust: function () {
    this.cust = getRandomCust(this.minCust, this.maxCust);
    console.log(this.cust);
    // console.log(cust);
  }
}

lima.getCust();






function getRandomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


