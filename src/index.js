
const $ = require('jquery');
const _ = require('lodash');

let hello = () => console.log("Hello");
hello();

$("h2").text("Yes I can! Auto change that is");

let testArray = [1,2,3,4,5,6,7,8,9,10];
//let odds = _.remove(testArray,(n)=> n%2 === 0);
//let reduceArray = _.reduce(testArray,(sum,n)=> sum + n,0);
//_.forEach(testArray,(value) => console.log(value));
// let random = _.random(1,5,false);

// console.log(testArray);
//console.log(odds);
//console.log(reduceArray);
// console.log(random);