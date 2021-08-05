//task 1
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = parseInt("x, y");
console.log(res4);
console.log(typeof res4);

//task 2
const numEven = prompt("Is number even?");
if (numrEven % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
};
const num7 = prompt("Is number divided by 7");
if (num7 % 3 === 0) {
  console.log("The number is divided by 7");
} else {
  console.log("The number is not divided by 7");
}

// task 3
const arr = [];
arr[0] = 22;
arr[1] = "My array";
arr[2] = 3 > 1;
arr[3] = null;
alert(arr.length);
const newElement = prompt("What is your name?");
arr[5] = newElement;
alert(arr[5]);
arr.shift();
alert(arr);

// //task 4
let cities = ["Rome", "Lviv", "Warsaw"];
console.log(cities.join('*'));

// task 5
const isAdult = prompt('How old are you?');
if (isAdult >= 18){
  alert('You are adult!')
} else if (isAdult <= 10){
  alert('You are minor!')
};

// task 6a
const a = prompt('Length of triangle number 1');
const b = prompt('Length of triangle number 2');
const c = prompt('Length of triangle number 3');
if (a < 0 || b < 0 || c < 0) {
  console.log('Incorrect data')
}else {
  const p = (a + b + c) / 2;
  console.log(p);
  const s = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
  const fixedNum = s.toFixed(3);
  console.log(fixedNum);
};

// task 6b
const newArr = [a, b, c];
if(newArr[0] ** 2 == newArr[1] ** 2 + newArr[2] ** 2 || newArr[1] ** 2 == newArr[0] ** 2 + newArr[2] ** 2 || newArr[2] ** 2 == newArr[1] ** 2 + newArr[0] ** 2){
    console.log('The triangle is right-angled')
} else {
    console.log('The triangle is not right')
};


//task 7 - 1
let today = new Date();
let time = today.getHours();
if(time <= 5 && time >= 23 ){
    console.log('Good night')
} else if(time >= 5 && time <=11){
    console.log('Good morning')
} else if(time >= 11 && time <=17){
    console.log('Good day')
} else {
    console.log('Good evening')
  };

// task 7 -2
let today = new Date();
let time = today.getHours();
switch (true) { 
  case (time >= 23 && time <= 5) : console.log("Good night");
  break
  case (time >= 5 && time <=11) : console.log('Good day')
  break;
  case (time >= 11 && time <=17) : console.log('Good day')
  break;
  case (time >= 17&& time <=23) : console.log('Good day')
  break;
};